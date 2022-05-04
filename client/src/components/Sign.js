import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Sign from './Sign'
import Kakao from './Kakao';

function Login(){

    const NaverIn = () =>{
        
    }

    return(
        <Container>  
            <Top>
                <Link to="/">
                    <img src="/images/logo.svg" alt=""/> 
                </Link>
            </Top>
            <Section>
                <h1>회원가입</h1>
                <Form method="post">
                    <div className="formtext">
                        <p className="nation">국적 선택</p>
                        <select id="formSelectRegion" autocomplete="off">
                            <optgroup label="North America">
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="MX">México</option>
                                <option value="PR">Puerto Rico</option>
                            </optgroup>
                            <optgroup label="Europe">
                                <option value="BE">Belgium</option>
                                <option value="FR">France</option>
                                <option value="IT">Italia</option>
                                <option value="PT">Portugal</option>
                            </optgroup>
                            <optgroup></optgroup>
                        </select>
                    </div>
                    <div className="formtext">
                        <p>이름</p>
                        <input type="text" name="first_name"  />
                    </div>
                    <div className="formtext">
                        <p>성</p>
                        <input type="text" name="last_name"  />
                    </div>
                    <div className="formtext">
                        <p>이메일 주소</p>
                        <input type="text" inputmode="email" name="email" aria-label="email" />
                    </div>
                    <div className="formtext">
                        <p>비밀번호</p>
                        <input type="password" name="password"  />
                    </div>
                    <div className="check">
                        <input className="infocheck" type="checkbox" name="privacy_consent" value="1" />
                        <p>Tesla 계정을 생성함으로써 Tesla <a>개인정보 처리방침</a> 및 <a>이용약관</a>을 이해했으며 동의합니다.</p>
                    </div>
                    <Button>계정 생성</Button>
                </Form>
                <Space>또는</Space>
                <LoginLink>
                    <Link to="/sign">
                        <SignIn>로그인</SignIn>
                    </Link>
                </LoginLink>
            </Section>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
    font-size:12px;
`

const Top = styled.div`
    display:flex;
    margin: 20px;
`

const Section = styled.div`
    margin-top:80px;
    h1{
        font-size:24px;
        margin-right:10px;
    }

`

const Space = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    font-size: 12px;
    font-weight: 500;
    ::before{
        content: "";
        display: inline-block;
        width: 150px;
        height: 1px;
        margin: 0 8px;
        background-color: #f5f5f5;
    }
    ::after{
        content: "";
        display: inline-block;
        width: 150px;
        height: 1px;
        margin: 0 8px;
        background-color: #f5f5f5;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:20px;
    select{
        cursor:pointer;
    }
    input{
        width:340px;
        height: 40px;
        margin-top:10px; 
        background-color: #f5f5f5;
        border: 1px solid #f5f5f5;
        border-radius: 30px;
        padding-left:30px;
        padding-right:30px;
        
    }
    .formtext{
        text-align:left;
        margin-top:10px;
        .nation{
            margin-bottom:10px;
        }
        p{
            margin-top: 10px;
            margin-left:30px;
        }
    }
    .check{
        display:flex;
        align-items:center;
        margin-top:10px;
        .infocheck{
            width: 20px;
            margin-right: 20px;
        }
        p{
            width:260px;
            margin-top:10px;
        }
    }
    .forget{
        margin-top:30px;
        margin-right:16px;
        font-size:12px;
        color: inherit;
    }
    a{
        text-decoration: underline;
        cursor:pointer;
        font-size:12px;
    }
    span{
        padding: 0 0.5rem;
    }
`


const Button = styled.button`
    width:340px;
    height:40px;
    margin-top:20px; 
    background-color: #3d69e1;
    border: 1px solid #f5f5f5;
    border-radius: 30px;
    color: white;
    cursor:pointer;
    font-size:12px;
`
const LoginLink = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`


const SignIn = styled.button`
    width:340px;
    height:40px;
    margin-top:20px; 
    background-color: white;
    border: 2px solid black;
    border-radius: 30px;
    color: black;
    cursor:pointer;
    font-size:12px;
    :hover{
        background-color: black;
        color:white;
    }
`