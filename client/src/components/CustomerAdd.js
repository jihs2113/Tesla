import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {post} from 'axios';

function CustomerAdd({stateRefresh}){
    const [users, setUsers] = useState(
        {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
    });
    const HandleFormSubmit =(e)=>{
        e.preventDefault();
        addCustomer()
        .then((response) => {
            console.log(response.data);
            stateRefresh(); 
        })
        setUsers({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        

    }

    const HandleFileChange = (e) =>{
        setUsers({
            file: e.target.files[0],
            fileName: e.target.value
        }) 

    }

    const HandleValueChange = (e) =>{
        let nextState ={};
        nextState[e.target.name] = e.target.value;
        setUsers(nextState);
    }

    const addCustomer = () =>{
        const url ='/api/customers';
        const formData = new FormData();
        formData.append('image', users.file);
        formData.append('name', users.userName);
        formData.append('birthday', users.birthday);
        formData.append('gender', users.gender);
        formData.append('job', users.job);
        const config= {
            headers: {
                'content-type': 'multipart/form-data'
                //보내주는 데이터에 파일이 있는경우 설정해주는부분이다.
            }
        }
        return post(url, formData, config);
        //실제로 서버로 데이터를 보낼수있도록 해준다.
    }

    return(
        <Container>
            <Top>
                <Link to="/">
                    <img src="/images/logo.svg" alt=""/> 
                </Link>
            </Top>
            <Section>
                <h1>고객추가</h1>
                <Form onSubmit ={HandleFormSubmit}>
                    <span>
                    프로필 이미지 
                    <input className="Profile" 
                        type="file" name="file" file={users.file} value={users.fileName} onChange={HandleFileChange}  />
                    </span><br/>
                    <span>이름: <input type="text" name="userName" value={users.userName} onChange={HandleValueChange} /></span><br/>
                    <span>생년월일: <input type="text" name="birthday" value={users.birthday} onChange={HandleValueChange} /></span><br/>
                    <span>성별: <input type="text" name="gender" value={users.gender} onChange={HandleValueChange} /></span><br/>
                    <span>직업: <input type="text" name="job" value={users.job} onChange={HandleValueChange} /></span><br/>
                </Form>
                <BottomBtn>
                        <Link to="/faq">
                            <Button>목록</Button>
                        </Link>
                        <Link to="/faq">
                            <Button type="submit">추가</Button>
                        </Link>
                </BottomBtn>
            </Section>
        </Container>
    )
}

export default CustomerAdd

const Container = styled.div`
    font-size:12px;
`

const Top = styled.div`
    display:flex;
    margin: 20px;
`

const Section = styled.div`
    margin-top:160px;
    

`

const Form = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    margin-top:20px;
    .Profile{
       display:flex;
       background-color:white;
       border:none;
       padding-left:80px;
    }
    input{
        width:340px;
        height: 30px;
        margin-top:20px; 
        margin-left:10px;
        background-color: #f5f5f5;
        border: 1px solid #f5f5f5;
        border-radius: 30px;
        padding-left:12px;
        
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
    margin-top: 40px;
    margin-left: 20px;
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