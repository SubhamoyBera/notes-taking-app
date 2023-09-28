import { styled } from '@mui/system';

export const useStyles = styled((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'center'
  },
  heading: {
    marginTop: '.5em',
    color: '#00000099',
    opacity: 0.6
  },
  illustration: {
    marginTop: '4em'
  },
  [theme.breakpoints.down('xs')]: {
    heading: {
      marginTop: '0',
      fontSize: '2em'
    }
  }
}))