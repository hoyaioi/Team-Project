import '../CSS/Main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from '../Img/banner1.png';
import banner2 from '../Img/banner2.jpg';
import banner3 from '../Img/banner3.jpg';
import banner4 from '../Img/banner4.png';
import s1 from '../Img/s1.jpg';
import s2 from '../Img/s2.jpg';
import s3 from '../Img/s3.jpg';
import s4 from '../Img/s4.jpg';
import s6 from '../Img/s6.jpg';

function Main() {

    return (
        <>
            <div id='main'>
                <div className="main_menu_wrap">
                    <div className="main_menu_area">
                        <ul>
                            <li>
                                <button>전체상품</button>
                            </li>
                            <li>
                                <button>BEST</button>
                            </li>
                            <li>
                                <button>기능별</button>
                            </li>
                            <li>
                                <button>대상별</button>
                            </li>
                            <li>
                                <button>성분별</button>
                            </li>
                            <li>
                                <button className="main_research_btn">설문하기</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='main_wrap'>
                    <div className='main_ad_wrap'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={40}
                            navigation={true}
                            className="main_swiper"
                        >
                            <SwiperSlide><img src={banner1} className='main_swiper_banner' /></SwiperSlide>
                            <SwiperSlide><img src={banner2} className='main_swiper_banner' /></SwiperSlide>
                            <SwiperSlide><img src={banner3} className='main_swiper_banner' /></SwiperSlide>
                            <SwiperSlide><img src={banner4} className='main_swiper_banner' /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='main_items_wrap'>
                        <div className='main_items_title'>판매량 BEST🏆</div>
                        <div className='main_items_sales'>

                            <div className='main_items'><div className='main_items_img_wrap'><img src={s1} /></div><div className='main_items_name'>내 눈을 책임지는 건강아이템</div><div className='main_items_price'>18,900원</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s2} /></div><div className='main_items_name'>나의 혈행개선을 위한 등푸른생선 오메가3</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s3} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s4} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s6} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>

                        </div>
                        <div className='main_items_title'>추천 상품😘</div>
                        <div className='main_items_recommend'>

                            <div className='main_items'><div className='main_items_img_wrap'><img src={s1} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s2} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s3} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s4} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>
                            <div className='main_items'><div className='main_items_img_wrap'><img src={s6} /></div><div className='main_items_name'>제품명</div><div className='main_items_price'>가격</div></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;