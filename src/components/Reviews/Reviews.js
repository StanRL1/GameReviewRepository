import GameReviewComponent from "../GameReview/GameReviewComponent/GameReviewComponent";
import { useState, useEffect } from 'react';
import * as reviewService from '../../services/reviewService';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		try{
        reviewService.getAll()
            .then(result => {
                setReviews(result);
            })
            .catch(err => {
                console.log(err);
            })}
			catch(e){
				console.log(e.message);
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