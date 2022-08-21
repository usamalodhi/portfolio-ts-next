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
const { motion } = require('framer-motion');

import { LiveLinkProps, CodeLinkProps, TagProps, ProjectDataProps } from './ProjectInterface';
import { BiLinkExternal } from 'react-icons/bi';

import projectImageOne from '../../../public/assets/nextproperty.jpg';
import projectImageTwo from '../../../public/assets/nextecommerce.jpg';
import projectImageThree from '../../../public/assets/4thurlestone.jpg';
import projectImageFour from '../../../public/assets/website.jpg';

const LiveLink = ({ liveLinkURL }: LiveLinkProps): React.ReactElement => {
  return (
    <>
      <Link
        as={motion.a}
        whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
        transition='0.05s linear'
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        gap='0.25em'
        color='brand.secondary'
        layerStyle='ButtonStyle'
        textStyle='ButtonStyle'
        isExternal
        href={liveLinkURL}
      >
        LIVE <BiLinkExternal />
      </Link>
    </>
  );
};

const CodeLink = ({ codeLinkURL }: CodeLinkProps): React.ReactElement => {
  return (
    <Link
      as={motion.a}
      whileHover={{ color: '#000000', backgroundColor: '#FFFAFA' }}
      transition='0.05s linear'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      gap='0.25em'
      color='brand.secondary'
      layerStyle='ButtonStyle'
      textStyle='ButtonStyle'
      isExternal
      href={codeLinkURL}
    >
      CODE <BiLinkExternal />
    </Link>
  );
};

const Tag = ({ tagText }: TagProps): React.ReactElement => {
  return (
    <Box backgroundColor='brand.secondary' color='brand.primary' padding='8px 16px'>
      <Text fontWeight='bold' as='p'>
        {tagText}
      </Text>
    </Box>
  );
};

const ProjectData = ({
  projectTitle,
  projectImage,
  projectImageAlt,
  projectDescription,
  tags,
  liveURL,
  codeURL,
}: ProjectDataProps) => {
  return (
    <>
      <Flex pl='24px' pr='24px'>
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
      <Stack padding='16px 24px'>
        <Box pb='8px' as={'header'}>
          <Text as='h2'>{projectTitle}</Text>
        </Box>

        <Stack direction={'column'} divider={<StackDivider borderColor='black' />}>
          <HStack pb='8px'>
            <Text as='p' textAlign='justify' wordBreak='break-word'>
              {projectDescription}
            </Text>
          </HStack>
          <List pt='8px' pb='8px'>
            <ListItem>
              <Flex gap='0.25em' wrap='wrap'>
                {tags.map((tag, index) => {
                  return <Tag key={index} tagText={tag} />;
                })}
              </Flex>
            </ListItem>
          </List>
        </Stack>

        <Flex gap='0.25em'>
          <LiveLink liveLinkURL={liveURL} />
          <CodeLink codeLinkURL={codeURL} />
        </Flex>
      </Stack>
    </>
  );
};

export function Project() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py='16px'>
      {/* ProjectOne: nextproperty */}
      <ProjectData
        projectTitle='Next Property'
        /* @ts-ignore */
        projectImage={projectImageOne}
        projectImageAlt='Next Property'
        projectDescription='A Next JS Real Estate Application fetching property data in the UAE for rental homes and for-sale properties using a third party API. Next JS best practices including satic generation and server-side rendering have been used. The application has a great UX with fast loading, advanced property filtering and a unique property details page for each property with an image carousel. A modern UI is made using Chakra UI.'
        tags={['Next JS', 'TypeScript', 'API', 'Chakra UI']}
        liveURL='https://next-property.vercel.app/'
        codeURL='https://github.com/usamalodhi/next-property'
      />

      {/* ProjectThree: nextecommerce */}
      <ProjectData
        projectTitle='Next Ecommerce'
        /* @ts-ignore */
        projectImage={projectImageTwo}
        projectImageAlt='Next Ecommerce'
        projectDescription='Technology product e-commerce application built using a Next JS frontend and Sanity backend. This application includes modern design and animations with the ability to add and edit products on the go and an advanced shopping cart. The state management of the application is handled using React Context API and Next JS best practices have been used, including file-based routing and data using server-side rendering and static generation.'
        tags={['Next JS', 'JavaScript', 'Sanity']}
        liveURL='https://next-ecommerce-gold-five.vercel.app/'
        codeURL='https://github.com/usamalodhi/next-ecommerce'
      />

      {/* ProjectTwo: 4thurlestone */}
      <ProjectData
        projectTitle='4 Thurlestone'
        /* @ts-ignore */
        projectImage={projectImageThree}
        projectImageAlt='4 Thurlestone Restaurant Website'
        projectDescription='The chef and owner of 4 Thurlestone Cafe and Restaurant approached me to design and build a website for his restaurant.
        Additionally, he sought my consultation on marketing strategies using Trip Advisor and other platforms businesses in the service
        industry capitalise on. I built him a website on the JAMstack using Gatsby GraphQL and the Contentful CMS to allow for easy editing of
        data through updating Contentful Models.'
        tags={['Gatsby', 'Chakra UI', 'Framer Motion', 'CMS']}
        liveURL='https://fourthurlestonecafe.netlify.app/'
        codeURL='https://github.com/usamalodhi/4Thurlestone-Restaurant-Contentful-CMS'
      />

      {/* ProjectFour: website */}
      <ProjectData
        projectTitle='Career Changer Portfolio'
        /* @ts-ignore */
        projectImage={projectImageFour}
        projectImageAlt='Career Changer Portfolio'
        projectDescription='One of the first obstacles an aspiring web developer faces is building a portfolio site, which can distract them from working on their projects. My portfolio website is built using Next JS, Typescript and Chakra UI which come together to make a portfolio highly customisable and easy for someone to clone and use as is or modify for their needs. I have created a template based of my portfolio specificially for a career changer or graduate to get things going'
        tags={['Next JS', 'TypeScript', 'Chakra UI', 'Framer Motion']}
        liveURL='https://career-changer-portfolio.vercel.app/'
        codeURL='https://github.com/usamalodhi/career-changer-portfolio'
      />
    </SimpleGrid>
  );
}
