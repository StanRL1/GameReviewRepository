import { Link } from 'react-router-dom';
import './Component.css'
const GameComponent = ({
    game
}) => {
    return (
        <div class="col-md-4 sed-md">
            <div class=" col-1">
               <div><img class="img-responsive" src={game.imageUrl} alt=""></img></div>
                <h4><div>{game.gameName}</div></h4>
                <h4><div>{game.rating}</div></h4>
            </div>
        </div>
    );
}

export default GameComponent;