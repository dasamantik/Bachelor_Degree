import {
  ExpandLess,
  ExpandMore,
  Person as PersonIcon,
  ProductionQuantityLimits as ProductionQuantityLimitsIcon,
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Collapse, IconButton, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Sidenavig({ open, setOpen }) {
  const [openProducts, setOpenProducts] = useState(false);
  const handleProductsClick = () => {
    setOpenProducts(!openProducts);
  };
  const navigate = useNavigate();

  const productCategories = [
    {
      link: '/admin/Categories/CPU',
      name: 'Процесори',
      icon: require('../../../icons/cpu-tower.svg').default,
    },
    { link: '/admin/Categories/GPU', name: 'Відеокарти', icon: require('../../../icons/gpu.svg').default },
    {
      link: '/admin/Categories/SoundCards',
      name: 'Звукові карти',
      icon: require('../../../icons/sound-card.svg').default,
    },
    {
      link: '/admin/Categories/EthernetCard',
      name: 'Інтернет карти',
      icon: require('../../../icons/ethernet.svg').default,
    },
    {
      link: '/admin/Categories/MotherBoard',
      name: 'Материнські плати',
      icon: require('../../../icons/motherboard.svg').default,
    },
    {
      link: '/admin/Categories/Driver',
      name: 'Накопичувачі',
      icon: require('../../../icons/optical-drive.svg').default,
    },
    { link: '/admin/Categories/RAM', name: 'Плашки Оперативки', icon: require('../../../icons/ram.svg').default },
    { link: '/admin/Categories/Cases', name: 'Блоки', icon: require('../../../icons/case 1.svg').default },
    {
      link: '/admin/Categories/Cooling Systems',
      name: 'Системи охолодження',
      icon: require('../../../icons/cooler.svg').default,
    },
  ];

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleProductsClick}>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Товари" />
              {openProducts ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openProducts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {productCategories.map(({ name, icon, link }) => (
                <ListItemButton sx={{ pl: 4 }} key={name} onClick={() => navigate(link)}>
                  <ListItemIcon>
                    <img src={icon} alt={name} width="24" height="24" />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => navigate('/admin/users')}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Клієнти" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <DrawerHeader />
    </>
  );
}
