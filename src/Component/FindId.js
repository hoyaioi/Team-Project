import {
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { Form } from "react-router-dom";
import "../CSS/Find.css";

function FindId() {
  return (
    <>
      <div className="find_wrapper">
        <div className="find_container">
          <h2>아이디 찾기 </h2>
          <Row id="find_input">
            <FormGroup className="find_input_box">
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
                아이디 찾기
              </button>
            </FormGroup>
          </Row>
        </div>
      </div>
    </>
  );
}

export default FindId;
