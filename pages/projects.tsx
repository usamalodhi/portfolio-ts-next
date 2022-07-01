import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';

const Projects: NextPage = () => {
  return (
    <>
      <HeadComponent contentTitle='Usama Lodhi | Front End Web Developer' contentDescription='Portfolio Projects' />
      <Box>
        <Text as='h1'>This is the projects page</Text>
        <Text as='p'>This is the projects page text</Text>
      </Box>
    </>
  );
};

export default Projects;
