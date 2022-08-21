import GameReviewComponent from "../GameReview/GameReviewComponent/GameReviewComponent";
import { useState, useEffect } from 'react';
import * as reviewService from '../../services/reviewService';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
    const { addNotification } = useNotificationContext();

	useEffect(() => {
		try{
        reviewService.getAll()
            .then(result => {
                setReviews(result);
            })
            .catch(err => {
                console.log(err);
            })}
			catch(ex){
				addNotification("Cannot load reviews");
			}
    }, []);
	
	return (
		<div class="review">
			<div class="container">
				<h2 >Reviews</h2>
				<div class="review-md1">
					{reviews.length > 0
						? (<div>
							{ reviews.map(x => <GameReviewComponent key={x._id} review={x} />) }
							</div>
						)
						: <p className="no-pets">No Reviews currently exist in the DB !</p>
					}
						
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;