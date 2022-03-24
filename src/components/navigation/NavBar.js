import { HStack, Spacer, Heading } from '@chakra-ui/react';
import CustomLink from './CustomLink';
const NavBar = () => {
  return (
    <HStack spacing={20} px={20} py={5} height="auto" shadow='md'>
      <Heading>Howell Plumbing</Heading>
      <Spacer />
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
    </HStack>
  );
};

export default NavBar;
