import React from 'react'
import {useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import axios from 'axios';

const Banner = (i) => {
  i = Math.floor((Math.random()*100))
  i = i%20;
    const [nextlist , setNextlist] = useState([]);
  useEffect(()=>{
    const fetchnextlist = async () => {
      const {data : {results } } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9309205340ff098d1086d64f487d6328")
      setNextlist(results)
      console.log(nextlist);
    };
    fetchnextlist();
    console.log(i);
  },[])
  return (
    <div className="banner" 
    style={{
      backgroundImage : nextlist[i] ? `url(${`https://image.tmdb.org/t/p/original${nextlist[i].poster_path}`})`: "none"
    }} 
    >
      {
        nextlist[i] && (<h1 style={{color:'white'}}>{nextlist[i].original_title}</h1>)
      }
      
      {
        nextlist[i] && (<p style={{color:'white'}}>{nextlist[i].overview}</p>)
      }  
      <div>
      <button>Play <BiPlay /></button>
      <button>My List <AiOutlinePlus /> </button>
      </div>
      
    </div>
  )
}

export default Banner