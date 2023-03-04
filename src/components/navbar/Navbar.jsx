import { AppBar, IconButton, Toolbar, Button, Avatar, useMediaQuery } from '@mui/material';
import { AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'red' }}>
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
          {
            theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />
          }
        </IconButton>
        {!isMobile && 'Search ...'}
        <div>
          {
            !isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )
          }
        </div>
        {isMobile && 'Search ...'}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
