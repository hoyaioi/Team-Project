import "./css/Survey1.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Result from './api/resultApi.json'



const Step4 = () => {

    const [showResultList, setShowResultList] = useState([]);
    const [showResult, setShowResult] = useState({}); //보여줄 이미지
    const name = useState(JSON.parse(sessionStorage.getItem("info")).name);
    const groupByOrgan = JSON.parse(sessionStorage.getItem("groupByOrgan"));


    for (let key in groupByOrgan) {    // 점수 반올림
        groupByOrgan[key] = Math.round(groupByOrgan[key]);
    }
    console.log(groupByOrgan);


    const groupByOrganArray = Object.keys(groupByOrgan).map((key) => [key, groupByOrgan[key]]); //배열로 변환
    console.log(groupByOrganArray);


    const resultOfSurvey = groupByOrganArray.map(([key, value]) => {  //배열로 변환된 객체를 resultApi.json의 형식에 맞게 변환
        return {
            research_organ: key,
            value: value
        }
    })
    console.log(resultOfSurvey);

    let result = []    //resultApi.json의 형식에 맞게 변환된 객체를 result에 저장
    for (let i = 0; i < resultOfSurvey.length; i++) {
        for (let j = 0; j < Result.length; j++) {
            if (resultOfSurvey[i].research_organ === Result[j].research_organ) {
                if (resultOfSurvey[i].value === Result[j].score) {
                    result.push(Result[j]);
                }
            }
        }
    }

    const getMatchingResult = (result) => {
        let checked = JSON.parse(sessionStorage.getItem("checked"));
        let isMatch = false;
        for (let i = 0; i < checked.length; i++) {
            if (result.research_organ === checked[i]) {
                isMatch = true;
                break;
            }
        }
        return isMatch;
    }

    useEffect(() => {
        const RESULT_NOT_FILTERED = result;
        const showResultList = RESULT_NOT_FILTERED.filter(getMatchingResult);
        setShowResultList(showResultList);
        setShowResult(showResultList[0]);
    }, []);

    console.log(sessionStorage.getItem("info"));

    return (
        <>
            <div className="back1">
                <div className="inside">
                    <h4>{name}님을 위한 추천 영양제</h4>
                    <div className="wrap">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={false}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="resultSwiper"
                        >
                            {showResultList.map((result, i) => (
                                <SwiperSlide key={i}>
                                    <div className="titleSurvey">
                                        <strong> {result.research_organ}</strong>
                                    </div>
                                    <div className="resultImg">
                                        <img src={`${result.src}`} />
                                    </div>
                                    <div className="priceSurvey">
                                        가격 : <strong>{result.price}</strong><br />
                                        <a href={result.url} target="_blank">상품 보러가기</a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='prev' >처음 화면으로</div>
                    <div className='next' >저장</div>

                </div>
            </div>
        </>
    );

};


export default Step4;
