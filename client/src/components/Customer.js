import React, {useState} from 'react'
import styled from 'styled-components'
import Faq from './Faq';
import {Link} from 'react-router-dom';


function Customer({header, custom}){

    return(
        <Container>  
            <Section>
                <h1>고객관리</h1>
                <table>
                    <div>
                    {header.map ((head, index) =>
                        <div className="headlayout">
                            <span>{head.id}</span>
                            <span> {head.name}</span>
                            <span> {head.birthday}</span>
                            <span>{head.gender}</span>
                        </div>
                    )}
                    </div>
                    {custom.map ((item, index) =>
                        <div className="layout">
                            <span>{index}</span>
                            <span> {item.name}</span>
                            <span> {item.birthday}</span>
                            <span>{item.gender}</span>
                        </div>
                    )}
                </table>
            </Section>
            
        </Container>
    )
}

export default Customer

// function CustomerProfile({users}){
//     return(
//         <div>
//             <h2>{users.name}{users.id}</h2>
//         </div>
//     )
// }

// function CustomerInfo({users}){
//     return(
//         <div>
//             <p>{users.birthday}</p>
//             <p>{users.gender}</p>
//             <p>{users.job}</p>
//         </div>
//     )
// }

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
    table{
        border: solid;
        padding:50px;
        margin-top:70px;
    }
    .headlayout{
        display: flex;
        span{
           width:200px;
            
        }
    }
    .layout{
        display: flex;
        span{
            width:200px;
            margin-top:30px;
        }
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


