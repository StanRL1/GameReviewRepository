
import MyImage from '../../../images/icon1.png';
import * as commentService from '../../../services/commentService';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import { useAuthContext } from '../../../contexts/AuthContext';
const CommentComponent = (
    comment
) => {
    const navigate= useNavigate();
        const { user } = useAuthContext();
    const commentId = comment.comment._id;
    const commentUserId= comment.comment.userId;
    const { addNotification } = useNotificationContext();

    const deleteHandler = () => {
        try{
        commentService.deleteComment(commentId, user.accessToken)
            .then(() => {
                navigate("/reviews");
            });
        }catch(ex){
            addNotification("Comment deleted !",types.info);
        }
    }

    return (
        <div class="media response-info">
            <div class="media-left response-text-left">
                <div>
                    <img class="media-object" src={MyImage} alt="" />
                </div>
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