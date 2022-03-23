import { HStack, Spacer } from '@chakra-ui/react';
import CustomLink from './CustomLink';
const NavBar = () => {
  return (
    <HStack spacing={3} height="auto">
      <Spacer />
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
    </HStack>
  );
};

export default NavBar;
