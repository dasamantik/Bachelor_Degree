import { Box } from '@mui/system';
import SideNav from './test';
import DenseAppBar from './testAppBar';

export default function TestP(params) {
  return (
    <>
      <DenseAppBar />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
      </Box>
    </>
  );
}
