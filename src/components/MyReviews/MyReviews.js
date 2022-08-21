import { useState, useEffect } from 'react';

import * as reviewService from '../../services/reviewService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import GameReviewComponent from '../GameReview/GameReviewComponent/GameReviewComponent';

const MyPets = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();

    useEffect(() => {
		console.log(user);
		try{
        reviewService.getMyReviews(user._id)
            .then(petResult => {
                setReviews(petResult);
            });
		}catch(ex){
			addNotification("Cannot load your reviews",types.warn);
		}
    }, []);

    return (
		<div class="review">
		<div class="container">
			<h2 >My Reviews</h2>
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

export default MyPets;