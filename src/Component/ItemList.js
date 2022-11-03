import '../CSS/ItemList.css';
import t1 from '../Img/s2.jpg';
import t2 from '../Img/1.jpg';
import t3 from '../Img/s1.jpg';
import t4 from '../Img/s3.jpg';
import t5 from '../Img/s4.jpg';


function ItemList() {
    return (
        <>
            <div className='itemlist_container'>
                <div className='itemlist_contents'>
                    <div className='itemlist_main'>
                        <div className='itelist_title'>
                            <h2>전체보기</h2>
                        </div>
                        <div className='itemlist_box'>
                            <span className='itemlist_num'><strong>5개의 상품</strong></span>
                        <div className='itemlist_view_num'>
                            <select name='sort' className='itemlist_chosen'>
                                <option value='selected' selected='selected'>추천상품순</option>
                                <option value='sellcnt'>판매인기순</option>
                                <option value='price_asc'>낮은가격순</option>
                                <option value='price_dsc'>높은가격순</option>
                            </select>
                        </div>
                        <div className='itemlist_view_num'>
                            <select name='page_num' className='itemlist_chosen'>
                                <option value='10'>10개씩보기</option>
                                <option value='20' selected='selected'>20개씩보기</option>
                                <option value='30'>30개씩보기</option>
                                <option value='40'>40개씩보기</option>
                            </select>
                        </div>
                        </div>
                        <div className='itemlist_items'>
                            <div className='itemlist_items_cont'>
                                <ul>
                                    <li>
                                        <div className='itemlist_items_box'>
                                            <div className='itemlist_items_img'>
                                                <img src={t1} />
                                            </div>
                                        </div>
                                        <div className='itemlist_info'>
                                            <div className='itemlist_info_title'>
                                                <strong>상품명</strong>
                                            </div>
                                            <div className='itemlist_info_money'>
                                                <strong>68000원</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='itemlist_items_box'>
                                            <div className='itemlist_items_img'>
                                                <img src={t2} />
                                            </div>
                                        </div>
                                        <div className='itemlist_info'>
                                            <div className='itemlist_info_title'>
                                                <strong>상품명</strong>
                                            </div>
                                            <div className='itemlist_info_money'>
                                                <strong>68000원</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='itemlist_items_box'>
                                            <div className='itemlist_items_img'>
                                                <img src={t3} />
                                            </div>
                                        </div>
                                        <div className='itemlist_info'>
                                            <div className='itemlist_info_title'>
                                                <strong>상품명</strong>
                                            </div>
                                            <div className='itemlist_info_money'>
                                                <strong>68000원</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='itemlist_items_box'>
                                            <div className='itemlist_items_img'>
                                                <img src={t4} />
                                            </div>
                                        </div>
                                        <div className='itemlist_info'>
                                            <div className='itemlist_info_title'>
                                                <strong>상품명</strong>
                                            </div>
                                            <div className='itemlist_info_money'>
                                                <strong>68000원</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='itemlist_items_box'>
                                            <div className='itemlist_items_img'>
                                                <img src={t5} />
                                            </div>
                                        </div>
                                        <div className='itemlist_info'>
                                            <div className='itemlist_info_title'>
                                                <strong>상품명</strong>
                                            </div>
                                            <div className='itemlist_info_money'>
                                                <strong>68000원</strong>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemList;