import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="F8 Edu ExpressJS Course">
    <Container>
      <Title>
        F8 Edu ExpressJS Course <Badge color="cyan">2025-</Badge>
      </Title>
      <P>
        The F8 Edu ExpressJS Course covers the fundamentals of ExpressJS, including routing, middleware, and building RESTful APIs. It includes hands-on projects to build a strong foundation in backend development.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fullstack.edu.vn/learning/nodejs" color="purple.300">
            https://fullstack.edu.vn/learning/nodejs<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Oe421EPjeBE?si=FbhuIrXuCjS4dfjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
