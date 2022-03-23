import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './routes/Home';
import Services from './routes/Services';
import Contact from './routes/Contact';
import NavBar from './components/navigation/NavBar';
import Footer from './components/Footer';
import customTheme from './theme/index';
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
