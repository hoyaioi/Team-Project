import logo from './img/logo.png';


import intro from './img/intro.png';
import "./css/Intro.css";
import { Link, Route, Switch } from 'react-router-dom';

const Intro = () => {



  return (
    <>
      <div className="full" >
        
        <img className="intro" src={intro} alt="intro" />

        <a href='/surveyStart' target="_blank"><button className="start">시작하기</button></a>
      </div>
    </>
  );

};


export default Intro;

