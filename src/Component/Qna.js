import axios from 'axios';
import { useState,useEffect } from 'react';

import '../CSS/Qna.css';

function Qna(props) {

    const qnaIdx = props.value;
    const [ datas, setData ] = useState({});
    const [ answer, setAnswer ] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/qna/${qnaIdx}`)
        .then(response => { 
            console.log(response); 
            setData(response.data);
        })
        .catch(error => { console.log(error); });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/qnaAnswer/${qnaIdx}`)
        .then(response => { 
            console.log(response); 
            setAnswer(response.data);
        })
        .catch(error => { console.log(error); });
    }, []);

    return (
        // <table className='qna-modal-table'>
        //     <tbody>
                <tr colspan="3" className="qna-modal">
                    <td>
                        <div className='qna-modal-cont'>
                            <strong>Q</strong>
                            <div className='qna-content'>
                                <sapn>{datas.qnaContents}</sapn>
                            </div>
                        </div>
                        <div className='qna-comment'>
                            <strong>A</strong>
                            <div className='admin-comment'>
                                <sapn>{answer.qnaCommentContent === !null ? answer.qnaCommentContent : "답변없음"}</sapn>
                            </div>
                            <div className='comment-date'>
                                <sapn>{answer.qnaCommentWriteDate}</sapn>
                            </div>
                        </div>
                    </td>
                </tr>
        //     </tbody>
        // </table>
    );
}

export default Qna;