import { Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import '../CSS/findID.css'
import '../CSS/reset.css'

function FindID() {
    return (
        <>
        
            <div className="findID_wrapper">
                
                <div className="findID_container">
                    <Container>
                        <h2>아이디 찾기</h2>
                        <br/><br/><br/>
            
                            <Row>
                                <FormGroup>
                                <FormLabel style={{color: 'grey'}}>이름</FormLabel>
                                <FormControl style={{width:'450px'}} type='name' placeholder="이름을 입력하세요."/>
                                </FormGroup>
                                
                                <FormGroup>
                                <br/><br/><br/>
                                <FormLabel style={{color: 'grey'}}>연락처</FormLabel>
                                <FormControl style={{width:'450px'}} type='phoneNum' placeholder="연락처를 '-'없이 입력하세요."/>
                                <button className="findID_findID btn btn-text" type="button">아이디 찾기</button>

                                </FormGroup>
                             </Row>

                    </Container>

                </div>


            </div>

        </>
    )

}

export default FindID;