import React, {useState} from 'react'
import styled from 'styled-components'
import CustomerDelete from './CustomerDelete';
import Faq from './Faq';
import {Link} from 'react-router-dom';


function Customer({header, custom, stateRefresh}){

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
                            <span>{head.update}</span>
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
                    <CustomerDelete stateRefresh={stateRefresh} id={custom.id} />
                </table>
            </Section>
            
        </Container>
    )
}

export default Customer

const Container = styled.div`
    font-size:12px;
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

