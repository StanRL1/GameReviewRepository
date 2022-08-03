import { Link } from 'react-router-dom';
import './Component.css'
const GameReviewComponent = ({
    review
}) => {
    return (
        <div class="col-md-4 sed-md">
            <div class=" col-1">
                <a href="single.html"><img class="img-responsive" src={review.imgUrl} alt=""></img></a>
                <h4><a href="single.html">{review.reviewTitle}</a></h4>
                <Link className="detailsButton" to={`/gameReview/${review._id}`}>Details</Link>
            </div>
        </div>
    );
}

export default GameReviewComponent;