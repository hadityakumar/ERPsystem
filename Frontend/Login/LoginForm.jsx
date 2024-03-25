


// import React, { useState } from 'react';
// import './LoginForm.css';
// import axios from 'axios';

// function LoginForm() {
//   const [showLogin, setShowLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const toggleSignup = () => {
//     setShowLogin(false);
//   };

//   const toggleLogin = () => {
//     setShowLogin(true);
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', { username, password }, { withCredentials: true });
//       console.log(response.data);
//       // Handle successful login, such as redirecting to another page
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Invalid username or password.');
//     }
//   };
//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/register', { username, password }, { withCredentials: true });
//       console.log(response.data);
//       // Handle successful registration, such as displaying a success message
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <>
//       <div className="form-modal">
//         <div className="form-toggle">
//           <button
//             id="login-toggle"
//             onClick={toggleLogin}
//             style={{ backgroundColor: showLogin ? "#5a8dee" : "#fff", color: showLogin ? "#fff" : "#222" }}
//           >
//             log in
//           </button>
//           <button
//             id="signup-toggle"
//             onClick={toggleSignup}
//             style={{ backgroundColor: showLogin ? "#fff" : "#5a8dee", color: showLogin ? "#222" : "#fff" }}
//           >
//             sign up
//           </button>
//         </div>

//         <div id="login-form" style={{ display: showLogin ? "block" : "none" }}>
//           <form>
//             <input type="text" placeholder="Enter Roll No" onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
//             <button type="button" className="btn login" onClick={handleLogin}>login</button>
//             <p><a href="javascript:void(0)">Forgotten account</a></p>
//             <hr />
//           </form>
//         </div>

//         <div id="signup-form" style={{ display: showLogin ? "none" : "block" }}>
//           <form>
//             <input type="email" placeholder="Enter your Roll No" onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} />
//             <button type="button" className="btn signup" onClick={handleRegister}>create account</button>
//             <hr />
//           </form>
//         </div>
//       </div>
//       {errorMessage && <p>{errorMessage}</p>}
//     </>
//   );
// }

// export default LoginForm;






import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function LoginForm() {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleSignup = () => {
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(true);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password }, { withCredentials: true });
      console.log(response.data);
      // Check for successful login in the response (modify based on your API)
      if (response.data.message=='Login successful.') { 
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid username or password.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', { username, password }, { withCredentials: true });
      console.log(response.data);
      // If registration successful, navigate to dashboard
      if (response.data.message=='Registration successful.') { 
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to register. Please try again.');
    }
  };

  return (
    <>
      <div className="form-modal">
        <div className="form-toggle">
          <button
            id="login-toggle"
            onClick={toggleLogin}
            style={{ backgroundColor: showLogin ? "#5a8dee" : "#fff", color: showLogin ? "#fff" : "#222" }}
          >
            log in
          </button>
          <button
            id="signup-toggle"
            onClick={toggleSignup}
            style={{ backgroundColor: showLogin ? "#fff" : "#5a8dee", color: showLogin ? "#222" : "#fff" }}
          >
            sign up
          </button>
        </div>

        <div id="login-form" style={{ display: showLogin ? "block" : "none" }}>
          <form>
            <input type="text" placeholder="Enter Roll No" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="btn login" onClick={handleLogin}>login</button>
            <p><a href="javascript:void(0)">Forgotten account</a></p>
            <hr />
          </form>
        </div>

        <div id="signup-form" style={{ display: showLogin ? "none" : "block" }}>
          <form>
            <input type="email" placeholder="Enter your Roll No" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="btn signup" onClick={handleRegister}>create account</button>
            <hr />
          </form>
        </div>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default LoginForm;




