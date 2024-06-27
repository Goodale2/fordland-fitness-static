import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

const Home: React.FC = () => (
  <>
    <Heading as="h1" size="2xl">
      Home Page
    </Heading>
    <Text fontSize="xl">
      Welcome to the home page!
    </Text>
  </>
);

export default Home;