import React from 'react';
import { Box, Heading, Text, Button, Stack, Divider, SimpleGrid, Image, Link } from '@chakra-ui/react';

const Home: React.FC = () => (
  <Box padding="4" maxWidth="1200px" margin="0 auto">
    <Heading as="h1" size="2xl" textAlign="center" my="6">
      Welcome to Fordland Fitness
    </Heading>
    <Text fontSize="xl" textAlign="center" mb="10">
      Your 24-hour hub for physical, mental, and spiritual well-being right in the heart of Fordland.
    </Text>
    <Box>
      <div style={{width: '100%'}}><iframe width="100%" height="400" style={{borderRadius: '4px'}} frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=297%20W%20Sunset,%20Fordland%20MO+(Fordland%20Fitness)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
    </Box>
    <Box textAlign="center" my="10">
      <Link href='/individual_plans'>
        <Button colorScheme="blue" size="lg">Join Us Today</Button>
      </Link>
    </Box>
    
    <Divider />

    <Heading as="h2" size="xl" my="6">
      Our Mission
    </Heading>
    <Text fontSize="lg" mb="10">
      At Fordland Fitness, we believe in the power of community and the importance of supporting our neighbors. We are dedicated to providing a space where everyone can improve their health and happiness with the convenience of modern amenities and a hometown feel.
    </Text>
    
    {/* <Divider /> */}

    {/* <Heading as="h2" size="xl" my="6">
      Meet the Team
    </Heading>
    <SimpleGrid columns={[1, null, 2]} spacing="10" mb="10">
      <Box>
        <Image src="path/to/jayse_image.jpg" alt="Jayse Stack" />
        <Heading as="h3" size="lg" my="4">Jayse Stack</Heading>
        <Text>Firefighter and serial entrepreneur, Jayse is committed to enhancing the community with his expertise in flooring and insulation. Proud husband and father of five, Jayse brings passion and dedication to Fordland Fitness.</Text>
      </Box>
      <Box>
        <Image src="path/to/christian_image.jpg" alt="Christian Jones" />
        <Heading as="h3" size="lg" my="4">Christian Jones</Heading>
        <Text>Owner of Christian Electrical Services, Christian is a devoted family man and business innovator. With six children, his commitment to family and community shines through in every endeavor.</Text>
      </Box>
    </SimpleGrid>
    
    <Divider /> */}

    {/* <Heading as="h2" size="xl" my="6">
      Featured Programs
    </Heading>
    <SimpleGrid columns={[1, null, 3]} spacing="10" mb="10">
      <Box>
        <Image src="path/to/group_fitness_image.jpg" alt="Group Fitness" />
        <Heading as="h3" size="lg" my="4">Group Fitness</Heading>
        <Text>Join our group fitness classes to stay motivated and connect with fellow community members in a fun and energetic environment.</Text>
      </Box>
      <Box>
        <Image src="path/to/personal_training_image.jpg" alt="Personal Training" />
        <Heading as="h3" size="lg" my="4">Personal Training</Heading>
        <Text>Work one-on-one with our expert trainers to reach your personal health and fitness goals with tailored programs.</Text>
      </Box>
      <Box>
        <Image src="path/to/yoga_image.jpg" alt="Yoga and Mindfulness" />
        <Heading as="h3" size="lg" my="4">Yoga and Mindfulness</Heading>
        <Text>Enhance your mental and spiritual health through our yoga classes, designed for all levels to improve flexibility and reduce stress.</Text>
      </Box>
    </SimpleGrid>
    
    <Divider /> */}
  </Box>
);

export default Home;
