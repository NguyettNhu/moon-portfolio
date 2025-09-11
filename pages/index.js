import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer with 2 years of web development experience!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading 
            as="h2" 
            variant="page-title"
            bgGradient="linear(to-r, purple.500, cyan.400)"
            bgClip="text"
            color="transparent"
          >
            Nguyen Thi Nhu Nguyet
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              textAlign='center'
              src="/images/nhunguyet.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading 
          as="h3" 
          variant="section-title"
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
          color="transparent"
          w='fit-content'
        >
          Work
        </Heading>
        <Paragraph>
          Hi, I’m Nhu Nguyet, a student who loves web development. I’ve worked on several personal and team projects using React and Node.js. I enjoy building smooth, user-friendly web apps and I’m always curious about new technologies. I also like contributing to open-source projects to learn more from the community.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            bgGradient="linear(to-r, purple.500, cyan.400)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, purple.600, cyan.500)"
            }}
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading 
          as="h3" 
          variant="section-title"
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
          color="transparent"
          w='fit-content'
        >
          Bio
        </Heading>
        <BioSection>
          <BioYear>2023</BioYear>
          Started learning web development and programming fundamentals.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed Computer Science degree and began first web development projects.
        </BioSection>
        <BioSection>
          <BioYear>2025 - Present</BioYear>
          Started professional career as a software engineer, focusing on full-stack web development.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading 
          as="h3" 
          variant="section-title"
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
          color="transparent"
          w='fit-content'
        >
          I ♥
        </Heading>
        <Paragraph>
          Web Development,{' '}
          <Link href="https://github.com" target="_blank" color={'purple.300'}>
            Open Source
          </Link>
          , Learning New Technologies,{' '}
          <Link href="https://stackoverflow.com" target="_blank" color={'purple.300'}>
            Problem Solving
          </Link>
          , UI/UX Design, Machine Learning, Reading Tech Blogs
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading 
          as="h3" 
          variant="section-title"
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
          color="transparent"
          w='fit-content'
        >
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NguyettNhu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @nhunguyet
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nh%C6%B0-nguy%E1%BB%87t/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin />}
              >
                @nhunguyet
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/nhunguyttttne" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoFacebook />}
              >
                @nhunguyet
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/_nguytdeyy_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @nhunguyet
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={4}> 
          <GridItem
            href="https://github.com/NguyettNhu"
            title="GitHub Portfolio"
            thumbnail={thumbYouTube}
          >
            My open-source projects and contributions
          </GridItem>
          <GridItem
            href="https://linkedin.com/in/nhunguyet"
            title="LinkedIn Profile"
            thumbnail={thumbInkdrop}
          >
            Professional experience and achievements
          </GridItem>
        </SimpleGrid>

        <Heading 
          as="h3" 
          variant="section-title"
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
          color="transparent"
          w='fit-content'
        >
          Newsletter
        </Heading>
        <p>
          Stay updated with my latest projects, tech insights, and web development
          tutorials. Weekly updates on coding challenges and solutions.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:https://mail.google.com/mail/u/0/#inbox"
            scroll={false}
            leftIcon={<EmailIcon />}
            bgGradient="linear(to-r, purple.500, cyan.400)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, purple.600, cyan.500)"
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
