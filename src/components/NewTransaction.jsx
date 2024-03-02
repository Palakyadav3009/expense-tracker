import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
    & >div, & > button {
        border-radius: 12px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2);
        transition: background 0.5s ease;

    }

`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        addTransaction(transaction);
    }
    
    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField value={text} label="Enter Expense" onChange = {(e) => setText(e.target.value)} />
            <TextField value={amount} label="Enter Amount" onChange = {(e) => setAmount(e.target.value)}  />
            <StyledButton variant="contained" onClick={newTransaction}>Add Transaction</StyledButton>
        </Container>
    )
}

export default NewTransaction;