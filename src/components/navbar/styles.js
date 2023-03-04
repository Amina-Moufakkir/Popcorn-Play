import { makeStyles } from '@mui/styles';

// constant width
// const drawerWidth = '240px';

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: '240px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: '240px',
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: '240px',
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      TextDecoration: 'none',
    },
  },
}));
