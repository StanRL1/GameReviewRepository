import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNavigate } from 'react-router';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as messageService from '../../services/messageService';

const Contact = () => {
    const { user } = useAuthContext();

    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();

    const submitContact = (e) => {
        e.preventDefault();

        let { name, sender, subject, message } = Object.fromEntries(new FormData(e.currentTarget));

        if(!sender){
            sender=user.email
        }
        const date = new Date();

        if(name && sender && subject && message){
            try {
                messageService.mail(
                    name,
                    sender,
                    subject,
                    message,
                    date
                ).then(result => {
                    navigate("/reviews");
                    addNotification("Mail submitted",types.info);
                });

            } catch (ex) {
                console.log("Cannot submit mail");
            }
        }

    }
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-head">
                    <h2>Contact</h2>
                    <form onSubmit={submitContact} method="post">
                        <div className="col-md-6 contact-left">
                            <input type="text" className="text" name="name" placeholder="Name" required></input>
                            {user.email
                                ? null
                                : <input type="email" className="text" name="sender" placeholder="Email" required></input>
                            }
                            <input type="text" className="text" name="subject" placeholder="Subject" required></input>
                            <div className="col-md-6 contact-right">
                                <textarea placeholder="Message" name="message"></textarea>
                                <input type="submit" value="SEND" />
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12386182.960956775!2d-74.08302114251626!3d40.71866701702417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1436524193425" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                </div>
                <div className="address">
                    <h3>Our Locations</h3>
                    <div className="locations">
                        <ul>
                            <li><span></span></li>
                            <li>
                                <div className="address-info">
                                    <h4>Sofeto , Bulgaria</h4>
                                    <p>Po Studentski</p>
                                    <p>Phone: 123 456 7890</p>
                                    <p>Mail: <a href="mailto:kakvaparola@abv.bg">kakvaparola@abv.bg</a></p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li><span></span></li>
                            <li>
                                <div className="address-info">
                                    <h4>Pazardzhik, Bulgaria</h4>
                                    <p>Малък град, ще се намерим</p>
                                    <p>Phone: 123 456 7890</p>
                                    <p>Mail: <a href="mailto:kakvaparola@abv.bg">kakvaparola@abv.bg</a></p>                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;