import React from 'react';
//import backgroundImage from '../../assets/images/7197355.png';
import image5 from '../../assets/images/7197355.jpg';

const Home = () => {

    

    return (
        <div className="container mt-5" style={{  backgroundImage: `url(${image5})`, backgroundSize: 'cover', backgroundPosition:'center', height: '80vh',  textAlign: 'center', display: 'flex',justifyContent: 'center' }}>
            <h1>Welcome!</h1>
            {/* <p>This is the home page. You can proceed with making reservations here.</p> */}
        </div>
    );

}

export default Home;
