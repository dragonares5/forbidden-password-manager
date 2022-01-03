import { Group, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  Link as MatLink,
  ListItemIcon
} from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  const handleToggleNav = () => {
    setNavState(!navState);
  };

  const menuPasswordItems = [
    {
      route: '/passwords/social-network',
      icon: Group,
      name: 'Social Network'
    },
    {
      route: '/passwords/websites',
      icon: Group,
      name: 'Websites'
    },
    {
      route: '/passwords/banks',
      icon: Group,
      name: 'Banks'
    },
    {
      route: '/passwords/system',
      icon: Group,
      name: 'Systems'
    }
  ];

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Container>
        <Drawer open={navState}>
          <Box sx={{ width: 350 }}>
            <List component="nav">
              <ListSubheader sx={{ fontWeight: 'bold' }}>
                PASSWORDS
              </ListSubheader>
              {/* Renderização de items do menu */}
              {menuPasswordItems.map((item) => (
                <MatLink component={Link} to={item.route} underline="none">
                  <ListItemButton>
                    {/* <ListItemIcon> */}
                    <item.icon sx={{ mr: 1 }} />
                    {/* </ListItemIcon> */}
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </MatLink>
              ))}
            </List>
          </Box>
        </Drawer>
        <Toolbar disableGutters>
          <IconButton
            onClick={handleToggleNav}
            size="large"
            color="inherit"
            edge="start"
            sx={{ mr: 1 }}
          >
            <Menu />
          </IconButton>
          {/* Logo */}
          <Typography>Forbidden Password Manager</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
