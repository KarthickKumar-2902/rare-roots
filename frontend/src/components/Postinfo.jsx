// import React from "react";
// import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./../styles/Postinfo.css";
import { ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Postinfo() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getpost();
    // window.addEventListener('unload',handleunload)
    // return ()=>{
    // window.removeEventListener('unload',handleunload)
    // }
    // function handleunload(){
    //   localStorage.removeItem('userdata');
    // }
  }, []);
  const [data, setdata] = useState([]);

  async function getpost() {
    const res = await fetch(
      `https://rare-roots.onrender.com/api/getOnePost?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userdata")}`,
        },
      }
    );
    const info = await res.json();
    setdata(info);
    //console.log(data);
  }

  function showmap() {
    const destination = `${data.product.location.latitude},${data.product.location.longitude}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${destination}`;
    window.open(url, "_blank");
  }
  function nav() {
    navigate("/explore");
  }

  if (data.length == 0) {
    return <div className="loading-container">
    <img src='https://img1.picmix.com/output/stamp/normal/0/8/0/6/2306080_b674e.gif' alt="Loading..." className="loading-image" />
  </div>
  }
  return (
    <>
      {/* <Header/> */}
      <div className="product-det">
        <button onClick={nav} className="back-button">
          <IoMdArrowRoundBack />
        </button>
        <div className="container">
          <div className="post-info-box">
            <h3> {`${data.product.name}`}</h3>
            <img src={`${data.product.image}`} alt="Image Loading"></img>
            <h4 className="desc">{`${data.product.description}`}</h4>
            <h4 className="contact">{`${data.product.contact}`}</h4>
            <button onClick={showmap}>Get product location</button>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default Postinfo;
