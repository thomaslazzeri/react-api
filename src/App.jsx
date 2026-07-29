import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/'
  const API_URL2 = 'https://lanciweb.github.io/demo/api/actors/'

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res);
        setActresses(res.data)
      });
    axios.get(API_URL2)
      .then(res2 => {
        console.log(res2);
        setActors(res2.data)
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
        {
          actors.map(item => (
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
