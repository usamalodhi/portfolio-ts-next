import { SimpleGrid, Image, Flex, Text, Stack, StackDivider, Divider } from '@chakra-ui/react';
import test from '../../../public/assets/AboutImage.jpeg';

interface FeatureProps {
  service: string;
  text: string;
}

const Feature = ({ service, text }: FeatureProps) => {
  return (
    <Flex direction='column'>
      <Text as='h3'>{service}</Text>
      <Divider borderColor='black' />
      <Text as='p'>{text}</Text>
    </Flex>
  );
};

export function AboutMe() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing='24px' padding='16px 24px'>
      <Stack>
        <Text as='h1'>About Me</Text>
        <Text as='p'>
          I'm a graduate of the Boolean Software Developer Academy learning the fundamentals of frontend and backend web
          development. A strong emphasis was placed on programming in Javascript/Typescript to build full stack
          applications using React, Node/Express, PostgreSQL and Prisma ORM.
        </Text>
        <Text as='p'>
          Outside of the academy I've been bolstering my skills in the latest frontend technologies including frameworks
          such as Gatsby and Next JS, and CSS Libraries including Chakra UI, Material UI and Framer Motion. I would love
          to work with you in an exciting Frontend role.
        </Text>
        <Text as='p'>
          Prior to web development, I've worked as an analyst in financial services and a PhD researcher, where I've had
          the opportunity to work with both small and large, specialised andcross-functional teams and developed a
          working style that is suited for a fast-paced, self-directed environment
        </Text>
        <Text as='h2'>Services</Text>
        <Stack>
          <Feature service={'Frontend Development'} text={'write here'} />
          <Feature service={'Backend Development'} text={'write here'} />
          <Feature service={'UI & UX Design'} text={'write here'} />
        </Stack>
      </Stack>
      <Flex>
        <Image rounded='md' alt='feature image' src={test.src} objectFit='cover' />
      </Flex>
    </SimpleGrid>
  );
}
