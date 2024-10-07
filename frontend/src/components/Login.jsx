import  { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    if (localStorage.getItem('userdata') !== null) {
      navigate('/explore');
    }
  }

  async function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      toast.warn("Please fill all fields", {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await fetch("https://rare-roots.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      console.log(data);

      if (data.message === "Login successful !!!") {
        localStorage.setItem('userdata', data.accessToken);
        toast.success("Login Successful!", {
          position: 'top-right',
          autoClose: 1000,
          onClose: () => navigate('/explore'),
        });
      } else {
        toast.error("Invalid Credentials", {
          position: 'top-right',
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, Please try again later", {
        position: 'top-right',
      });
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="log-head">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
          
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>

        <div className="login-register">
          <p>Don't have an account?</p>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
