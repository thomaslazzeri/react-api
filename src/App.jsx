import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [actresses, setActresess] = useState([]);

  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/'



  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res);
        setActresess(res.data)
      });
  }, []);

  return (
    <>
      <main>
        {
          actresses.map(item => (

            <div key={item.id}>
              <div>
                {item.name}

              </div>
              <img src={item.image} alt="" />
            </div>
          ))
        }
      </main>
    </>
  )
}

export default App
