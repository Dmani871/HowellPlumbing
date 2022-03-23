import { HStack, Link,Spacer} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <HStack spacing={3} height='auto'>
      <Spacer />
      <Link as={RouterLink} to="/home">
        Home
      </Link>
      <Link as={RouterLink} to="/services">
        Services
      </Link>
      <Link as={RouterLink} to="/contact">
        Contact
      </Link>
    </HStack>
  );
};

export default NavBar;
