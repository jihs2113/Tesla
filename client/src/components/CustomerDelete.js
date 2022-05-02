import React from 'react';

function CustomerDelete({stateRefresh}){

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