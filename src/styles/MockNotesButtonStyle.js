import { styled } from '@mui/system';

export const useStyles = styled((theme) => ({
  root: {
    position: 'absolute',
    right: '33%',
    bottom: '3%'
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      right: '13%'
    }
  }
}))