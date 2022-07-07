import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';

import { Box, Text } from '@chakra-ui/react';
import { Project } from '../src/components/Project/Project';

const Projects: NextPage = () => {
  return (
    <>
      <HeadComponent contentTitle='Usama Lodhi | Front End Web Developer' contentDescription='Portfolio Projects' />
      <Box>
        <Text as='h1'>View Projects</Text>
      </Box>
      <Project />
    </>
  );
};

export default Projects;
