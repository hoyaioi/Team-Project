import { Container, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import '../CSS/findPW.css'
import '../CSS/reset.css'

function FindPW() {
    return (
        <>
            <div className="findPW_wrapper">

                <div className="findPW_container">
                    <Container>
                        <h2>비밀번호 찾기</h2>
                        <br /><br /><br />

                        <Row>
                            <FormGroup>
                                <FormLabel style={{ color: 'grey' }}>아이디(이메일)</FormLabel>
                                <FormControl style={{ width: '450px' }} type='email' placeholder="아이디(이메일)을 입력하세요." />
                            </FormGroup>

                            <FormGroup>
                                <br/><br/>
                                <FormLabel style={{ color: 'grey' }}>이름</FormLabel>
                                <FormControl style={{ width: '450px' }} type='name' placeholder="이름을 입력하세요." />
                            </FormGroup>

                            <FormGroup>
                                <br /><br /><br />
                                <FormLabel style={{ color: 'grey' }}>연락처</FormLabel>
                                <FormControl style={{ width: '450px' }} type='phoneNum' placeholder="연락처를 '-'없이 입력하세요." />
                                <button className="findPW_findPW btn btn-text" type="button">비밀번호 찾기</button>

                            </FormGroup>
                        </Row>

                    </Container>

                </div>


            </div>
        </>
    )

}

export default FindPW;