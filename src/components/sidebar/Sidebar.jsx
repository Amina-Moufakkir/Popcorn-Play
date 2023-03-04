// import { useEffect } from 'react';
// import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import { ListSubheader, Divider, List, ListItem, ListItemText } from '@mui/material';
import useStyles from './styles';

const redLogo = 'https://fontmeme.com/permalink/230304/863e11ed12641f00352ca04288ed270d.png';

const blueLogo = 'https://fontmeme.com/permalink/230304/c80c9dc3a7bcbbebf1248b183d9bf72b.png';

// mock categories
const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div>
      <Link to="/" className={classes.imgLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Popcorn Play logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link to="/" key={value} className={classes.links}>
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} alt="not ready" className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link to="/" key={value} className={classes.links}>
            <ListItem onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} alt="not ready" className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
export default Sidebar;
