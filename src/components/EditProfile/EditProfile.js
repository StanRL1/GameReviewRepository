import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService';


const EditProfile = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext()
    const { addNotification } = useNotificationContext();
    const { login } = useAuthContext();

    const reviewEditHandler = (e) => {
        e.preventDefault();

        let { email, name, password, reppassword } = Object.fromEntries(new FormData(e.currentTarget))
        console.log(email, name, password,reppassword);
        if (email && name && password && reppassword) {
            if (password === reppassword) {
                authService.update(user._id,{email,password,name})
                .then(authData=>{
                    login(authData);
                    addNotification("Successfully changed Profile Info", types.info);
                    navigate('/');
                })
            } else {
                addNotification("Passwords must match", types.error)
            }
        } else {
            addNotification("All fields must be filled");
        }

    }

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-head">
                    <h2>Edit Profile</h2>
                    <form onSubmit={reviewEditHandler} method="post">
                        <div className="col-md-6 contact-left">
                            <label for="email"><b>Email</b></label>
                            <input type="email" className="text" name="email" id="email" defaultValue={user.email} required></input>
                            <label for="name"><b>Name</b></label>
                            <input type="text" className="text" name="name" id="name" defaultValue={user.name} required></input>
                            <label for="password"><b>New Password</b></label>
                            <input type="password" className="text" name="password" id="password" defaultValue={user.password} required></input>
                            <label for="reppassword"><b>Repeat New Password</b></label>
                            <input type="password" className="text" name="reppassword" id="reppassword" required></input>
                        </div>
                        <button type="submit" className="registerbtn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;