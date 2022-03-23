import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Home from './routes/Home';
import Services from './routes/Services';
import About from './routes/About';
import Contact from './routes/Contact';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='services' element={<Services />} />
              <Route path='contact' element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
