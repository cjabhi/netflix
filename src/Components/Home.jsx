import React from 'react';
import axios from 'axios';
import {useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import Banner from "../Components/Banner";

const common = "https://api.themoviedb.org/3/movie/";
const key = "9309205340ff098d1086d64f487d6328";

const Card = ({image}) =>{
  return (
    <img src={`https://image.tmdb.org/t/p/original${image}`} alt="cover" />
  );
}

const Row = ({title , arr
//    arr= [{
//   poster_path: "data:image/jpeg;base64,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",
// }] 

}) =>{
  return(
    <div className='aboverow'>
      <h2>{title}</h2>
      <div className='row' >
      {
        arr.map((item , index)=>(
          <Card key={index} image = {item.poster_path} />
        ))
      }
      </div>
    </div>
    
  );
} 

function Home() {
  const [list , setList] = useState([])
  const [nextlist , setNextlist] = useState([]);
  const [ratedlist , setRatedlist] = useState([]);
  const [upcominglist , setUpcominglist] = useState([]);
  const [category, setCategory] = useState([]);
useEffect(()=>{
  const fetchapis = async () => {
    const {data : {results } } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9309205340ff098d1086d64f487d6328")
    setList(results)
    // console.log(list)
  };
  const fetchnextlist = async () => {
    const {data : {results } } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9309205340ff098d1086d64f487d6328")
    setNextlist(results)
  };
  const fetchratedlist = async () => {
    const {data : {results } } = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=9309205340ff098d1086d64f487d6328")
    setRatedlist(results)
  };
  const fetchupcominglist = async () => {
    const {data : {results } } = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=9309205340ff098d1086d64f487d6328")
    setUpcominglist(results)
  };
  const fetchgenres = async () => {
    const {data : {genres } } = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=9309205340ff098d1086d64f487d6328")
    setCategory(genres)
    // console.log(genres);
  };
  fetchapis();
  fetchnextlist();
  fetchratedlist();
  fetchupcominglist();
  fetchgenres();
},[])
  return (
      <section className="home">
        <div className="banners">
        <Banner i={1}/>
        {/* <Banner i={1}/> */}
        </div>
        
        <Row title = {"Popular on netflix"} arr = {list}/>
        <Row title = {"Latest movies"} arr = {nextlist}/>
        <Row title = {"Top Rated"} arr = {ratedlist}/>
        <Row title = {"Upcomings"} arr = {upcominglist}/>
        <div className='genrebox'>

          {
            category.map((item , index)=>(
              <Link key = {index} to = {`/genre/${item.id}`}>{item.name}</Link>
            ))
          }

        </div>
      </section>
  )
}

export default Home