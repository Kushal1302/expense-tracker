import { Box , Card , CardContent , styled , Typography } from "@mui/material";
const Container = styled(Box)`
display:flex;
& > div{
    flex:1;
    padding:10px;
}`
const ExpenseCard = ({transactions}) => {
    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(curAmount => curAmount > 0).reduce((amount , curAmount) => amount+=curAmount)
    const expense = (amount.filter(curAmount => curAmount < 0).reduce((amount , curAmount) => amount+=curAmount))*-1;
    return (<>
    <Container>
        <Card>
            <CardContent>
                <Typography>Income : </Typography>
                <Typography style={{color:'green'}}>
                ₹{income}
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography>Expense : </Typography>
                <Typography style={{color:'red'}}>
                ₹{expense}
                </Typography>
            </CardContent>
        </Card>

    </Container>
    
    </>);
}
export default ExpenseCard;