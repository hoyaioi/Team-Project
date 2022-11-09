import '../CSS/MyResearchDetail.css';
import researchbanner from '../Img/research_banner.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Result from '../survey/api/resultApi.json';

function MyPageResearchDetail({ handleIsNow, match, history, location }) {

//TLQKFKQflkasfkada
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [groupByOrgan, setGroupByOrgan] = useState([{}]);
    const [organList, setOrganList] = useState([]);
    const [showResultList, setShowResultList] = useState([]);
    const [showResult, setShowResult] = useState({}); //보여줄 이미지

    useEffect(() => {
        axios.get('http://localhost:8080/api/result/${resultIdx}')
            .then(response => {
                console.log(response);
                setData(response.data);
                setName(response.data.resultUser);
                setOrganList([(response.data.resultBlood), (response.data.resultDiges), (response.data.resultEyes), (response.data.resultLiver), (response.data.Vitamin)]);
                const groupByOrgan = organList.filter((value) => {
                    return value.resultOrgan !== 0;
                });
                setGroupByOrgan(groupByOrgan);
            })
            .catch(error => console.log(error));
    }, []);


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


    const handlerOnClick = (e) => {
        handleIsNow(e);
    }

    useEffect(() => {
        const showResultList = result;
        setShowResultList(showResultList);
        setShowResult(showResultList[0]);
    }, []);

    return (
        <>
            <div className="mypageresearch_main">
                <div className="mypageresearch_main">
                    <div className='mypageresearch_title_wrap'>
                        <h2>나의설문</h2>

                    </div>
/Users/harryjung/Documents/pj1/Team-Project/src/survey/Step4.js

                    <div className='researchData'>
                        <div className="back1">
                            <div className="inside">
                                <h4>{name}님을 위한 추천 영양제</h4>
                                <div className="researchDate">
                                    설문 완료일 : {data.resultDate}
                                </div>
                                <div className="wrapResearch">
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
                                         {result.research_organ}
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
                                <div className='reseachBack' id='MyResearch' onClick={handlerOnClick}>목록으로</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default MyPageResearchDetail;