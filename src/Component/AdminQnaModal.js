import axios from 'axios';
import { useEffect, useState } from 'react';
import '../CSS/AdminQnaModal.css'

function AdminQnaModal(props) {

    const qnaIdx = props.value;
    const [content, setContent] = useState();
    const [datas, setData] = useState({});


    const qnaDto = {
        qnaCommentContent : content,
        qnaIdx : qnaIdx
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/qna/contents/${qnaIdx}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => { console.log(error); });
    }, []);

    const qnaAnswer = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/admin/qnaWrite", qnaDto)
        .then(response => {
            console.log(response);
            alert('답변완료');
            window.location.reload();
            props.closeModal();
        })
            .catch(error => { console.log(error); });
    }

    const isAnswer = datas.qnaCommentContent === null ? false : true;

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handlerClickDelete = () => {
        axios.delete(`http://localhost:8080/admin/qna/${qnaIdx}`)
        .then(response => { 
            console.log(response);
            if (response.status === 200) {
                alert("정상적으로 삭제되었습니다.");
            } else {
                alert("삭제에 실패했습니다.");
                return;
            }
        })
        .catch(error => console.log(error));
    };


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
                                {
                                    isAnswer === false ? (
                                        <form onSubmit={qnaAnswer}>
                                            <textarea name="qnaCommentContent" onChange={handleChange} cols={70}
                                                rows={8}></textarea>
                                        </form>
                                    ) : (
                                        <p>{datas.qnaCommentContent}</p>
                                    )
                                }

                            </div>
                            <div className='admincomment-date'>
                            <span>{isAnswer ? ( datas.qnaCommentWriteDate) : ''  }</span>
                            </div>
                            <div className='admincomment-edit'>
                               { datas.qnaCommentContent === null ? <button className='admincomment-edit-btn' onClick={qnaAnswer} >등록</button> : null}
                                <button className='admincomment-delete-btn' onClick={handlerClickDelete}>삭제</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table >
    );
}

export default AdminQnaModal;