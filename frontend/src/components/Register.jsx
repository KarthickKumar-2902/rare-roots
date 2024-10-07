import  { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    if (localStorage.getItem('userdata') != null) {
      navigate('/explore');
    }
  }

  const saveToDb = () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !password || !phone) {
      toast.warn("Please fill all fields", {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    fetchData();

    async function fetchData() {
      try {
        const response = await fetch("https://rare-roots.onrender.com/register", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
            phoneno: phone
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        console.log(data);

        if (data === "Success") {
          navigate('/login');
        } else {
          toast.warn(data, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      } catch (err) {
        toast.error("Something went wrong, Please try again later", {
          position: 'top-right',
        });
        console.error(err);
      }
    }
  }

  return (
    <>
      <div className="register-container">
        <div className="reg-head">
          <h1>Register</h1>
        </div>
        <div className='register-form'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />

          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" required />

          <button type="submit" onClick={saveToDb}>Register</button>
        </div>

        <div className="register-login">
          <p>Already have an account?</p>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
