import { Typography, Button} from '@mui/material';
import { style } from '../../styles/style';
const useStyles = style

export default function Demo(){
    let classes = useStyles();
    return(
        <>
        <Typography variant='h1'>Customize Theme</Typography>
        <Typography variant='h2' color="primary">primary color text</Typography>
        <Typography variant='h2' color="secondary">secondary color text</Typography>
        <Typography variant='h2' color="error">error color text</Typography>

        styled button
        <Button color="primary" className={classes.roundButton} >primary color button</Button>

        normal button
        <Button variant="contained" color="secondary">secondary color button</Button>
        <Button variant="contained" color="info">info color button</Button>
        <Button variant="contained" color="error">error color button</Button>
        <Button variant="contained" color="warning">warning color button</Button>
        <Button variant="contained" color="success">success color button</Button>
        </>
    )
}