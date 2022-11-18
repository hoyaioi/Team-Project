import axios from 'axios';
import { useEffect, useState } from 'react';
import '../CSS/AdminQnaModal.css'

function AdminQnaModal(props) {

    const qnaIdx = props.value;
    const [ datas, setData ] = useState({});
    const [ answer, setAnswer ] = useState({});
    const [ success, setSuccess ] = useState(true);
    
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/qna/contents/${qnaIdx}`)
        .then(response => { 
            setData(response.data);
            
        })
        .catch(error => { console.log(error); });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/qnaAnswer/${qnaIdx}`)
        .then(response => { 
            
            setAnswer(response.data);
            setSuccess(false);
        })
        .catch(error => { console.log(error); });
    }, []);
    //  <sapn>{success ? "답변준비중" : answer.qnaCommentContent}</sapn>

    useEffect(() => {
        axios.post(`http://localhost:8080/api/admin/qnaWrite/${qnaIdx}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => { console.log(error); });
    }, []);
    

    return (
        <table className='adminqna-modal-table'>
            <tbody>
                <tr className="adminqna-modal">
                    <td>
                        <div className='adminqna-modal-cont'>
                            <strong>Q</strong>
                            <div className='adminqna-content'>
                                <sapn>{datas.qnaContents}</sapn>
                            </div>
                        </div>
                        <div className='adminqna-comment'>
                            <strong>A</strong>
                            <div className='adminadmin-comment'>
                                <sapn><textarea cols={90} rows={10} value={answer.qnaCommentContent}>
                                    
                                    </textarea></sapn>
                            </div>
                            <div className='admincomment-date'>
                                <sapn>답변일자 : {answer.qnaCommentWriteDate}</sapn>
                            </div>
                            <div className='admincomment-edit'>
                                <button className='admincomment-edit-btn'>수정</button>
                                <button className='admincomment-delete-btn'>삭제</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default AdminQnaModal;