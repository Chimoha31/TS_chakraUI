import {BrowserRouter} from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react';

import {theme} from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Button colorScheme="pink">Test Btn</Button>
      <p>aaaaaaaa</p>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
