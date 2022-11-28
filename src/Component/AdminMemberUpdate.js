

function AdminMemberUpdate (props) {

    console.log({props});
    return (
        <>
        <form>
            <input type="text">이름</input>
            <input type="text">이메일</input>
            <input type="text">주소</input>
            <input type="text">전화번호</input>
        </form>
        </>
    );
}

export default AdminMemberUpdate;