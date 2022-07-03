import { Flex, Box, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HeaderLogoProps, HeaderNavProps } from './HeaderInterface';
import { NavBar } from './NavBar';

const Logo = ({ logo }: HeaderLogoProps) => {
  return (
    <Box>
      <Text fontWeight='bold'>{logo}</Text>
    </Box>
  );
};

export function Header() {
  return (
    <Flex as='header' layerStyle='header_footer' direction={{ base: 'column', lg: 'row' }}>
      <Logo logo='Usama Lodhi' />
      <NavBar />
    </Flex>
  );
}
