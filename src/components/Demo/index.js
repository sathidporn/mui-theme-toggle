import { Typography, Button} from '@mui/material';

export default function Demo(){
    return(
        <>
        <Typography variant='h1'>Customize Theme</Typography>
        <Typography variant='h2' color="primary">primary color text</Typography>
        <Typography variant='h2' color="secondary">secondary color text</Typography>
        <Typography variant='h2' color="error">error color text</Typography>

        <Button variant="contained" color="primary">primary color button</Button>
        <Button variant="contained" color="secondary">secondary color button</Button>
        <Button variant="contained" color="info">info color button</Button>
        <Button variant="contained" color="error">error color button</Button>
        <Button variant="contained" color="warning">warning color button</Button>
        <Button variant="contained" color="success">success color button</Button>
        </>
    )
}