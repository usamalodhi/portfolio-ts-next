import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';
import { Box, Text } from '@chakra-ui/react';

const About: NextPage = () => {
  return (
    <>
      <HeadComponent contentTitle='Usama Lodhi | Front End Web Developer' contentDescription='About Me' />
      <Box>
        <Text as='h1'>This is the about page</Text>
        <Text as='p'>This is the about page text</Text>
      </Box>
    </>
  );
};

export default About;
