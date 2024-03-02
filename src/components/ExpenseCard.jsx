
import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2);
     border-radius: 10px;
     font-weight: bold;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;

const ExpenseCard = ({ transactions }) => {
    
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
    
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color: 'green' }}>+₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{ color: 'red' }}>-₹{expense}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpenseCard;