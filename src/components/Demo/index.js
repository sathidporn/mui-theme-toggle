import { Typography, Button} from '@mui/material';

export default function Demo(){
    return(
        <>
        <Typography variant='h1'>Text1</Typography>
        <Typography variant='h2' color="secondary">Text2</Typography>
        <Button variant="contained" color="primary">Button</Button>
        <Button variant="contained" color="secondary">Button</Button>
        <Button variant="contained" color="info">Button</Button>
        <Button variant="contained" color="error">Button</Button>
        <Button variant="contained" color="warning">Button</Button>
        <Button variant="contained" color="success">Button</Button>
        </>
    )
}