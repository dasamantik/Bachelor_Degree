import { Box } from '@mui/system';
import AppB from '../components/AppBar';
import StickyHeadTable from '../components/Products/ProductList';

export default function CPUpage() {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1, padding: '4px' }}>
          <AppB />
        </Box>
        <StickyHeadTable />
      </Box>
    </>
  );
}
