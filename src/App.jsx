import { useState } from 'react';

import { Typography, Box, styled } from '@mui/material';
import './App.css';

import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';

const Header = styled(Typography)`
  margin: 10px 0;
  color: black;
  font-size: 36px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4);
`;

const Component = styled(Box)`
  background: #E2BFB3;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2);
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

function App() {
  
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20},
    { id: 2, text: 'Salary', amount: 3000},
   
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }


  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;