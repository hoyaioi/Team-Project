import '../CSS/Main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from '../Img/banner1.jpg';
import banner2 from '../Img/banner2.jpg';
import banner3 from '../Img/banner3.jpg';
import banner4 from '../Img/banner4.png';
import s1 from '../Img/s1.jpg';
import s2 from '../Img/s2.jpg';
import s3 from '../Img/s3.jpg';
import s4 from '../Img/s4.jpg';
import s6 from '../Img/s6.jpg';
import mainImg2 from '../Img/mainImg.png';
import mainImg3 from '../Img/mainImg3.png';
import mainImg4 from '../Img/mainImg4.png';
import mainImg1 from '../Img/research.png';
import {Link} from "react-router-dom";

function Main() {

    SwiperCore.use([Navigation, Autoplay]);

    return (
        <>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    loopedSlides={1}
                    navigation
                    className="main_swiper"
                >
                    <SwiperSlide><img src={banner2} /></SwiperSlide>
                    <SwiperSlide><img src={banner1} /></SwiperSlide>
                    <SwiperSlide><img src={banner3} /></SwiperSlide>
                    <SwiperSlide><img src={banner4} /></SwiperSlide>
                </Swiper>
            </div>
            <div id='main'>
                <div className='main_wrap'>
                    <div className='main_content_info'>
                        <div className='main_banner_wrap'>
                            <div className='main_banner_content'>
                                <img className='main_banner_img2' src={mainImg2} />
                                <img className='main_banner_img' src={mainImg1} />
                                <div className='main_info_banner'>
                                    <img className='main_banner_img3' src={mainImg3} />
                                    <img className='main_banner_img4' src={mainImg4} />
                                    <div className='main_banner_video'>
                                        <iframe width="660" height="335" src="https://www.youtube.com/embed/qSLnb6q9nMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className='main_items_wrap'>

                                <div className='main_items_title'>판매량 BEST🏆</div>
                                <div className='main_items_sales'>

                                    <div className='main_items'><div className='main_items_img_wrap'><Link to="/item"><img src={s1} /></Link></div><div className='main_items_name'>내 눈을 책임지는 건강아이템</div><div className='main_items_price'>18,900원</div></div>
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
                </div>
            </div>
        </>
    );
}

export default Main;