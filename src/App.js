import React from 'react'
import { Typography , styled , Box } from '@mui/material';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';
import { useState } from 'react';
const Header = styled(Typography)`

font-size:36px;
text-transform:uppercase;
color:blue;`
const Component = styled(Box)`
display:flex;
background:#fff;
border-radius:20px;
width:800px;
margin:auto;
padding:10px;

& > div {
  height:70vh;
  width:50%;
  padding:10px;
  
}`
function App() {
  const [transactions ,setTransactions] = useState([{id:1 , text:"Manchu" , amount:70,},
{id:2 , text:"Laddo" , amount: -10}])
  return (
    <>
    <Box className = 'App'>
        <Header variant='h4'>
          Expense Tracker
        </Header>
        <Component>
            <Box>
              <Balance transactions = {transactions}/>
              <ExpenseCard transactions = {transactions}/>
              <NewTransactions setTransactions = {setTransactions} />

            </Box>
            <Box>
              <Transactions transactions = {transactions} setTransactions={setTransactions}/>

            </Box>
        </Component>
    </Box>

    </>
  );
}

export default App;
