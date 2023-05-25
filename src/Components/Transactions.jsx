import { Box, Divider, List, Typography } from "@mui/material";
import Transaction from "./Transaction";

const Transactions = (props) => {
    return (<>
    <Box>
        <Typography variant="h5">Transaction History</Typography>
        <Divider/>
        <List >
            {
                props.transactions.map(transaction => (
                    <Transaction  transaction = {transaction} setTransactions={props.setTransactions} transactions={props.transactions}/>
                ))
            }

        </List>
    </Box>
    
    </>)

}
export default Transactions;