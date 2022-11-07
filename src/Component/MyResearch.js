import '../CSS/MyPageResearch.css';
import { Link } from 'react-router-dom';
import researchbanner from '../Img/research_banner.jpg';

function MyPageResearch({handleIsNow}) {

    const handlerOnClick = (e) => {
        handleIsNow(e);
    }


    return (
        <>
            <div className="mypageresearch_main">
            <div className='mypageresearch_title_wrap'>
                    <h2>나의설문</h2>
                        
                    </div>
                <div className='mypageresearch_subtitle'>
                        <img src={researchbanner} />
                    <div className="mypageresearch_list">
                        <table>
                            <thead>
                                <tr>
                                    <th>선택</th>
                                    <th>분류항목</th>
                                    <th>제목</th>
                                    <th>저장날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type='checkbox'></input></td>
                                    <td>간,폐,눈</td>
                                    <td id='MyPageResearchDetail' onClick={handlerOnClick}>설문저장제목</td>
                                    <td>2022-11-02</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox'></input></td>
                                    <td>눈,장</td>
                                    <td>설문저장제목</td>
                                    <td>2022-11-02</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mypageresearch_btn'>
                        <button className='mypageresearch_btn_del'>삭제</button>
                        <button className='mypageresearch_btn_cle'>선택초기화</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyPageResearch;