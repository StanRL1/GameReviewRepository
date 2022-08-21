import * as reviewService from '../../services/reviewService';
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
        let reviewTitle = formData.get('reviewTitle');
        let imageUrl = formData.get('imageUrl');
        let content = formData.get('content');
        let date = new Date();
        let ownerName = user.email;
        if (gameName && reviewTitle && imageUrl && content) {
            try {
                reviewService.create({
                    gameName,
                    reviewTitle,
                    imageUrl,
                    content,
                    date,
                    ownerName
                }, user.accessToken)
                    .then(result => {
                        addNotification("Review submitted", types.success);
                        navigate('/myReviews');
                    })
            } catch (ex) {
                addNotification("Cant submit review",types.warn);
            }
        }else{
            addNotification("All fields have to be filled",types.warn);
        }

    }

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-head">
                    <h2>Write a Review</h2>
                    <form onSubmit={reviewCreateHandler} method="post">
                        <div className="col-md-6 contact-left">
                            <label for="gameName"><b>Game Name</b></label>
                            <input type="text" className="text" name="gameName" id="gameName" placeholder="Game Name" required></input>
                            <label for="reviewTitle"><b>Review Title</b></label>
                            <input type="text" className="text" name="reviewTitle" id="reviewTitle" placeholder="ReviewTitle" required></input>
                            <label for="imageUrl"><b>Game Image</b></label>
                            <input type="text" className="text" name="imageUrl" id="imageUrl" placeholder="Img Url" required></input>
                            <div className="contact-right">
                                <textarea placeholder="Review" id="content" name="content"></textarea>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <button type="submit" className="registerbtn">Send</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default WriteReview;