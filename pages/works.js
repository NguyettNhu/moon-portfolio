import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Box, Image, Text } from '@chakra-ui/react';

const Works = () => (
  <Layout title="Projects & Learning">
    <Container>
      <Heading
        as="h3"
        fontSize={20}
        mb={4}
        bgGradient="linear(to-r, purple.400, purple.200)"
        bgClip="text"
        w="fit-content"
      >
        Projects & Learning
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="blog"
            title="Bun's Blog"
            thumbnail={"/images/works/blogs-img.png"}
          >
            My personal blog about web development and programming
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="portfolio"
            title="Bun's Portfolio"
            thumbnail={"/images/works/portfolio.png"}
          >
            My personal portfolio website
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading
          as="h3"
          fontSize={20}
          mb={4}
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
        >
          Courses & Certifications
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="freecodecamp_fe"
            title="FreeCodeCamp Web Responsive Course"
            thumbnail={"https://yt3.googleusercontent.com/_GxV-5nnBhGDO2bDgFtrpVypm6z8AC_tFg7W0zSsS9AGlw5xVg8zKLQ5tvTk6BwU1LzmWJb4YA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}
          >
            The FreeCodeCamp Responsive Web Design Certification course.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="f8_expressjs"
            title="F8 Edu ExpressJS Course"
            thumbnail={"https://files.fullstack.edu.vn/f8-prod/courses/6.png"}
          >
            The F8 Edu ExpressJS Course.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading
          as="h3"
          fontSize={20}
          mb={4}
          bgGradient="linear(to-r, purple.400, purple.200)"
          bgClip="text"
          w="fit-content"
        >
          My CV
        </Heading>
      </Section>

      <SimpleGrid>

      <Section>
        <Box
          as="a"
          href="/files/cv.pdf"
          download
          cursor="pointer"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
          transition="all 0.2s ease-in-out"
        >
          <Image src="/images/works/CV.png" alt="My CV" w="100%" />
          <Text p={3} fontWeight="medium" textAlign="center">
            Nguyen Thi Nhu Nguyet – Software Engineer
          </Text>
        </Box>
      </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
