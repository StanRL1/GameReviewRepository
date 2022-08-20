import { Link } from 'react-router-dom';
import './Component.css'
const GameReviewComponent = ({
    review
}) => {
    return (
        <div class="col-md-4 sed-md">
            <div class=" col-1">
               <div><img class="img-responsive" src={review.imageUrl} alt=""></img></div>
                <h4><div>{review.reviewTitle}</div></h4>
                <Link className="detailsButton" to={`/gameReview/${review._id}`}>Details</Link>
            </div>
        </div>
    );
}

export default GameReviewComponent;