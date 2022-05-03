import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Customer from './Customer';
import CustomerAdd from './CustomerAdd';
import Modal from './Modal';


function Faq(){
    const [custom, setCustom] = useState([]);
    const [header, setHeader] = useState([
        {
            id: '번호',
            name: '이름',
            birthday: '생년월일',
            gender: '성별',
            update: '설정',
        }
    ])
    
    const stateRefresh =() =>{
        setCustom({
            custom: '',
            search: '',
        });
        callApi()
        .then((data) => setCustom(data));
    } 

    const callApi = async() =>{
        const response = await fetch(`/api/customers`);
        const body = await response.json();
        console.log(body);
        return body;
    };

    const ModalIn =() =>{
        alert("내용이다.");
    }

    // const HandleValueChange = (e) =>{
    //     let nextState = {};
    //     nextState[e.target.name] = e.target.value;
    //     setCustom(nextState);
    // }

    // const filteredComponents = data => {
    //     data = data.filter((c) => {
    //         return c.name.indexOf(search) > -1;
    //     })
    //     return data.map((c) => {
    //         return <Customer  
    //                     stateRefresh={stateRefresh}
    //                     header ={header}
    //                     custom={custom} />
    //     })
    // }

    //검색필터링 함수

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
                    {/* <input placeholder="search" name="search" value={search} onChange={HandleValueChange} /> */}
                </Link>
            </Top>
            <Section>
                <Form method="post">
                    {custom ?
                            <Customer
                                stateRefresh={stateRefresh}
                                header ={header}
                                custom={custom}
                            /> : ""}
                            <AddState>
                                <CustomerAdd stateRefresh ={stateRefresh}/>
                            </AddState>
                    {/* {custom ? 
                            filteredComponents(custom) : "" } */}
                    <BottomBtn>
                            <Button onClick={ModalIn}>홈</Button>
                        <Link to="/faq/add">
                            <Button>고객추가</Button>
                        </Link>
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
const AddState = styled.div`
    display:none;
`
