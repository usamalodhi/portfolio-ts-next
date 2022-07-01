import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';
import { Box, Text } from '@chakra-ui/react';
const Home: NextPage = () => {
  return (
    <>
      <HeadComponent
        contentTitle='Usama Lodhi | Front End Web Developer'
        contentDescription='React wizard, CSS Mysfit'
      />
      <Box>
        <Text as='h1'>This is the index page</Text>
        <Text as='p'>This is the index page text</Text>
      </Box>
    </>
  );
};

export default Home;
