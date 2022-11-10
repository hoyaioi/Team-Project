import '../CSS/MyPageResearch.css';
import researchbanner from '../Img/research_banner.jpg';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function MyPageResearch({ handleIsNow }) {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/result')
            .then(response => {
                setDatas(response.data);
            })
            .catch(error => console.log(error));
    }, []);


    const handlerOnClick = (e) => {
        handleIsNow(e);
    }

    const handlerClickDelete = () => {
        axios.delete('http://localhost:8080/api/result/${resultIdx}')
        // https://axios-http.com/kr/docs/res_schema
        .then(response => { 
            console.log(response);
            if (response.status === 200) {
                alert("정상적으로 삭제되었습니다.");
                window.location.reload();
            } else {
                alert("삭제에 실패했습니다.");
                return;
            }
        })
        .catch(error => console.log(error));
    };

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
                                    <th width="15%">선택</th>
                                    <th width="65%">설문자</th>
                                    <th width='20%'>저장날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas && datas.map(result => (
                                        <tr key={result.resultIdx}>
                                            <td><input type='checkbox'></input></td>
                                            <td id='MyPageResearchDetail' onClick={handlerOnClick}>{result.resultUser}</td>
                                            <td>{result.resultDate}</td>
                                        </tr>
                                    ))
                                }
                                {
                                    datas.length === 0 && (
                                        <tr>
                                            <td colSpan="4">일치하는 데이터가 없습니다.</td>
                                        </tr>
                                    )
                                }
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