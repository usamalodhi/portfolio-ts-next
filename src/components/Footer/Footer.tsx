import { Flex, Box, Link, List, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FooterProps, SocialProps } from './FooterInterface';
import Github from '/public/social/github.svg';
import LinkedIn from '/public/social/linkedin.svg';

const FooterText = ({ text }: FooterProps) => {
  return (
    <Box>
      <Text fontWeight='bold'>{text}</Text>
    </Box>
  );
};

const SocialLinks = ({ name, linkTo, image }: SocialProps) => {
  return (
    <ListItem textAlign='center'>
      <Link href={linkTo} isExternal>
        <Image src={image} alt={name} width={30} height={30} />
      </Link>
    </ListItem>
  );
};

export function Footer() {
  return (
    <Flex as='footer' layerStyle='header_footer' direction={{ base: 'column', lg: 'row' }}>
      <FooterText text='© 2022 Usama Lodhi' />
      <List display='flex' listStyleType='none' paddingRight={{ base: '0px', lg: '24px' }}>
        <SocialLinks image={Github} name='Github' linkTo='https://www.google.com/' />
        <SocialLinks image={LinkedIn} name='LinkedIn' linkTo='https://www.google.com/' />
      </List>
    </Flex>
  );
}
