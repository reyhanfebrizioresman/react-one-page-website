import React, {useState,useEffect } from 'react'
import { Navbar,Hero,Features,Services,Subscribe } from './Components';
import './global.scss';
import { HashLoader	} from 'react-spinners'
import { css } from '@emotion/react'

function App() {
  const [loading, setLoading] = useState(true);
  const override = css`

`;
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="app">
     
          <Navbar />
          <Hero />
          <Features />
          <Services />
          <Subscribe />
  
    </div>
  );
}

export default App;
