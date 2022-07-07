import type { NextPage } from 'next';
import { HeadComponent } from '../src/components/HeadComponent/HeadComponent';
import { AboutMe } from '../src/components/AboutMe/AboutMe';

const About: NextPage = () => {
  return (
    <>
      <HeadComponent contentTitle='Usama Lodhi | Front End Web Developer' contentDescription='About Me' />
      <AboutMe />
    </>
  );
};

export default About;
