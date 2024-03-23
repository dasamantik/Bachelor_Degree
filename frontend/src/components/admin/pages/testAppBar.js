import { Home } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Tooltip, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../service/appStore';
const drawerWidth = 280;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function DenseAppBar() {
  const updateOpen = useAppStore((state) => state.updateOpen);
  const dopen = useAppStore((state) => state.dopen);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => updateOpen(!dopen)}>
            <MenuIcon />
          </IconButton>
          <Tooltip title="Повернутися на основну сторінку">
            <IconButton sx={{ mr: 1 }} onClick={() => navigate('/admin')}>
              <Home />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" color="inherit" component="div">
            Адмін панель сайту PC-config
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
