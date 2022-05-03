import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function CustomerAdd({stateRefresh}){
    const [users, setUsers] = useState(
        {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
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
            fileName: '',
            open: false
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

    const HandleClickOpen = () =>{
        setUsers({
            open: true
        })
    }

    const HandleClose = () =>{
        setUsers({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }



    return(
                <>                    
                    <Button variant="contained" color="primary" onClick={HandleClickOpen}>
                        고객 추가하기
                    </Button>
                    <Dialog open={users.open} onClose={HandleClose}>
                        <DialogTitle>고객 추가</DialogTitle>
                        <DialogContent>
                            <TextField label="이름" type="text" name="userName" value={users.userName} onChange={HandleValueChange} ></TextField>
                            <TextField label="생년월일" type="text" name="birthday" value={users.birthday} onChange={HandleValueChange} ></TextField>
                            <TextField label="성별" type="text" name="gender" value={users.gender} onChange={HandleValueChange} ></TextField>
                            <TextField label="직업" type="text" name="job" value={users.job} onChange={HandleValueChange} ></TextField>
                        </DialogContent>
                    </Dialog>
                </>
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

// const DialogTitle = styled(DialogTitle)`
//     color:white;
// `