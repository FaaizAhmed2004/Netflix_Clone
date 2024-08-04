import React, { useEffect, useRef, useState } from 'react'
import "./Telecard.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const Telecard = ({title , category}) => {
  const [apiData,setApiData] = useState([]);
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODQ2N2Y3ZDllMzFiNTEyNTE2YWFlYjAxMzA3NmEyNyIsIm5iZiI6MTcyMjQxNzUzMS41MjE2MjQsInN1YiI6IjY2YTlmZmVhYmZjOWIyYTE4MmVlZmNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sy1B8bn_oHCzyhdtor9wz0PJ0_JFqggAOLqrhF1Bmr0'
  }
};




const handleWheel = (event)=>{
event.preventDefault();
cardsRef.current.scrollLeft += deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));




  cardsRef.current.addEventListener('wheel',handleWheel)
},[])
  return (
    <div className="tele-card">
      <h2> {title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
     {apiData.map((card,index)=>{
      return <Link  to ={`/Player/${card.id}`}className="card" key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
      </Link>
     })}
      </div>
    </div>
  )
}

export default Telecard