import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

function CustomerDelete({stateRefresh, id}){

    const deleteCustomer = id =>{
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        stateRefresh();

    }

    return(
        <>
            <Button onClick={(e) => {deleteCustomer(id)}}>삭제</Button>
        
        </>
    )
}

export default CustomerDelete

const Button = styled.button`

`