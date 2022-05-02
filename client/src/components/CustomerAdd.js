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

    addCustomer = () =>{
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
        <>
            <Form onSubmit ={HandleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지: <input type="file" name="file" file={users.file} 
                value={users.fileName} onChange={HandleFileChange}  /><br/>
                이름: <input type="text" name="userName" value={users.userName} onChange={HandleValueChange} /><br/>
                생년월일: <input type="text" name="birthday" value={users.birthday} onChange={HandleValueChange} /><br/>
                성별: <input type="text" name="gender" value={users.gender} onChange={HandleValueChange} /><br/>
                직업: <input type="text" name="job" value={users.job} onChange={HandleValueChange} /><br/>
                <Button type="submit">추가하기</Button>
            </Form>
        </>
    )
}

export default CustomerAdd

const Form = styled.div`

`

const Buttom = styled.button`

`