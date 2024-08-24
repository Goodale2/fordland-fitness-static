import React from 'react';
import { Box, Heading, Text, Button, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

const Home: React.FC = () => (
  <Box padding="4" maxWidth="1200px" margin="0 auto">
    <Heading as="h1" size="2xl" textAlign="center" my="6">
      Welcome to Fordland Fitness
    </Heading>
    <Text fontSize="xl" textAlign="center" mb="10">
      Your 24-hour hub for physical, mental, and spiritual well-being right in the heart of Fordland.
    </Text>
    <Box textAlign="center" my="10">
      <Link to='/individual_plans'>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Link>
    </Box>
    <Box>
      <Gallery/>
    </Box>
    
    <Divider/>

    <Heading as="h2" size="xl" my="6">
      Our Mission
    </Heading>
    <Text fontSize="lg" mb="10">
      At Fordland Fitness, we believe in the power of community and the importance of supporting our neighbors. We are dedicated to providing a space where everyone can improve their health and happiness with the convenience of modern amenities and a hometown feel.
    </Text>

    <Box my="10">
      <div style={{width: '100%'}}>
        <iframe 
          width="100%" 
          height="400" 
          style={{borderRadius: '4px'}} 
          frameBorder="0" 
          allowFullScreen
          src="https://www.youtube.com/embed/videoseries?list=PLuDY3UCfvoJ-fQVYf6yt_PLkH611wMXQP">
        </iframe>
      </div>
    </Box>

    <Divider/>

    <Box my="10">
      <Text fontSize="lg" mb="6">
        At Fordland Fitness, we're more than just a gym. We're a community dedicated to helping you achieve your personal best. Explore our video resources to stay motivated and inspired, and when you're ready, come visit us in person.
      </Text>
      <Text fontSize="lg">
        Whether you're a local resident or just passing through, our doors are always open to welcome you. See you soon at Fordland Fitness!
      </Text>
    </Box>

    <Box>
      <div style={{width: '100%'}}><iframe width="100%" height="400" style={{borderRadius: '4px'}} frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=297%20W%20Sunset,%20Fordland%20MO+(Fordland%20Fitness)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
    </Box>
    <Box textAlign="center" my="10">
      <Link to='/individual_plans'>
        <Button colorScheme="blue" size="lg">Join Us Today</Button>
      </Link>
    </Box>
  </Box>
);

export default Home;
