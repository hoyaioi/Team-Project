import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../CSS/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const handlerSubmit = () => {
    axios
      .post("http://localhost:8080/login", {
        memEmail: email,
        memPassword: password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="login_main">
        <div className="panel">
          <Form className="panel_box">
            <h2>로그인</h2>
            <div className="panel_input_box">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Col sm>
                  <Form.Control
                    type="email"
                    placeholder="아이디(이메일)"
                    value={email}
                    onChange={changeEmail}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Col sm>
                  <Form.Control
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={changePassword}
                  />
                </Col>
              </Form.Group>


              <div>
                <Button
                  id="login_button"
                  type="submit"
                  onClick={handlerSubmit}
                >
                  로그인
                </Button>
              </div>
              <div className="register">
                <ul>
                  <li>
                    <Link to="/join">회원가입</Link>
                  </li>
                  <li className="linkRegister">
                    <Link to="/findAccount">아이디/비밀번호 찾기</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sns_box">
              <div className="hr-sect">OR</div>
              <div className="simplelogin">
                <h3>SNS 간편 로그인</h3>
              </div>
              <div className="sns_box">
                <ul className="btn_sns_join">
                  <li>
                    <Link to="/kktLogin">
                      <img src="/images/kakao.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/naverLogin">
                      <img src="/images/naver.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/kktLogin">
                      <img src="/images/google.png" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/facebookLogin">
                      <img src="/images/facebook.png" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
