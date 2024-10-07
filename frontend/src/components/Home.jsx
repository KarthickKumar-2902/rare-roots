// import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  // const navigate = useNavigate();

  // function navfromhome() {
  //   navigate('login');
  // }

  return (
    <div className='home-container'>
      <div className='hero-section'>
        <div className="hero-content">
          <h1>Welcome to RareRoots,</h1>
        <p>
          Your exclusive gateway to a world of exceptional products, meticulously curated for those who seek the extraordinary.
        </p>
        </div>
        
        <img 
          src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add21737efd7005aae65_hero-top%402x.png' 
          alt='Hero' 
          className='hero-image'
        />
      </div> 

      <div className='features-section'>
        <h2>Why Choose RareRoots?</h2>
        <div className='features-grid'>
          <div className='feature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Check' />
            <p>Empower producers to directly upload and showcase their products, fostering a direct link between producers and consumers.</p>
          </div>
          <div className='feature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Check' />
            <p>Buyers can connect with producers, eliminating intermediaries, ensuring transparency, and promoting fair pricing for both parties.</p>
          </div>
          <div className='feature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Check' />
            <p>Highlight transparent pricing structures, ensuring that producers receive fair compensation while offering competitive prices to consumers.</p>
          </div>
          <div className='feature'>
            <img src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/61e00857ce64f1c664032dd7_webflow-check-update.svg' alt='Check' />
            <p>Enhance user experience by providing a map interface, enabling consumers to locate producers nearby and explore regional agricultural specialties.</p>
          </div>
        </div>
      </div>

      {/* <div className='explore-section'>
        <h2>Explore the Range</h2>
        <p>Explore a diverse range of rare agricultural products, including herbs and nuts, through a visually appealing display.</p>
        <button className='explore-button' onClick={navfromhome}>Get Started &gt;</button>
      </div> */}

      <div className='final-section'>
        <img 
          src='https://assets-global.website-files.com/615253f9c7f6b342f156d4e7/6267add2e188105c63993f93_cta-3%402x.png' 
          alt='Agriculture' 
        />
        <p>
          In the garden of innovation, our platform blossoms as a sanctuary for rare agricultural treasures. Connecting producers to consumers, fostering transparency and fairness, our digital marketplace is the fertile ground where authenticity meets efficiency.
        </p>
        <h3>Discover, Connect, Thrive—where the roots of agriculture intertwine with the branches of progress.</h3>
      </div>
    </div>
  );
}

export default Home;
