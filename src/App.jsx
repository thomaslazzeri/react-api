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
            <div className='cards' key={item.id}>
              <div className='card-image'>
                <img src={item.image} alt="" />
              </div>
              <div className='card-content'>
                <p>Name: {item.name}</p>
                <p>Birth: {item.birth_year}</p>
                <p>Nationality: {item.nationality}</p>
                <p>Biography: {item.biography}</p>
                <p>Known for: {item.known_for}</p>
              </div>
            </div>
          ))
        }
      </main>
    </>
  )
}

export default App
