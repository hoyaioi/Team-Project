import logo from './img/logo.png';
import home from './img/home.png';

import intro from './img/intro.png';
import "./css/Intro.css";
import { Link, Route, Switch } from 'react-router-dom';
import Step1 from './Step1';

const Intro = () => {
  

  return (
    <>
      <div className="full" >
        <img className="logo" src={logo} alt="logo" />
        <img className="intro" src={intro} alt="intro" />
        <a href="home"><img className="home" src={home} alt="home" /></a>
        <Link to="/surveyStart"><button className="start">시작하기</button></Link>
      </div>
    </>
  );

};


export default Intro;

