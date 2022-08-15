import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate, unstable_HistoryRouter  } from 'react-router-dom';
import * as reviewService from '../../services/reviewService';


const Edit = () => {
    const { reviewId } = useParams();
    const [review, setReview] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        try {
            reviewService.getOne(reviewId)
                .then(result => {
                    setReview(result);
                });
        } catch (e) {
            console.log("Cant load content");
        }

    }, []);

    const reviewEditHandler = (e) => {
        e.preventDefault();

        let reviewData = Object.fromEntries(new FormData(e.currentTarget))
        reviewData={...reviewData,likes:review.likes};
        console.log(reviewData);
        reviewService.update(review._id, reviewData)
            .then(navigate(-1));
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-head">
                    <h2>Edit</h2>
                    <form onSubmit={reviewEditHandler} method="post">
                        <div className="col-md-6 contact-left">
                            <label for="gameName"><b>Game Name</b></label>
                            <input type="text" className="text" name="gameName" id="gameName" defaultValue={review.gameName} required></input>
                            <label for="reviewTitle"><b>Review Title</b></label>
                            <input type="text" className="text" name="reviewTitle" id="reviewTitle" defaultValue={review.reviewTitle} required></input>
                            <label for="imageUrl"><b>Game Image</b></label>
                            <input type="text" className="text" name="imageUrl" id="imageUrl" defaultValue={review.imageUrl} required></input>
                            <div className="contact-right">
                                <textarea placeholder="Review" id="content" name="content" defaultValue={review.content}></textarea>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <button type="submit" className="registerbtn">Send</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit;