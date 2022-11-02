import "./css/Survey1.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import { createRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Questions from './api/questionsApi.json';


const Step3 = ({ nextSteps, prevSteps }) => {
  let info = JSON.parse(sessionStorage.getItem("info"));
  let checked = JSON.parse(sessionStorage.getItem("checked"));

  const checksession = () => {

    console.log(info);
    console.log(checked);
  }

  const [checkedlength, setCheckedlength] = useState(JSON.parse(sessionStorage.getItem("checkedlength")));
  const [currentSlide, setCurrentSlide] = useState(1);
  const TOTAL_SLIDES = checkedlength * 5;
  const [questions, setQue] = useState([]);
  const [Ans, setAns] = useState([]);


  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);

    if (currentSlide === TOTAL_SLIDES) {
      nextSteps();
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);

    if (currentSlide <= 1) {
      prevSteps();
    }
  }

  useEffect(() => {
    let questions = [];
    let checked = JSON.parse(sessionStorage.getItem("checked"));

    for (let i = 0; i < checkedlength; i++) {
      for (let j = 0; j < Questions.length; j++) {
        if (checked[i] === Questions[j].research_organ) {
          questions.push(Questions[j].research_quest);
        }
      }
    }
    
    console.log(checked)
    console.log(questions)
    setQue(questions);
    console.log(questions.length)
  }, [])

  const QueChecker = () => {
    let map = {};
    let result = [];
    for (let i = 0; i < questions.length; i++) {
      if (questions[i] in map) {
        map[questions[i]] += 1;
      } else {
        map[questions[i]] = 1;
      }
    }
    for (let count in map) {
      if (map[count] >= 2) {
        result.push(count);
      }
    }
  }

  useEffect(() => {
    currentSlide > TOTAL_SLIDES && QueChecker();
  }, [currentSlide]);

  //체크된 value 값을 research_organ에 맞게 배열에 저장
  // useEffect(() => {
  //   let checked = JSON.parse(sessionStorage.getItem("checked"));
  //   let answer = [];
  //   for (let i = 0; i < checked.length; i++) {
  //     for (let j = 0; j < Questions.length;) {
  //       if (checked[i] === Questions[j].research_organ) {
  //         answer.push(Questions[j].research_organ);
  //       }
  //     }
  //   }
  //   setAns(answer);
    
  // }, [])
  

  //체크 된 값을 nextSlide로 넘겨줌
  
  return (
    <>
      <div className="back1">
        <div className="inside">
          <h2> {currentSlide} / {TOTAL_SLIDES}</h2>
          <h4>{questions[currentSlide - 1]}</h4>
          <div className="wrap">
            <form action="">
              <ul className='likert'>
                <li>
                  <input type="radio" name="likert" value="1" />
                  <label>전혀 아니다</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="2" />
                  <label>아니다</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="3" />
                  <label>보통이다</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="4" />
                  <label>그렇다</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="5" />
                  <label>매우 그렇다</label>
                </li>
              </ul>
            </form>
          </div>
          <div className='prev' onClick={prevSlide}><BsArrowLeftCircle size={75} color='white' /></div>
          <div className='next' onClick={nextSlide}><BsArrowRightCircle size={75} color='white' /></div>
        </div>
      </div>

    </>
  );

};


export default Step3;
