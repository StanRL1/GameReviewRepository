import './App.css';
import Info from './components/Info/Info.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import GameReview from './components/GameReview/GameReview';
import Reviews from './components/Reviews/Reviews';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register.js';
import Contact from './components/ContactUs/Contact.js';
import MyReviews from './components/MyReviews/MyReviews.js';
import WriteReview from './components/WriteReview/WriteReview';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Notification from './components/General/Notification';
import PrivateRoute from './components/General/PrivateRoute';
import NotFoundErrorBoundary from './components/General/NotFoundErrorBoundary';
import { NotificationProvider } from './contexts/NotificationContext';
import Edit from './components/Edit/Edit.js';
import EditProfile from './components/EditProfile/EditProfile.js';

function App() {
  return (
    <NotFoundErrorBoundary>
      <AuthProvider>
        <Info></Info>
        <NotificationProvider>
          <Header></Header>
          <Notification></Notification>
          <main id="site-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reviews" element={<PrivateRoute><Reviews /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
              <Route path="/gameReview/:reviewId" element={<GameReview />} />
              <Route path="/writeReview" element={<PrivateRoute><WriteReview /></PrivateRoute>} />
              <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
              <Route path="/myReviews" element={<PrivateRoute><MyReviews /></PrivateRoute>} />
              <Route path="/*" element={<Dashboard />} />
              <Route path="/edit/:reviewId" element={<PrivateRoute><Edit/></PrivateRoute>} />
              <Route path="/editProfile" element={<PrivateRoute><EditProfile/></PrivateRoute>} />

            </Routes>
          </main>
        </NotificationProvider>
        <Footer></Footer>
      </AuthProvider>
    </NotFoundErrorBoundary>
  );
}

export default App;
