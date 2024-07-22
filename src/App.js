import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log('email', email, 'password', password);
      const response = await axios.post('http://localhost:3001/api/v1/usernew/register', {
        email,
        password
      });
      setMessage('Registration successful');
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <>
      <div className="row res">
        <div className="fb-form res">
          <div className="card">
            <h1>facebook</h1>
            <p>Connect with friends and the world </p>
            <p> around you on Facebook.</p>
          </div>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="fb-submit">
              <button type="submit" className="login">Register</button>
              <a href="#" className="forgot">Forgot password?</a>
            </div>
            <hr/>
            <div className="button">
              <a href="#">Create new account</a>
            </div>
          </form>
          {/* {message && <p>{message}</p>} */}
        </div>
      </div>
      <footer>
        <div className="footer-langs">
          <ol>
            <li>English (UK)</li>
            <li><a href="#">मराठी</a></li>
            <li><a href="#">हिन्दी</a></li>
            <li><a href="#">اردو</a></li>
            <li><a href="#">ગુજરાતી</a></li>
            <li><a href="#">ಕನ್ನಡ</a></li>
            <li><a href="#">ਪੰਜਾਬੀ</a></li>
            <li><a href="#">தமிழ்</a></li>
            <li><a href="#">বাংলা</a></li>
            <li><a href="#">తెలుగు</a></li>
            <li><a href="#">മലയാളം</a></li>
            <li><button>+</button></li>
          </ol>
          <ol>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Messenger</a></li>
            <li><a href="#">Facebook Lite</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Meta Pay</a></li>
            <li><a href="#">Meta Store</a></li>
            <li><a href="#">Meta Quest</a></li>
            <li><a href="#">Imagine with Meta AI</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Threads</a></li>
            <li><a href="#">Fundraisers</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Voting Information Centre</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Privacy Centre</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Create ad</a></li>
            <li><a href="#">Create Page</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">AdChoices</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact uploading and non-users</a></li>
          </ol>
          <small>Meta © 2024</small>
        </div>
      </footer>
    </>
  );
}

export default App;
