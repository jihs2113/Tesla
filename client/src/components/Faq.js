import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Customer from './Customer';


function Faq(){
    const [custom, setCustom] = useState([]);
    const [header, setHeader] = useState([
        {
            id: '번호',
            name: '이름',
            birthday: '생년월일',
            gender: '성별',
        }
    ])
    
    const callApi = async() =>{
        const response = await fetch(`/api/customers`);
        const body = await response.json();
        console.log(body);
        return body;
    };

    useEffect(() =>{
        callApi()
        .then((data) => setCustom(data));
    },[]);
    console.log(custom);
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
                    {custom ?
                            <Customer
                                header ={header}
                                custom={custom}
                            /> : ""}
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



