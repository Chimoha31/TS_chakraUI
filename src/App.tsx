import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="pink">Test Btn</Button>
      <h1>Checking font color</h1>
    </ChakraProvider>
  );
}

export default App;
