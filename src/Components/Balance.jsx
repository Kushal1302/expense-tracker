import styled from "@emotion/styled";
import { Box , Typography } from "@mui/material";
const BalanceStyled = styled(Typography)`
font-size:25px`
const Balance = ({transactions}) => {
    const amount = transactions.map(transaction => transaction.amount)
    const balance = amount.reduce((amount , curAmount) => amount+=curAmount)
    return (<>
    
    <Box>
        <BalanceStyled>Balance : ₹{balance}</BalanceStyled>
    </Box>
    </>)
}
export default Balance;