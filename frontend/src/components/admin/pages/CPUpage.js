import { Box } from '@mui/system';
import AppB from '../components/AppBar';
import StickyHeadTable from '../components/Products/ProductList';

export default function CPUpage() {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
          <AppB />
        </Box>
        <StickyHeadTable />
      </Box>
    </>
  );
}
