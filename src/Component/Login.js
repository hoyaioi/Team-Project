
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../CSS/reset.css';
import '../CSS/login.css';


function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const changeEmail = (e) => setEmail(e.target.value);
    const changePassword = (e) =>setPassword(e.target.value);
    const handlerSubmit = () => {
        axios.post('http://localhost:8080/login', {"memEmail": email, "memPassword": password})
        .then(response=>console.log(response))
        .catch(error => console.log(error));    
    }
    return (

        <>
            <div className="login_main">
                
                <Container className="panel">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="email" placeholder="아이디(이메일)" value={email} onChange={changeEmail} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="비밀번호" value={password} onChange={changePassword} />
                            </Col>
                        </Form.Group>
                        <br />

                        <div>
                            <Button className="LoginButton btn text" type="submit" onClick={handlerSubmit} >
                                로그인
                            </Button>
                        </div>
                        <div className="register">
                            <Link to="/firstReg" className="linkRegister">회원가입  &nbsp; &nbsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</Link>
                            <Link to="/findAccount" className="linkRegister">아이디/비밀번호 찾기</Link>
                        </div>
                        <div className="hr-sect">
                            Or
                        </div>
                        <div className="simpleLogin">
                            
                            <h3>SNS 간편 로그인</h3>


                        </div>
                        <div className="snsImage">
                            <Link to="/kktLogin">
                                <img className="img1" alt="kktLogo" src="img/kktLogo.jpg"/>
                                </Link>
                            <Link to="/naverLogin"><img className="img2" alt="naverLogo" src="img/naverLogo.jpg"/></Link>
                            <Link to="/googleLogin"><img className="img3" alt="googleLogo" src="img/googleLogo.jpg"/></Link>
                            <Link to="/facebookLogin"><img className="img4" alt="facebookLogo" src="img/facebookLogo.png"/></Link>


                        </div>



                    </Form>
                </Container>
            </div>





        </>
    )


};




export default Login;