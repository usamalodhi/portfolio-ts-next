import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  HStack,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';

//import images for projects to pass via props
import test from '../../../public/assets/website.jpg';
import { LiveLinkProps, CodeLinkProps, TagProps, ProjectDataProps } from './ProjectInterface';

const LiveLink = ({ liveLinkURL }: LiveLinkProps): React.ReactElement => {
  return (
    <>
      <Box>
        <Link textStyle='ProjectLinks' layerStyle='ProjectLinks' href={liveLinkURL} isExternal>
          LIVE
        </Link>
      </Box>
    </>
  );
};

const CodeLink = ({ codeLinkURL }: CodeLinkProps): React.ReactElement => {
  return (
    <>
      <Box>
        <Link textStyle='ProjectLinks' layerStyle='ProjectLinks' href={codeLinkURL} isExternal>
          CODE
        </Link>
      </Box>
    </>
  );
};

const Tag = ({ tagText }: TagProps): React.ReactElement => {
  return <Text as='p'>{tagText}</Text>;
};

const ProjectData = ({
  projectImage,
  projectImageAlt,
  projectDescription,
  tags,
  liveURL,
  codeURL,
}: ProjectDataProps) => {
  return (
    <>
      <Flex>
        <Image
          rounded='base'
          alt={projectImageAlt}
          src={projectImage.src}
          fit='cover'
          align='center'
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Flex>
      <Stack>
        <Box as={'header'}>
          <Text as='h2'>Project Title</Text>
        </Box>

        <Stack direction={'column'} divider={<StackDivider borderColor='black' />}>
          <HStack>
            <Text as='p'>{projectDescription}</Text>
          </HStack>
          <List>
            <ListItem>
              <Flex>
                {tags.map((tag, index) => {
                  return <Tag key={index} tagText={tag} />;
                })}
              </Flex>
            </ListItem>
          </List>
        </Stack>

        <Flex padding='16px 24px' gap='1em'>
          <LiveLink liveLinkURL={liveURL} />
          <CodeLink codeLinkURL={codeURL} />
        </Flex>
      </Stack>
    </>
  );
};

export function Project() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
      <ProjectData
        /* @ts-ignore */
        projectImage={test}
        projectImageAlt='test'
        projectDescription='write project description here'
        tags={['JavaScript', 'TypeScript']}
        liveURL='https://chakra-ui.com'
        codeURL='https://chakra-ui.com'
      />
    </SimpleGrid>
  );
}
