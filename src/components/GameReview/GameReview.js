
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './GameReview.css'
import * as commentService from '../../services/commentService.js';
import * as reviewService from '../../services/reviewService.js';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import CommentComponent from '../GameReview/CommentComponent/CommentComponent.js'
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const GameReview = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { reviewId } = useParams();
    const [review, setReview] = useState([]);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const { addNotification } = useNotificationContext();

    useEffect(() => {
        try {
            reviewService.getOne(reviewId)
                .then(result => {
                    setReview(result);
                })
            commentService.getReviewComments(reviewId)
                .then(comments => {
                    setComments(comments);
                })

            likeService.getReviewLikes(reviewId)
                .then(likes => {
                    setReview(state => ({ ...state, likes }))
                })
            likeService.getReviewLikesIds(reviewId)
                .then(likes => {
                    setLikes(state => ([...likes]))
                })
        } catch (e) {
            console.log("Cant load content");
        }

    }, []);

    const submitComment = (e) => {
        e.preventDefault();

        let { comment } = Object.fromEntries(new FormData(e.currentTarget));

        let content = comment;
        let writer = user.email;
        let userId = user._id;
        const date = new Date();

        if (comment) {
            try {
                commentService.comment(
                    userId,
                    writer,
                    reviewId,
                    content,
                    date
                ).then(result => {
                    navigate("/reviews");
                });
                addNotification("Comment submitted",types.info);

            } catch (e) {
                console.log("Cannot submti comment");
            }
        }else{
            addNotification("Comment cant be empty",types.warn);

        }

    }

    const deleteHandler = (e) => {
        e.preventDefault();
        try {
            reviewService.destroy(reviewId, user.accessToken)
                .then(() => {
                });

            console.log(comments);
            comments.forEach(comment => commentService.deleteComment(comment._id, user.accessToken));
            likes.forEach(like => likeService.deleteLike(like, user.accessToken));
            addNotification("Review Deleted",types.info);

        } catch (e) {
            console.log("Cant delete review")
        }
        navigate("/");

    };

    const editHandler = () => {

    }

    const likeButtonClick = (e) => {
        e.preventDefault();
        if (user._id === review._ownerId) {
            return;
        }

        if (review.likes.includes(user._id)) {
            addNotification("You have already liked that review",types.info);
            return;
        }
        try {
            likeService.like(user._id, reviewId)
                .then((like) => {
                    setLikes(likes => ([...likes, like[4]]));
                    review.likes = [...review.likes, user._id];
                    setReview(review => ({ ...review }));
                    reviewService.like(reviewId, review, user.accessToken)
                        .then(() => {
                            console.log('success');
                        });
                });
            addNotification("Successfully logged in",types.info);

        } catch (e) {
            console.log("Cant like review")
        }
    }
    const ownerButtons = (
        <div>
            <button onClick={likeButtonClick} className="buttonDelete" disabled={review.likes?.includes(user._id)}>Like</button>;

            {/* <button onClick={editHandler} className="buttonDelete" >Edit</button> */}
            <button onClick={deleteHandler} className="buttonDelete" >Delete</button>
        </div>
    );
    const userButtons = <button onClick={likeButtonClick} className="buttonDelete" disabled={review.likes?.includes(user._id)}>Like</button>;

    return (<div className="blog">
        <div class="container">
            <div class="col-md-8 blog-left" >
                <div class="blog-info">
                    <div class="blog-info-text">
                        <div class="blog-img">
                            <img src={review.imgUrl} alt="" />
                        </div>
                        <p class="snglp">{review.content}</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                    <div class="comment-icons">
                        <ul>
                            <li><span></span>Lorem ipsum dolor sit </li>
                            <li><span class="clndr"></span>{review.date}</li>
                            <li><span class="admin"></span> {review.ownerName}</li>
                            <li><span class="cmnts"></span>{comments.length}</li>

                            <li>{review.likes?.length || 0}</li>
                        </ul>
                    </div>
                    <div>
                        {user._id && (user._id === review._ownerId
                            ? ownerButtons
                            : userButtons
                        )}
                    </div>
                    <div class="response">
                        <h4>Responses</h4>
                        <div class="media response-info">
                            {comments.length > 0
                                ? (<div>
                                    {comments.map(x => <CommentComponent key={x._id} comment={x} />)}
                                </div>
                                )
                                : <p className="no-pets">No Comments currently exist in the DB !</p>
                            }
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
            <div class="coment-form" >
                <form onSubmit={submitComment} method="POST">
                    <input type="text" className="text" name="subject" id="subject" placeholder="Subject" required></input>
                    <label for="comment"><b>Comment</b></label>
                    <input type="text" name="comment" id="comment" placeholder="Comment" required></input>
                    <button className="buttonDelete" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div class="clearfix"> </div>
    </div>
    );
}
export default GameReview;