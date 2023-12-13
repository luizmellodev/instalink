// styles.js
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#17171C',
    color: 'white',
    padding: '32px',
  },
  header: {
    marginBottom: '32px',
    '& img': {
      height: '124px',
      width: '124px',
      borderRadius: '50%',
      marginBottom: '32px',
      transition: 'transform .2s',
      position: 'relative',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
    '& p': {
      fontSize: '120%',
      color: '#c5c2da',
      marginBottom: '60px',
      '&:hover': {
        color: '#947edf',
      },
    },
    '& a': {
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tituloSep: {
    color: '#6C3BED',
    marginTop: '60px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Add more styles for other components...
}));
