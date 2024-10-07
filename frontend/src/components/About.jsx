import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './../styles/About.css'; // Make sure this CSS file is included

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    checkauth();
  }, []);

  function checkauth() {
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

  return (
    <>
      <div className='about-container'>
        <div className='intro-section'>
          <h1>Welcome to RareRoots</h1>
          <p>Your exclusive gateway to a world of exceptional products, meticulously curated for those who seek the extraordinary.</p>
          <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add21737efd7005aae65_hero-top%402x.png' alt='RareRoots Banner' className='intro-image' />
        </div>

        <section className='mission-section'>
          <p>At RareRoots, we pride ourselves on offering a unique platform that cuts out the middleman, ensuring a direct and authentic connection between producers of rare herbs and nuts and the discerning customers who appreciate them.</p>
        </section>
        <h2 className='why'>Why choose RareRoots?</h2>
        <section className='afeatures-section'>

          <div className='afeature'>
            {/* <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2d36c718fe4185989_why-1%402x.png' alt='Empower Producers' className='feature-image' /> */}
            {/* <div className='feature-description'> */}
              <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Checkmark' />
              <p>Empower producers to directly upload and showcase their products, fostering a direct link between producers and consumers.</p>
            {/* </div> */}
          </div>
          <div className='afeature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Checkmark' />
            <p>Buyers can connect with producers, eliminating intermediaries, ensuring transparency, and promoting fair pricing for both parties.</p>
          </div>
          <div className='afeature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Checkmark' />
            <p>Highlight transparent pricing structures, ensuring that producers receive fair compensation while offering competitive prices to consumers.</p>
          </div>
          <div className='afeature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Checkmark' />
            <p>Enhance user experience by providing a map interface, enabling consumers to locate producers nearby and explore regional agricultural specialties.</p>
          </div>
        </section>

        {/* <section className='explore-section'>
          <h2>Explore a Diverse Range of Rare Agricultural Products</h2>
          <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2e188105c63993f93_cta-3%402x.png' alt='Explore Products' className='explore-image' />
          <p>In the garden of innovation, our platform blossoms as a sanctuary for rare agricultural treasures. Connecting producers to consumers, fostering transparency and fairness, our digital marketplace is the fertile ground where authenticity meets efficiency.</p>
          <blockquote>"Discover, Connect, Thrive—where the roots of agriculture intertwine with the branches of progress."</blockquote>
        </section> */}
      </div>
      <ToastContainer />
    </>
  );
}

export default About;



// import React from 'react'
// import Header from './Header'
// import { useNavigate} from 'react-router-dom'
// import { useEffect } from 'react'
// import { ToastContainer,toast } from 'react-toastify'
// import Home from './Home'
// function About() {
//   const navigate=useNavigate()
  

//   useEffect(() => {
//     checkauth()
//     // window.addEventListener('unload',handleunload)
//     // return ()=>{
//     // window.removeEventListener('unload',handleunload)
//     // }
//     // function handleunload(){
//     //   localStorage.removeItem('userdata');
//     // }
    
//   }, [])

//   function checkauth(){
//     if(localStorage.getItem('userdata')==null)
//     {
//       toast.error("Unauthorized !, Please Login to Continue",{
//         position:'top-right',
//         onClose:()=>{
//           navigate('/login');
//         },
//         autoClose:1000
//       })
//       navigate('/login')
     
//     }
//  }
//   return (
//     <>

//     <div className='H-container'>
//        <span className='start'> <strong><span className='greet'>Welcome to RareRoots,</span> </strong><br/>your exclusive gateway to a world 
//        of exceptional products, meticulously curated <br/>for those who seek the extraordinary. </span><br/>

//        <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add21737efd7005aae65_hero-top%402x.png' className='firstimage'></img><br/>

//       <span className='second'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At RareRoots, we pride ourselves on offering a unique platform that cuts out the middleman, 
//       ensuring a direct and authentic connection 
//       between producers of rare herbs and nuts and the discerning customers who appreciate them.</span><br/>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     <div className='innercontainer'>
//          <div className='image'>
//         <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2d36c718fe4185989_why-1%402x.png'className='secondimage'></img>
//         </div>
  
//         <div className='point'>
//          <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' ></img>
//                       <span className='pt1'>&nbsp;&nbsp;Empower producers to directly upload and showcase their products, fostering
//                            a direct link between producers and consumers.</span><br></br><br></br><br></br>
//          <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg'></img>
//                      <span className='pt1'>&nbsp;&nbsp;Buyers can connect with producers, eliminating intermediaries,
//                       ensuring transparency, and promoting fair pricing for both parties.</span><br></br><br></br><br></br>
//          <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg'></img>
//                       <span className='pt1'>&nbsp;&nbsp;Highlight transparent pricing structures, ensuring that 
//                       producers receive fair compensation while offering competitive prices to consumers.</span><br></br><br></br><br></br>
//           <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg'></img>
//                       <span className='pt1'>&nbsp;&nbsp;Enhance user experience by providing a map interface, 
//                       enabling consumers to locate producers nearby and explore regional agricultural specialties.</span><br></br><br></br><br></br>
//         </div>
//     </div>
//     <br></br>
//     <br></br>
//     <br></br>
//     <span className='high'>Explore a diverse range of rare agricultural products, including herbs and nuts, through a visually appealing display.</span>
//     <br></br>
//     <br></br>
//     <br></br>
//     <div className='final'>
//       <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2e188105c63993f93_cta-3%402x.png' alt='Image Loading'></img>
//       <br></br>
//       <br></br>
//       <br></br>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the garden of innovation, our platform blossoms as a sanctuary for rare agricultural treasures. 
//       Connecting producers to consumers, fostering transparency and fairness, our digital marketplace is
//        the fertile ground where authenticity meets efficiency.
//        <br></br>
//       <br></br>
//       <br></br>
//       <span className='quote'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discover, Connect, Thrive—where 
//       the roots of agriculture intertwine with the branches of progress.</span>
//        <br>
//        </br>
//        <br></br><br></br>

//     </div>
//     </div>
//     <ToastContainer/>

//     </>
//   )
// }

// export default About
