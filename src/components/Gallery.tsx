'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import building from "../images/signal-2024-08-07-183849.jpeg";
import image2 from "../images/signal-2024-08-02-232437.jpeg";
import image3 from "../images/signal-2024-08-02-232446.jpeg";
import image4 from "../images/signal-2024-08-02-232452.jpeg";
import image5 from "../images/signal-2024-08-02-232458.jpeg";
import image6 from "../images/signal-2024-08-02-232504.jpeg";
import image7 from "../images/signal-2024-08-02-232510.jpeg";
import image8 from "../images/signal-2024-08-02-232515.jpeg";
import image9 from "../images/signal-2024-08-02-232523.jpeg";
import image10 from "../images/signal-2024-08-02-232530.jpeg";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Gallery: React.FC = () => {
    const [slider, setSlider] = React.useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })
  
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
      {
        // title: 'Design Projects 1',
        // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image: building
      },
      {
        // title: 'Design Projects 2',
        // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image: image2
      },
      {
        // title: 'Design Projects 3',
        // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image: image3
      },
      {image: image4},
      {image: image5},
      {image: image6},
      {image: image7},
      {image: image8},
      {image: image9},
      {image: image10}
    ]
  
    return (
      <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'3xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                    {card.text}
                  </Text> */}
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    )
  };
  
  export default Gallery;