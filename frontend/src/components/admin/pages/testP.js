import { Box } from '@mui/system';
import StickyHeadTable from '../components/Products/ProductList';
import SideNav from './test';
import DenseAppBar from './testAppBar';
const columns = [
  { id: 'photo', label: 'Photo', minWidth: 100 },
  { id: 'brand', label: 'Brand', minWidth: 100 },
  { id: 'model', label: 'Model', minWidth: 100 },
  { id: 'socket', label: 'Socket', minWidth: 100 },
  { id: 'cores', label: 'Cores', minWidth: 100 },
  { id: 'frequency', label: 'Frequency', minWidth: 100 },
  { id: 'price', label: 'Price', minWidth: 100 },
  { id: '_id', label: 'Id', minWidth: 100 },
];
export default function TestP() {
  const pageCategory = 'cpu';
  const tableName = 'Список процесорів';
  return (
    <>
      <DenseAppBar />
      <Box height={30} />
      <Box sx={{ display: 'flex', overflowY: 'hidden' }}>
        <SideNav />
        <Box sx={{ flexGrow: 1, padding: '4px' }}>
          <StickyHeadTable pageCategory={pageCategory} {...{ columns }} tableName={tableName} />
        </Box>
      </Box>
    </>
  );
}
