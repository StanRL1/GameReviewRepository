
import MyImage from '../../../images/icon1.png';
import * as commentService from '../../../services/commentService';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
const CommentComponent = (
    comment
) => {
    const navigate= useNavigate();
        const { user } = useAuthContext();
    const commentId = comment.comment._id;
    const commentUserId= comment.comment.userId;

    const deleteHandler = () => {
        try{
        commentService.deleteComment(commentId, user.accessToken)
            .then(() => {
                navigate("/reviews");
            });
        }catch(e){
            console.log(e.message);
        }
    }

    return (
        <div class="media response-info">
            <div class="media-left response-text-left">
                <a>
                    <img class="media-object" src={MyImage} alt="" />
                </a>
                <h5>{ comment.comment.writer}</h5>
            </div>
            <div class="media-body response-text-right">
                <p>Comment:</p>

                <p>{ comment.comment.content}</p>
                <ul>
                    <li>{ comment.comment.date}</li>
                </ul>
            </div>
            {user._id === commentUserId 
                ? <button className="buttonDelete" onClick={deleteHandler}>Delete</button> : <div></div>
            }

            <div class="clearfix"> </div>
        </div>
    )
}

export default CommentComponent;