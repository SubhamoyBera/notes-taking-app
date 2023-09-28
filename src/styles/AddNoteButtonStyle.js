import { styled } from '@mui/system';

export const useStyles = styled((theme) => ({
  root: {
    color: '#fff',
    float: 'right',
    backgroundColor: theme.palette.primary.dark
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      width: '100%',
      padding: '12px 8px'
    }
  }
}))