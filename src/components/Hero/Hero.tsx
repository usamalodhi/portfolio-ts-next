import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import { HeroProps } from './HeroInterface';

const HeroText = ({ heading, headingSpan, subHeading }: HeroProps) => {
  return (
    <>
      <Text as='h1'>
        {heading} <br />
        <Text as={'span'}>{headingSpan}</Text>
      </Text>
      <Text as='h2'>{subHeading}</Text>
    </>
  );
};

export function Hero() {
  return (
    <Flex layerStyle='Hero'>
      <HeroText
        heading={`Hi there, I'm Usama`}
        headingSpan={`I'm a Frontend Developer`}
        subHeading='I love building responsive web applications that are user-friendly, simple and delightful'
      />
      <Button>View Projects</Button>
    </Flex>
  );
}
