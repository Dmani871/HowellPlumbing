import { Box, Link, HStack,Text,Spacer} from '@chakra-ui/react';
const Footer = () => {
  return (
    <Box
      bg="main.primary"
      w="100%"
      color="white"
      position="fixed"
      left={0}
      bottom={0}
    >
      <HStack p={4}>
        <Text>© 2021 dev. by us Ltd. Registered Company 12469520. United Kingdom.</Text>
        <Spacer />
        <Link href="https://www.devbyus.co.uk/">
          Developed by dev. by us Ltd
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
