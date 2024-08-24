import React from 'react';
import { Flex, Box, Heading, Text, Image, Divider } from '@chakra-ui/react';
import building from "../images/signal-2024-08-07-183849.jpeg";

const About: React.FC = () => (
  <Box maxW="1200px" mx="auto" px={4} py={10}>
    <Flex flexDirection="column" alignItems="center" gap={6} marginBottom="4em">
      <Image
        src={building}
        alt="Fordland Fitness Center"
        borderRadius="lg"
        boxShadow="md"
        maxH="400px"
        objectFit="cover"
        mb={6}
      />
      <Heading as="h1" size="2xl" textAlign="center">
        About Fordland Fitness
      </Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px">
        Fordland Fitness is more than just a gym—it's a 24-hour wellness hub dedicated to promoting physical, mental, and spiritual health in our hometown. We believe in the power of community and are committed to supporting our neighbors with kindness and compassion. Our goal is to create a welcoming space where everyone feels inspired to achieve their health goals.
      </Text>
    </Flex>

    <Divider mb={10} />

    <Flex flexDirection="column" alignItems="center" gap={6}>
      <Heading as="h1" size="2xl" textAlign="center">
        About The Owners
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} gap={8} alignItems="flex-start" justifyContent="center">
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Image
            src="path/to/jayse_image.jpg"
            alt="Jayse Stack"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            mb={4}
            mx="auto"
          />
          <Text fontSize="lg" maxW="400px">
            Jayse Stack, a dedicated firefighter, also runs Artisans Floors, specializing in hardwood flooring, and Pro Spray Foam, LLC. As a father of five, he understands the importance of setting a healthy example and is committed to building a better community for his family.
          </Text>
        </Box>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Image
            src="path/to/christian_image.jpg"
            alt="Christian Jones"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            mb={4}
            mx="auto"
          />
          <Text fontSize="lg" maxW="400px">
            Christian Jones, the owner of Christian Electrical Services, LLC, is equally devoted to his six children and to creating lasting change in his community. His expertise in electrical services is matched by his enthusiasm for fostering wellness and growth in Fordland.
          </Text>
        </Box>
      </Flex>
      <Text fontSize="lg" textAlign="center" maxW="800px" mt={6}>
        Together, Jayse and Christian also operate O.O.F., LLC, focusing on renovating and renting homes in Fordland and Southern Webster County. Their combined efforts aim to uplift the local area and make it a thriving, healthy place for all residents.
      </Text>
    </Flex>
  </Box>
);

export default About;
