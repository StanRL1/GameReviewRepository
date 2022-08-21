import GameReviewComponent from "../GameReview/GameReviewComponent/GameReviewComponent";
import { useState, useEffect } from 'react';
import * as reviewService from '../../services/reviewService';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as gameService from '../../services/gameService';
import GameComponent from "./GameComponent";

const Games = () => {
	const [games, setGames] = useState([]);
    const { addNotification } = useNotificationContext();

	useEffect(() => {
		try{
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
            .catch(err => {
                console.log(err);
            })}
			catch(ex){
				addNotification("Cannot load games");
			}
    }, []);

    console.log(games);
	
	return (
		<div class="review">
			<div class="container">
				<h2 >Games</h2>
				<div class="review-md1">
					{games.length > 0
						? (<div>
							{ games.map(x => <GameComponent key={x._id} game={x} />) }
							</div>
						)
						: <p className="no-pets">No Games currently exist in the DB !</p>
					}
						
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	);
}

export default Games;