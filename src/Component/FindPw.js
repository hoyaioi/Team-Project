import {
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import "../CSS/Find.css";

function FindPW() {
  return (
    <>
      <div className="find_wrapper_pw">
        <div className="find_container">
          <h2>비밀번호 찾기</h2>

          <Row id="find_input">
            <FormGroup className="find_input_box">
              <FormLabel style={{ color: "grey" }}>아이디(이메일)</FormLabel>
              <FormControl
                style={{ width: "450px" }}
                type="email"
                placeholder="아이디(이메일)을 입력하세요."
              />

              <FormLabel style={{ color: "grey" }}>이름</FormLabel>
              <FormControl
                style={{ width: "450px" }}
                type="name"
                placeholder="이름을 입력하세요."
              />

              <FormLabel style={{ color: "grey" }}>연락처</FormLabel>
              <FormControl
                style={{ width: "450px" }}
                type="phoneNum"
                placeholder="연락처를 '-'없이 입력하세요."
              />
              <button className="find_btn btn-text" type="button">
                비밀번호 찾기
              </button>
            </FormGroup>
          </Row>
        </div>
      </div>
    </>
  );
}

export default FindPW;
