import { Toast} from 'react-bootstrap';
import { useNotificationContext } from '../../contexts/NotificationContext';
import './Notification.css';

const Notification = () => {
    const { notification } = useNotificationContext();

    if(!notification.show)
    {
        return null;
    }

  return (
    <div className="notification d-inline-block m-1 " bg={notification.type}>
      <div className={notification.type}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Notification</strong>
        <div>{notification.message}</div>
      </div>
    </div>
  );
}

export default Notification;

