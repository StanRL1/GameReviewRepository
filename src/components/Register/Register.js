import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNavigate } from 'react-router';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import { Link } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    
    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, psw, pswrepeat ,name} = Object.fromEntries(new FormData(e.currentTarget));

        if (psw && pswrepeat && psw === pswrepeat && email && name ) {
            try{
            authService.register(email, psw,name)
                .then(authData => {
                    console.log(authData.message);
                    if(authData.message==="A user with the same email already exists"){
                        addNotification("A user with the same email already exists",types.warn);
                    }else{
                    login(authData);
                    addNotification("Registered successfully", types.success)
                    navigate('/');
                    }
                });
            }catch(ex){
                addNotification("Cannot process register",types.warn);
            }
        }else{
            addNotification("Passwords dont match",types.warn);
        }
    }

    return (
        <section id="register-page" className="register">
            <form method="POST" onSubmit={registerSubmitHandler}>
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>


                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter name" name="name" id="name" required></input>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

                    <label for="pswrepeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="pswrepeat" id="pswrepeat" required></input>


                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <Link className="button" to="/login">Login</Link>.</p>
                </div>
            </form>
        </section>
    );
}

export default Register;
