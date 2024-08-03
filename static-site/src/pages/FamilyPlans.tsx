import React from 'react';
import { Heading, Link, Stack, Text } from '@chakra-ui/react';

const FamilyPlans: React.FC = () => (
  <>
    <Stack gap={4}>
    <Heading as="h1" size="lg" mb={4}>
      The Family Plan
    </Heading>
    <Text>
      In order to qualify for a family plan, an adult member of the family must sign up with one of our individual plans.
      After that, they should contact us at <Link color={'blue.500'} href="mailto:fordlandfitness@gmail.com" target="_blank">
      fordlandfitness@gmail.com</Link> with the names, ages and birthdays for each family member
      they want to add. Each of these family memebrs will be tied onto the selected individual plan for half price. 16-18 
      year olds must be paying members. Those under 16 must be accopmanied by an adult with a membership.
    </Text>
    <Text>
        Feel free to <Link color={'blue.500'} href='/contact'>reach out</Link> with any questions!
    </Text>
    </Stack>
  </>
);

export default FamilyPlans;