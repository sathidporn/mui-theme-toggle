import { makeStyles } from '@mui/styles';

export const style = makeStyles((theme) => ({
    roundButton : {
        '&.MuiButton-root' : {
            borderRadius: 15,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main, 
            '&:hover': {
                backgroundColor: '#454c54',
                color: theme.palette.primary.main,
            },
        }
    }
}
))