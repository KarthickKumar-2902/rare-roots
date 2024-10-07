import { useState, useEffect } from 'react';
import Allpost from './Allpost';
import './../styles/Explore.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Explore() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    checkAuth();
    getPosts();
  }, []);

  function checkAuth() {
    if (localStorage.getItem('userdata') == null) {
      toast.error("Unauthorized! Please Login to Continue", {
        position: 'top-right',
        onClose: () => {
          navigate('/login');
        },
        autoClose: 1000
      });
      navigate('/login');
    }
  }

  async function getPosts() {
    try {
      const res = await fetch('https://rare-roots.onrender.com/api/getAllPosts', {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userdata')}`
        }

      });
      
      const info = await res.json();
      console.log(info);
      setData(info);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  if (data.length === 0) {
    return (
      <div className="loading-container">
        <img src='https://img1.picmix.com/output/stamp/normal/0/8/0/6/2306080_b674e.gif' alt="Loading..." className="loading-image" />
      </div>
    );
  }

  return (
    <>
      <div className='explore-grid'>
        
        {data.map((res, index) => {
          return <Allpost key={index} res={res} />;
        })}
      </div>
      <ToastContainer />
    </>
  );
}

export default Explore;
