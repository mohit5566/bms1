import Card from './components/Card.jsx';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar,Container} from 'react-bootstrap';

function App() {

  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);

  useEffect(()=> {
    async function getData(){
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0bfb7ccabc3823c7e4ea2ba02c5dfdcf&page=`+page);
        setData(res.data.results);
        console.log(data);
        console.log(page);
    }
    getData();
  });
  function pageChange(event){
    setPage(event.target.value);
  }


  return (
    <div className="App">

  <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="data:image/jpeg;base64,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"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        BookMyShow
        </Navbar.Brand>
      </Container>
    </Navbar>

    <div className="cont">
      <label>Page: </label>
        <select onChange={pageChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

    </div>
    <div className="card-prop">  
      {
      data.map((d,index) =>
      <Card
      url={"https://image.tmdb.org/t/p/w200"+d.poster_path}
      title={d.original_title}
      overview={d.overview}
      pop={d.vote_average}
      id={index}
      />
      )
    }
   </div> 
      
    </div>
  );
}

export default App;
