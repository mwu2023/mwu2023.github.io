import React from 'react';
import background from "./home_central.png";
  
const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '88vh'}}>

    </div>
  );
};
  
export default Home;