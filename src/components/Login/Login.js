import * as authService from '../../services/authService';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import { type } from '@testing-library/user-event/dist/type';
import { Link } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        try {
            let { email, password } = Object.fromEntries(new FormData(e.currentTarget));
            if (email && password) {
                authService.login(email, password)
                    .then(authData => {
                        login(authData);
                        addNotification("Successfully logged in", types.info);
                        navigate('/');
                    }).catch((error)=>{
                        addNotification("Wrong credentials",types.danger);
                    });
            }
        } catch (e) {
            console.log("Cant log in")
        }

    }

    return (
        <section id="register-page" className="register">
            <form method="POST" onSubmit={loginSubmitHandler}>
                <div class="container">
                    <h1>Login</h1>
                    <p>Fill email and password to log in</p>


                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" required></input>

                    <button type="submit" class="registerbtn">Login</button>
                </div>

                <div class="container signin">
                    <p>Dont have an account?<Link className="button" to="/register">Register</Link></p>
                </div>
            </form>
        </section>
    );
}

export default Login;
