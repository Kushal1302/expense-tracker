import { Box, Button, TextField, Typography , styled } from "@mui/material"
const Container = styled(Box)({
    display:'flex',
    flexDirection:'column',
    '& > div , & > h5 , & > button':{
        marginTop:'30px'
    }
})
const NewTransactions = () => {
    return (<>
    <Container>
        <Typography variant="h5">New Transaction</Typography>
        <TextField label="Enter Expense"/>
        <TextField label="Enter Amount"/>
        <Button variant="contained">Add Transaction</Button>
    </Container>
    </>)
}
export default NewTransactions