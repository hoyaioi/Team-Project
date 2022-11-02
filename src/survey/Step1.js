
import "./css/Survey1.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import { Component, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Survey from "./Survey";

const Step1 = ({ nextSteps, prevSteps }) => {

  const [info, setInfo] = useState({
    name: "",
    height: "",
    age: "",
    weight: "",
    gender: ""
  });

  //input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value

    });

    console.log(info)
  };
  //seesionStorage에 저장

  const saveInfo = (e) => {
    let sessionStorage = window.sessionStorage;
    sessionStorage.setItem("info", JSON.stringify(info));
    console.log(sessionStorage.getItem("info"));
  }

  const nextStep = (e) => {
    saveInfo();
    nextSteps();
  }

  const research = {
    textalign: 'center',
    fontsize: '60px',
    color: 'white',
    margintop: '70px'
  }




  //인풋에 입력된 값을 저장하는 함수

  return (

    <>

      <div className="back1">
        <div className="inside">
          <h2 style={research
          }>나에게 맞춤 영양제 찾기</h2>

          <div className="research_wrap">
            <div className="research_box1">
              <div className="namePut">이름 : <input
                className="name"
                type="text"
                name="name"
                value={info.name}
                onChange={onChangeInfo}
              /></div>
              <div className="heightPut">키 : <input
                className="height"
                type="number"
                name="height"
                min={140}
                max={200}
                value={info.height}
                onChange={onChangeInfo}
              />Cm</div>
            </div>
            <div className="agePut"> 나이 : 만 <input
              className="age"
              type="number"
              name="age"
              min={1}
              max={100}
              value={info.age}
              onChange={onChangeInfo}
            />세</div>
            <div className="weightPut">몸무게 : <input
              className=" weight"
              type="number"
              name="weight"
              min={30}
              max={200}
              value={info.weight}
              onChange={onChangeInfo}
            />Kg</div>

            <div className="radios">
              <div className="genderPut">성별 :
                <input className="radio" type='radio' id="male" name='gender' defaultValue='male' onChange={onChangeInfo} />남성
                <input className="radio" type='radio' id="femali" name='gender' defaultValue='female' onChange={onChangeInfo} />여성
              </div>

            </div>

            <div className='prev' ><Link to='/Intro'><BsArrowLeftCircle size={75} color='white' /></Link></div>
            <div className='next' onClick={nextStep}><BsArrowRightCircle size={75} color='white' /></div>
          </div>
        </div>

      </div>
    </>
  );

};


export default Step1;

