import React from 'react';
import Restaurant from './Restaurant';

const App = () => {
  return (
    <>

      <img className="headingimg" src="https://iconarchive.com/download/i87143/graphicloads/colorful-long-shadow/Restaurant.ico" />
      <h1 className="heading">Yashan's Kitchen ...</h1>

      <Restaurant />
      <h4 className="footer">© Yashan's Kitchen 2021.All Rights Reserved.</h4>
    </>
  )
}

export default App;
