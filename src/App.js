import React from 'react'
import { Typography , styled , Box } from '@mui/material';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';
const Header = styled(Typography)`
margin:10px  0 ;
font-size:36px;
text-transform:uppercase;
color:blue;`
function App() {
  return (
    <>
    <Box className = 'App'>
      <Header variant='h4'>
        Expense Tracker
      </Header>
      <Box>
        <Balance/>
        <ExpenseCard/>
        <NewTransactions/>

      </Box>
      <Box>
        <Transactions/>

      </Box>
    </Box>

    </>
  );
}

export default App;
