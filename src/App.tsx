import { Container, Stack } from '@mui/material';
import ConfirmDialog from './examples/ConfirmDialog';
import SeveralActions from './examples/SeveralActions';
import ErrorDialog from './examples/ErrorDialog';

const App = () => {
  console.log('App component rendered');
  return (
    <Container>
      <Stack spacing={2} direction="column" alignItems="center">
        <ConfirmDialog />
        <ErrorDialog />
        <SeveralActions />
      </Stack>
    </Container>
  );
};

export default App;
