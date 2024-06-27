import React from 'react';
import { Box, Container, Flex, Text} from '@chakra-ui/react';
import WithSubnavigation from './Nav';
import LargeWithAppLinksAndSocial from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Box>
        <WithSubnavigation />
      </Box>

      <Container maxW="container.md" py={10} flex="1">
        {children}
      </Container>

      <Box mt="auto">
        <LargeWithAppLinksAndSocial />
      </Box>
    </Flex>
  );
};

export default Layout;