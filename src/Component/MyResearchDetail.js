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

function MyPageResearchDetail({ resultIdx, handleIsNow, match, history, location }) {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [organList, setOrganList] = useState([]);
    const [showResultList, setShowResultList] = useState([]);
    const [groupByOrgan, setGroupByOrgan] = useState([]);

    useEffect(() => {
        resultIdx = 3;
        axios.get(`http://localhost:8080/api/result/${resultIdx}`)
            .then(response => {
                console.log(response);
                setData(response.data);
                setName(response.data.resultUser);
                setOrganList([{ '혈관': (data.resultBlood) }, { '장': (data.resultDiges) },
                { '눈': (data.resultEyes) }, { '간': (data.resultLiver) }, { '몸': (data.resultVitamin) }]);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        let list = [];
        organList.map(organ => {
            let key = Object.keys(organ)[0];
            let value = organ[key];
            list.push({ 'research_organ': key, 'value': value });
        });
        setGroupByOrgan(list);
    }, [organList]);


    let result = [];
    for (let i = 0; i < groupByOrgan.length; i++) {
        for (let j = 0; j < Result.length; j++) {
            if (groupByOrgan[i].research_organ === Result[j].research_organ) {
                if (groupByOrgan[i].value === Result[j].score) {
                    result.push(Result[j]);
                }
            }
        }
    }
    useEffect(() => {
        const showResultList = result;
        setShowResultList(showResultList);
    }, []);

    const handlerOnClick = (e) => {
        handleIsNow(e);
    };



    return (
        <>
            <div className="mypageresearch_main">
                <div className="mypageresearch_main">
                    <div className='mypageresearch_title_wrap'>
                        <h2>나의설문</h2>
                    </div>
                    <div className='researchData'>
                        <div className="back1">
                            <div className="inside">
                                <h4>{name}님을 위한 추천 영양제</h4>
                                <div className="researchDate">
                                    설문 완료일 :<div className='SurveyDate' >{data.resultDate}</div>
                                </div>
                                <div className="wrapResearch">
                                    <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={false}
                                        keyboard={true}
                                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                        className="resultSSSwiper"
                                    >
                                        {showResultList.map((result, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="titleSurveyyyy">
                                                    {result.research_organ}
                                                </div>
                                                <div className="resultImg">
                                                    <img src={`${result.src}`} />
                                                </div>
                                                <div className="priceSurveySSS">
                                                    가격 : <strong>{result.price}</strong><br />
                                                    <a href={result.url} target="_blank">상품 보러가기</a>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className='reseachBack' id="MyResearch" onClick={handlerOnClick}>목록으로</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default MyPageResearchDetail;