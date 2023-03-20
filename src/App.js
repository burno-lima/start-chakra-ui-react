import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

export default function App() {
  const [itemsList, setItemsList] = useState([]);

  const deleteItem = (value) => {
    setItemsList(itemsList.filter((item) => item !== value))
  }

  const handleChange = (event, index) => {
    const updateTask = [...itemsList];
    updateTask[index] = event.target.value;
    setItemsList(updateTask);
  }

  return (
    <ChakraProvider>
      <Box display='flex' alignItems='center' justifyContent='center' mt={10}>
        <Box h={450} w={500} borderRadius={5} bg='gray' padding={5} boxShadow='dark-lg'>
          <FormControl>
            <FormLabel fontSize={25}>TODO:</FormLabel>
            <Input
              focusBorderColor='yellow.400'
              fontSize={20}
              color='white'
              type='text'
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  setItemsList([...itemsList, event.target.value])
                }
              }} />
            <FormHelperText color='white'>Insert task</FormHelperText>
            <Box h={300} w={460} bg='blackAlpha.500' borderRadius={5} p={2} mt={2}>
              {itemsList.map((value, index) => (
                <Box display='flex' justifyContent='space-between' mt={3} p={2} borderRadius={5} bg='blackAlpha.700'>
                  <Input
                    focusBorderColor='yellow.400'
                    color='white'
                    fontSize={25}
                    mr={2}
                    type='text'
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <Button colorScheme='yellow' onClick={() =>
                    deleteItem(value)
                  }>Remove</Button>
                </Box>
              ))}
            </Box>
          </FormControl>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
