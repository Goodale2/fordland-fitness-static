import React from 'react';
    import {
      Container,
      Flex,
      Box,
      Heading,
      Button,
      VStack,
      Link
    } from '@chakra-ui/react'
    import {
      MdPhone,
      MdEmail,
      MdLocationOn
    } from 'react-icons/md'

const Contact: React.FC = () => (
    <>
        <Heading as="h1" size="lg" mb={4}>Contact Information</Heading>
        <Container maxW="full" mt={0} centerContent overflow="hidden" padding={0}>
          <Flex bg="#02054B"
              color="white"
              borderRadius="lg"
              p={5}
              gap={4}
              w={"100%"}
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={"space-evenly"}>
                <Box>
                    <Box>
                      <Heading mb={4} color="#DCE2FF" as="h1" size={"md"}>
                        Fordland Fitness
                      </Heading>
                      <Box>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Link href='tel:417-306-1914'>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            justifyContent={"flex-start"}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            417-306-1914
                          </Button>
                          </Link>
                          <Link href='mailto:fordlandfitness@gmail.com'>
                          <Button
                            size="md"
                            height="48px"
                            width="260px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            justifyContent={"flex-start"}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                            fordlandfitness@gmail.com
                          </Button>
                          </Link>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            justifyContent={"flex-start"}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                            Fordland, Missouri
                          </Button>
                        </VStack>
                      </Box>
                      <Heading mb={4} color="#DCE2FF" as="h1" size={"md"}>
                        Owners
                      </Heading>
                      <Box>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Link href='tel:417-894-3533'>
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            justifyContent={"flex-start"}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            Jayse Stack: 417-894-3533
                          </Button>
                          </Link>
                          <Link href='tel:573-220-4166'>
                          <Button
                            size="md"
                            height="48px"
                            width="280px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            justifyContent={"flex-start"}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            Christian Jones: 573-220-4166
                          </Button>
                          </Link>
                        </VStack>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <div style={{width: '100%'}}><iframe width="100%" height="400" style={{borderRadius: '4px'}} frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=297%20W%20Sunset,%20Fordland%20MO+(Fordland%20Fitness)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
                  </Box>
          </Flex>
        </Container>
    </>
);

export default Contact;