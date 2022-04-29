import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Customer from './Customer';


function Faq(){
    const [header, SetHeader] = useState([
        {
            id: '번호',
            name: '이름',
            birthday: '생년월일',
            gender: '성별',
        }
    ])
    const [users, SetUser] = useState([
        {
            id: '1',
            name: 'jihwan',
            birthday: '911026',
            gender: '남자',
            job: '대학생'
        },
        {
            id: '2',
            name: 'ggjihwan',
            birthday: '911026',
            gender: '여자',
            job: '직장인'
        },
        {
            id: '3',
            name: 'hhjihwan',
            birthday: '911026',
            gender: '남자',
            job: '대학생'
        }
    ])
    return(
        <Container>  
            <Top>
                <Link to="/">
                    <img src="/images/logo.svg" alt=""/> 
                </Link>
            </Top>
            <Section>
                <h1>공지사항</h1>
                <Form method="post">
                            <Customer
                            header ={header}
                            users={users}
                            />
                    <BottomBtn>
                        <Button>목록</Button>
                        <Button>수정</Button>
                    </BottomBtn>

                </Form>

            </Section>
            
        </Container>
    )
}

export default Faq
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

// const Space = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 40px;
//     font-size: 12px;
//     font-weight: 500;
//     ::before{
//         content: "";
//         display: inline-block;
//         width: 150px;
//         height: 1px;
//         margin: 0 8px;
//         background-color: #f5f5f5;
//     }
//     ::after{
//         content: "";
//         display: inline-block;
//         width: 150px;
//         height: 1px;
//         margin: 0 8px;
//         background-color: #f5f5f5;
//     }
// `

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

const BottomBtn = styled.div`
    margin: 40px;
`
const Button = styled.button`
    width:100px;
    height:30px;
    margin: 2px;
    background-color: #3d69e1;
    border: 1px solid #f5f5f5;
    border-radius: 30px;
    color: white;
    cursor:pointer;
    font-size:12px;
`



