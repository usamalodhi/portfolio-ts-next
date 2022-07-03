import { Box, Flex, IconButton } from '@chakra-ui/react';
import Slider from 'react-slick';
import Image from 'next/image';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { PROJECTS } from './Projects';
import { SETTINGS } from './SlickSliderSettings';

export function SlickSlider() {
  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <Box pb='40px'>
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />

      <Slider {...SETTINGS} ref={(slider) => setSlider(slider)}>
        {PROJECTS.map((project) => (
          <Box key={project.id} border='2px solid black' height='50vh'>
            <Image alt='test' src={project.image} layout='fill' objectFit='contain' quality={100} />
          </Box>
        ))}
      </Slider>

      <Box>Hellos</Box>

      <Box>
        <IconButton onClick={() => slider?.slickPrev()} aria-label='Search database' icon={<BiLeftArrowAlt />} />
      </Box>
      <Box>
        <IconButton onClick={() => slider?.slickNext()} aria-label='Search database' icon={<BiRightArrowAlt />} />
      </Box>
    </Box>
  );
}

{
  /* <Slider {...settings} ref={(slider) => setSlider(slider)}>
{projects.map((project) => (
  <Box key={project.id} position='unset' backgroundPosition='center' width='100%'>
    <Image
      objectFit='contain'
      style={{ position: 'relative', width: '100%', height: 'unset' }}
      alt={project.title}
      src={project.image}
      layout='fill'
    />
    <Flex height='100vh'>
      <Flex
        border='2px solid orange'
        background='brand.secondary'
        color='brand.primary'
        width='100%'
        position='absolute'
        bottom='0%'
        left='0%'
      >
        <Text as='h3'>{project.title}</Text>
        <Text>{project.text}</Text>
      </Flex>
    </Flex>
  </Box>
))}
</Slider> */
}
