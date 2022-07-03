import { List, ListItem, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { HeaderNavProps } from './HeaderInterface';

export const NavLink = ({ linkTo, name }: HeaderNavProps) => {
  return (
    <ListItem textAlign='center'>
      <Link href={linkTo}>{name}</Link>
    </ListItem>
  );
};

export function NavBar() {
  return (
    <Box as='nav'>
      <List
        display={{ base: 'block', sm: 'flex' }}
        listStyleType='none'
        w={{ base: '100%', sm: 'min-content' }}
        paddingRight={{ base: '0px', lg: '24px' }}
        paddingBottom={{ base: '24px', lg: '0px' }}
      >
        <NavLink linkTo='/' name='Home' />
        <NavLink linkTo='/projects' name='Projects' />
        <NavLink linkTo='/about' name='About' />
      </List>
    </Box>
  );
}
