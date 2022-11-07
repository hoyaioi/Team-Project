import '../CSS/MyResearchDetail.css';
import researchbanner from '../Img/research_banner.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import MyPage from './MyPage';






function MyPageResearchDetail() {

    
    return (
        <>
            <div className="mypageresearch_main">
                <div className="mypageresearch_main">
                <div className='mypageresearch_title_wrap'>
                    <h2>나의설문</h2>
                        
                    </div>
                    <div className='mypageresearch_subtitle'>
                        <img src={researchbanner} />
                    </div>

                    <div className='researchData'>
                        <div className="back1">
                            <div className="inside">
                                <h4>님을 위한 추천 영양제</h4>
                                <div className="researchDate">
                                    작성일
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
                                        <SwiperSlide >
                                            <div className="titleSurvey">
                                                <strong>항목</strong>
                                            </div>
                                            <div className="imageSurvey">
                                                <img src />
                                            </div>
                                            <div className="priceSurvey">
                                                가격 : <strong>가격</strong><br />
                                                <a href target="_blank">상품 보러가기</a>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default MyPageResearchDetail;