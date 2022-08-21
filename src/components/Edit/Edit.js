import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate, unstable_HistoryRouter  } from 'react-router-dom';
import * as reviewService from '../../services/reviewService';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import { type } from '@testing-library/user-event/dist/type';


const Edit = () => {
    const { reviewId } = useParams();
    const [review, setReview] = useState({});
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();

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
        if(reviewData.gameName && reviewData.reviewTitle && reviewData.imageUrl && reviewData.content){
            try{
            reviewService.update(review._id, reviewData)
                .then(info=>{
                    addNotification("Edited successfully",types.success);
                    navigate(-1);
                });
            }catch(ex){
                    addNotification("Something went wrong",types.error);
            }
        }
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