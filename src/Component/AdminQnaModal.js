import axios from 'axios';
import { useEffect, useState } from 'react';
import '../CSS/AdminQnaModal.css'

function AdminQnaModal(props) {

    const qnaIdx = props.value;
    const [content, setContent] = useState();
    const [datas, setData] = useState({});
    const [answer, setAnswer] = useState({});



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
                console.log(response.data);
                setAnswer(response.data);
            })
            .catch(error => { console.log(error); });
    }, []);

    const qnaAnswer = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/admin/qnaWrite/${qnaIdx}`, {
            "qnaCommentContent": content,
            "qnaIdx": qnaIdx
        }).then(response => {
            console.log(response);
            alert('답변완료');
            props.closeModal();
        })
            .catch(error => { console.log(error); });
    }

    const onChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    }

    //문의글 답변하기    

    return (
        <table className='adminqna-modal-table'>
            <tbody>
                <tr className="adminqna-modal">
                    <td>
                        <div className='adminqna-modal-cont'>
                            <strong>Q</strong>
                            <div className='adminqna-content'>
                                <span>{datas.qnaContents}</span>
                            </div>
                        </div>
                        <div className='adminqna-comment'>
                            <strong>A</strong>
                            <div className='adminadmin-comment'>
                                <span>
                                    <textarea cols={90} rows={10} placeholder="답변을 입력하세요."
                                        onChange={onChange} value={answer.qnaAnswerContent}>


                                    </textarea>
                                </span>

                            </div>
                            <div className='admincomment-date'>
                                <span>답변일자 : {answer.qnaCommentWriteDate}</span>
                            </div>
                            <div className='admincomment-edit'>
                                <button className='admincomment-edit-btn' onClick={qnaAnswer} >등록</button>
                                <button className='admincomment-delete-btn'>삭제</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table >
    );
}

export default AdminQnaModal;