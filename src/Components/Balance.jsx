import styled from "@emotion/styled";
import { Box , Typography } from "@mui/material";
const BalanceStyled = styled(Typography)`
font-size:25px`
const Balance = () => {
    return (<>
    
    <Box>
        <BalanceStyled>Balance : $100</BalanceStyled>
    </Box>
    </>)
}
export default Balance;