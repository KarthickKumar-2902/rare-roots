import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './../styles/Posts.css';
// import { IoMdArrowRoundBack } from "react-icons/io";


function Posts() {
  const navigate = useNavigate();
  const [productname, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (!localStorage.getItem('userdata')) {
      toast.error("Unauthorized! Please login to continue.", {
        position: 'top-right',
        onClose: () => navigate('/login'),
        autoClose: 1000,
      });
    }
  };

  const uploadFile = (e) => {
    setFile(e.target.files[0]);
  };

  const getCurrentUserEmail = () => {
    const accessToken = localStorage.getItem('userdata');
    if (accessToken) {
      const tokenParts = accessToken.split('.');
      const encodedPayload = tokenParts[1];
      const decodedPayload = atob(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'));
      const payload = JSON.parse(decodedPayload);
      return payload.useremail;
    }
    return null;
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch("https://rare-roots.onrender.com/image/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      return result[1]; // Assuming this is the image URL
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getUserObjectId = async (email) => {
    try {
      const response = await fetch('https://rare-roots.onrender.com/login/obj', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      return result[0]._id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const imageLink = await uploadImage(file);
      const email = getCurrentUserEmail();
      if (email) {
        const objectId = await getUserObjectId(email);
        if (objectId) {
          const post = {
            product: {
              name: productname,
              description,
              image: imageLink,
              location: {
                latitude: null, // Assuming location is not yet implemented
                longitude: null,
              },
              contact,
            },
            objectid: objectId,
          };
          try {
            const response = await fetch('https://rare-roots.onrender.com/data/post', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userdata')}`,
              },
              body: JSON.stringify(post),
            });
            const result = await response.json();
            if (result.length !== 0) {
              toast.success("Upload successful!", {
                position: 'top-right',
                autoClose: 3000,
              });
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
  };

  return (
    <>
      <div className='container-p'> 
        
        <div className='box'>
          <div className="pro-head">
          <h1>Add products</h1>
          </div>
          <label htmlFor='productname'>Product Name</label>
          <input
            id='productname'
            type='text'
            value={productname}
            onChange={(e) => setProductName(e.target.value)}
          />
          <label htmlFor='description'>Product Description</label>
          <textarea
            id='description'
            placeholder='Enter product description here'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor='contact'>Contact Details</label>
          <textarea
            id='contact'
            placeholder='Contact details here...'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor='file'>Upload Image</label>
          <input
            id='file'
            type='file'
            onChange={uploadFile}
          />
          <button onClick={handleSubmit}>Upload</button>
          <Link to='/myproducts/myposts'>
            <button>My Posts</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Posts;














// import { useEffect, useState } from 'react'
// // import Allpost from './Allpost'
// import './../styles/Posts.css'
// import { Link, useNavigate } from 'react-router-dom'
// import { ToastContainer,toast } from 'react-toastify'


// function Posts() {

//   const navigate =useNavigate()

//   const [productname,setproductname]=useState('')
//   const [Description,setdescription]=useState('')
//   const [contact,setcontact]=useState('')
//   const [ufile,setufile]=useState(null)
//   useEffect(()=>{
//     checkauth()
//     // window.addEventListener('unload',handleunload)
//     // return ()=>{
//     // window.removeEventListener('unload',handleunload)
//     // }
//     // function handleunload(){
//     //   localStorage.removeItem('userdata');
//     // }
//   })
//   function checkauth(){
//     if(localStorage.getItem('userdata')==null)
//     {
//       toast.error("Unauthorized !, Please Login to Continue",{
//         position:'top-right',
//         onclose:()=>{
//           navigate('/login')
//         },
//         autoClose:1000
//       })
     
//     }
//  }

//   let imglink
//   let desc
//   let lat
//   let longi
//   let curruseremail
//   let objid
//   var access
//   async function iupload(e){
//     console.log(e.target.files);
//     setufile(e.target.files[0]);
//   }
//   async function display(){
//     // Your JWT Access Token
// var accessToken = `${localStorage.getItem('userdata')}`;
// access=accessToken;

// // Split the token into its three parts: header, payload, and signature
// var tokenParts = accessToken.split('.');

// // Access the payload (second part)
// var encodedPayload = tokenParts[1];

// // Decode the Base64Url-encoded payload
// var decodedPayload = atob(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'));

// // Parse the JSON data from the decoded payload
// var payloadObject = JSON.parse(decodedPayload);

// // Access the information in the payload
// curruseremail=payloadObject.useremail;

//   }
//   async function load(){
//     const n=document.getElementById("ufile");
//     desc=document.getElementById('Description').value;

//     const ff=n.files[0]
//     const data=new FormData();
//     data.append('file',ff);
//     console.log(data)
//     await imgup(data)
//   }

//   async function imgup(data){
//     await fetch("https://rare-roots.onrender.com/image/upload",{
//         method:"POST",
//         body:data
//       })
//       .then(res=>res.json())
//       .then(result=>{
//         imglink=result[1];
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//       console.log(imglink)
//       console.log(desc)
//   }
//   function getloc(){
//     // Check if geolocation is supported by the browser
//     if ("geolocation" in navigator) {
//    // Prompt user for permission to access their location
//    navigator.geolocation.getCurrentPosition(
//    // Success callback function
//    (position) => {
//     // Get the user's latitude and longitude coordinates
//      lat = position.coords.latitude;
//      longi = position.coords.longitude;

//     // Do something with the location data, e.g. display on a map
//     console.log(`Latitude: ${lat}, longitude: ${longi}`);
//     },
//     // Error callback function
//     (error) => {
//     // Handle errors, e.g. user denied location sharing permissions
//     console.error("Error getting user location:", error);
//   }
// );
// } else {
// // Geolocation is not supported by the browser
// console.error("Geolocation is not supported by this browser.");
// }


// }

// async function getmypost(){
//  await display()
//  await getobjid()
//  // console.log(objid)
//     const reqobj={
//       objectid:objid
//     }
//     const res=await fetch(`https://rare-roots.onrender.com/api/getMyPost?objectid=${objid}`,{
//       method:"GET",
//       headers:{
//         'Authorization':`Bearer ${localStorage.getItem('userdata')}`
//       }
//     })
//     const info=await res.json();
//     console.log(info)
// }
// async function getobjid(){
//   const res=await fetch('https://rare-roots.onrender.com/login/obj',{
//     method:"POST",
//   body:JSON.stringify({
//     "email":`${curruseremail}`
//   }),
//   headers: {
//     'Content-Type': 'application/json'

//   }
// })
//   const info= await res.json();
//   console.log(info)
//   objid=info[0]._id
// }

// async function control(){
//   getloc();
//   await load();
//   await display()
//   await getobjid();
//   await helper()
//   setproductname('');
// setdescription('');
// setcontact('');
// setufile(null);
// }

// async function helper(){
// const obj={
//   "id":String,
//   "product":{
//       "name":document.getElementById('productname').value,
//       "description":desc,
//       "image":imglink,
//       "location":{
//           "latitude":lat,
//           "longitude":longi
//       },
//       "contact":document.getElementById('contact').value


//   },
//   "objectid":objid
// }
   


//  // console.log(obj);
//    const res=await fetch('https://rare-roots.onrender.com/data/post',{
//     method:"POST",
//     body:JSON.stringify(obj),
//     headers:{
//       'Content-Type':'application/json',
//       'Authorization':`Bearer ${localStorage.getItem('userdata')}`
//     }
//    })

//    const info=await res.json();
//    console.log(info);
//    if(info.length!=0)
//    {
//        toast.success("Upload Successful !",{
//         position:'top-right',
//         autoClose:3000
//        })
//    }
// }








//   return (
//     <>
//     <div className='container'>
//       <div  className='box'>
//          <label>Enter the product name here</label>
//        <input id='productname' value={productname} onChange={(e) => setproductname(e.target.value)}></input>
//        <br></br>
//        <label>Enter the product description</label>
//         <br></br>
//         <textarea id='Description' placeholder='Enter the product description here' value={Description} onChange={(e) => setdescription(e.target.value)}></textarea>
//         <br></br>
//         <label>Enter the contact details </label>
//         <br></br>
//         <textarea id='contact' placeholder='Contact details here...'value={contact} onChange={(e) => setcontact(e.target.value)}></textarea>
//         <br></br>

    
//        <input type='file' id='ufile' onChange={iupload} ></input>
//        <br></br>
//        <button id='upload' onClick={control}>Upload </button>

//        <br></br>
//        <Link to={'/myproducts/myposts'}> 
//        <button>My posts</button>
//        </Link>
//        </div>
//        </div>
//     <ToastContainer/>
//     </>
//   )
// }

// export default Posts



