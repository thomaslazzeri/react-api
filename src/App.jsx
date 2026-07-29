import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  /*   const [actresses, setActresses] = useState([]);
    const [actors, setActors] = useState([]); */
  const [people, setPeople] = useState([]);

  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/'
  const API_URL2 = 'https://lanciweb.github.io/demo/api/actors/'

  useEffect(() => {
    Promise.all([
      axios.get(API_URL),
      axios.get(API_URL2)
    ])
      .then(([resActresses, resActors]) => {
        /* setActresses(resActresses.data);
        setActors(resActors.data); */
        /* setPeople([...resActors.data, ...resActresses.data]) */
        const combined = [...resActors.data, ...resActresses.data];
        const sortedPeople = combined.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setPeople(sortedPeople);
      })
      .catch(error => {
        console.log("Si è verificato un errore nel caricamento dei dati:", error);
      });
  }, []);

  return (
    <>
      <main>
        {/* {
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
        } */}
        {
          people.map(item => (
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
