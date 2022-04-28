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
                <h1>로그인</h1>
                <Form method="post">
                    <input type="text" inputmode="email" name="identitu" autoComplete="off"
                    autoCorrect="off" autocapitalize="none" aria-label="email" />
                    <input />
                    <Button>다음</Button>
                    <p>
                        <a>이메일 주소를 잊으셨나요?</a>
                        <span>ㅣ</span>
                        <a>비밀번호를 잊으셨나요?</a>
                    </p>
                </Form>
                <Space>또는</Space>
                <LoginLink>
                        <Kakao onClick={NaverIn} id="naverIdLogin"/>
                    <Link to="/sign">
                        <SignIn>계정 생성하기</SignIn>
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
    input{
        width:340px;
        height: 40px;
        margin-top:20px; 
        background-color: #f5f5f5;
        border: 1px solid #f5f5f5;
        border-radius: 30px;
        padding-left:30px;
        
    }
    p{
        margin-top:30px;
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