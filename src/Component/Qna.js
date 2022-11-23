import axios from 'axios';
import { useEffect, useState } from 'react';
import '../CSS/Qna.css';

function Qna({ value }) {


    const qnaIdx = value;
    const [datas, setData] = useState({});
    
    useEffect(() => {

        axios.get(`http://localhost:8080/qna/contents/${qnaIdx}`)
            .then(response => {
                setData(response.data);
                console.log(datas)
            })
            .catch(error => { console.log(error); });
    }, []);

    const isAnswer = datas.qnaCommentContent === null ? false : true;

  
    
    return (
        <table className='qna-modal-table'>
            <tbody>
                <tr colspan="3" className="qna-modal">
                    <td>
                        <div className='qna-modal-cont'>
                            <strong>Q</strong>
                            <div className='qna-content'>
                                <sapn>질문 내용</sapn>
                            </div>
                        </div>
                        <div className='qna-comment'>
                            <strong>A</strong>
                            <div className='admin-comment'>
                                <sapn>{isAnswer ? ( datas.qnaCommentContent) : '답변 준비중'  } </sapn>
                            </div>
                            <div className='comment-date'>
                                <sapn>{isAnswer ? ( datas.qnaCommentWriteDate) : ''  }</sapn>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Qna;