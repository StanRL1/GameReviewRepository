import * as gameService from '../../services/gameService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const WriteReview = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();

    const reviewCreateHandler = (e) => {

        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let gameName = formData.get('gameName');
        let imageUrl = formData.get('imageUrl');
        let rating = formData.get('rating');
        console.log(rating);
        if (gameName && rating && imageUrl) {
            try {
                gameService.create({
                    gameName,
                    imageUrl,
                    rating
                }, user.accessToken)
                    .then(result => {
                        addNotification("Game submitted", types.success);
                        navigate('/gamesAll');
                    })
            } catch (ex) {
                addNotification("Cant submit review", types.warn);
            }
        } else {
            addNotification("All fields have to be filled", types.warn);
        }
    
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-head">
                    <h2>Create a Game</h2>
                    <form onSubmit={reviewCreateHandler} method="post">
                        <div className="col-md-6 contact-left">
                            <label for="gameName"><b>Game Name</b></label>
                            <input type="text" className="text" name="gameName" id="gameName" placeholder="Game Name" required></input>
                            <label for="imageUrl"><b>Game Image</b></label>
                            <input type="text" className="text" name="imageUrl" id="imageUrl" placeholder="Img Url" required></input>
                            <div className="clearfix"></div>
                            <label for="imageUrl"><b>Rating</b></label>

                            <select name="rating" id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <button type="submit" className="registerbtn">Send</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default WriteReview;