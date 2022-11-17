import axios from 'axios';
import { useEffect, useState } from 'react';
import '../CSS/Qna.css';

function Qna({value,setQnaAnswer}) {
    console.log(value);
    
    const qnaIdx = value;
    const [ datas, setData ] = useState({});
    const [ answer, setAnswer ] = useState({});
    const [ success, setSuccess ] = useState(true);

    
   
    useEffect(() => {
        axios.get(`http://localhost:8080/qna/${qnaIdx}`)
        .then(response => { 
            
            setData(response.data);
        })
        .catch(error => { console.log(error); });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/qnaAnswer/${qnaIdx}`)
        .then(response => { 
            setAnswer(response.data);
            setSuccess(false);
        })
        .catch(error => { console.log(error); });
    }, []);

    setQnaAnswer(answer);
    
console.log(datas)
    return (
        <table className='qna-modal-table'>
            <tbody>
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
                                <sapn>{success ? "답변준비중" : answer.qnaCommentContent}</sapn>
                            </div>
                            <div className='comment-date'>
                                <sapn>답변일자 : {answer.qnaCommentWriteDate}</sapn>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Qna;