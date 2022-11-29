import '../CSS/Faq.css';

function Faq() {
    return (

                <tr colspan="3" className="faq-modal">
                    <td colspan="3">
                        <div className='faq-modal-cont'>
                            <strong>Q</strong>
                            <div className='faq-content'>
                                <sapn>질문 내용</sapn>
                            </div>
                        </div>
                        <div className='faq-comment'>
                            <strong>A</strong>
                            <div className='admin-comment'>
                                <sapn>관리자의 코멘트</sapn>
                            </div>
                            <div className='comment-date'>
                                <sapn>작성일자</sapn>
                            </div>
                        </div>
                    </td>
                </tr>

    );
}

export default Faq;