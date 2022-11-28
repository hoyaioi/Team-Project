import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import "../CSS/AdminMemberUpdate.css";

function AdminMemberUpdate(props) {
  const [data, setData] = useState({});
  console.log(props.mem)
  const memIdx = props.mem;
  // const [memIdx, setMemIdx] = useState('');
  const [memName, setMemName] = useState("");
  const [memPhone, setMemPhone] = useState("");
  const [memPostNum, setMemPostNum] = useState("");
  const [memAddr1, setMemAddr1] = useState("");
  const [memAddr2, setMemAddr2] = useState("");
  const [memEmail, setMemEmail] = useState("");
  const [memPw, setMemPw] = useState("");
  const [memPw2, setMemPw2] = useState("");

  const handlerChangeName = (e) => setMemName(e.target.value);
  const handlerChangePhone = (e) =>
    setMemPhone(e.target.value.replace(/[^0-9]/g, "")); //숫자만 입력받기 replace를 이용한 필터링
  const handlerChangeEmail = (e) => setMemEmail(e.target.value);
  const handlerChangePw = (e) => setMemPw(e.target.value);
  const handlerChangePw2 = (e) => setMemPw2(e.target.value);

  const inputPw = useRef();
  const inputPhone = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/member/myinfo/${memIdx}`)
      .then((response) => {
        setData(response.data);
        setMemName(response.data.memName);
        setMemPhone(response.data.memPhone);
        setMemPostNum(response.data.memPostNum);
        setMemAddr1(response.data.memAddr1);
        setMemAddr2(response.data.memAddr2);
        setMemEmail(response.data.memEmail);
        inputPw.current.focus();
      })
      .catch((error) => console.log(error));
  }, []);

  const handlerClickUpdate = () => {
    if (memPw !== memPw2) {
      alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      setMemPw("");
      setMemPw2("");
      inputPw.current.focus();
    } else if (memPw == "" || memPw2 == "") {
      alert("변경하실 비밀번호를 입력해주세요.");
      setMemPw("");
      setMemPw2("");
      inputPw.current.focus();
    } else if (memPhone.length < 10) {
      alert("휴대폰번호를 올바르게 입력해주세요.");
      setMemPhone("");
      inputPhone.current.focus();
    } else {
      axios
      .put(`http://localhost:8080/admin/member/updateinfo/${memIdx}`, {
          memIdx: memIdx,
          memName: memName,
          memPhone: memPhone,
          memPostNum: memPostNum,
          memAddr1: memAddr1,
          memAddr2: memAddr2,
          memEmail: memEmail,
          memPw: memPw,
          memPw2: memPw2,
        })
        .then((response) => {
          if (response.status === 200) {
            alert("변경이 완료되었습니다.");
            navigate("/admin/member");
          } else {
            alert("회원정보 수정이 실패하였습니다.");
            return;
          }
        })
        .catch((error) => console.log(error));
    }
  };


  return (
    <>
      <div id="main">
        <div className="myinfoup2_wrap">
          <div className="myinfoup2_title_wrap">
            <h2>회원정보수정</h2>
          </div>
          <form>
            <div className="myinfoup2_form_wrap">
              <div className="myinfoup2_info_wrap">
                <div className="myinfoup2_name_wrap">
                  <div className="myinfoup2_text">
                    이름{" "}
                  </div>
                  <div className="myinfoup2_input_wrap">
                    <input
                      type="text"
                      className="myinfoup2_readonly"
                      placeholder="변경할 이름을 입력하세요."
                      value={memName}
                      onChange={handlerChangeName}
                    />
                  </div>
                </div>
                <div className="myinfoup2_phone_wrap">
                  <div className="myinfoup2_text">휴대폰번호</div>
                  <div className="myinfoup2_input_wrap">
                    <input
                      type="text"
                      placeholder="연락처('-'제외)를 입력해주세요."
                      maxLength="11"
                      ref={inputPhone}
                      value={memPhone}
                      onChange={handlerChangePhone}
                    />
                  </div>
                </div>
               
              </div>
              <div className="myinfoup2_id_wrap">
                <div className="myinfoup2_email_wrap">
                  <div className="myinfoup2_text">이메일 (ID)</div>
                  <div className="myinfoup2_input_wrap">
                    <input
                      type="email"
                      className="myinfoup2_readonly"
                      value={memEmail}
                      onChange={handlerChangeEmail}
                      placeholder="변경할 이메일을 입력하세요."
                    />
                  </div>
                </div>
                <div className="myinfoup2_pw_wrap">
                  <div className="myinfoup2_text">비밀번호</div>
                  <div className="myinfoup2_input_wrap">
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요."
                      ref={inputPw}
                      value={memPw}
                      onChange={handlerChangePw}
                    />
                  </div>
                </div>
                <div className="myinfoup2_pw_wrap">
                  <div className="myinfoup2_text">비밀번호 확인</div>
                  <div className="myinfoup2_input_wrap">
                    <input
                      type="password"
                      placeholder="비밀번호를 다시 입력해주세요."
                      value={memPw2}
                      onChange={handlerChangePw2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="myinfoup2_btn_wrap">
              <input
                type="button"
                className="myinfoup2_btn_modify"
                onClick={handlerClickUpdate}
                value="수정하기"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminMemberUpdate;