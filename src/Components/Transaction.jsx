import { ListItem, ListItemIcon, ListItemText , styled} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
const Detail = styled(ListItem)`
margin-top:10px`
const Transaction = ({transaction , transactions , setTransactions}) => {
    const color = transaction.amount > 0 ? 'green ' : 'red';
    const deleteTransaction =(id) => {
            setTransactions(transactions.filter(transaction => transaction.id!== id))
    }
    return (<>
    <Detail  style={{background:`${color}`,color:'#fff' , borderRadius:'20px'}}>
        <ListItemIcon><DeleteIcon style={{cursor:'pointer'}} onClick={() => deleteTransaction(transaction.id)}/></ListItemIcon>
        <ListItemText >{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
    </>)
}
export default Transaction
