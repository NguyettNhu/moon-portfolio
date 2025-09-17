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
  <Layout title="FreeCodeCamp Web Responsive Course">
    <Container>
      <Title>
        FreeCodeCamp Web Responsive Course <Badge color="cyan">2025-</Badge>
      </Title>
      <P>
        The FreeCodeCamp Responsive Web Design Certification course covers HTML, CSS, Flexbox, Grid, and Accessibility. It includes hands-on projects to build a strong foundation in web development.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" color="purple.300">
            https://www.freecodecamp.org/learn/2022/responsive-web-design/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IJ85kCdqWao?si=DQ_psWWjGWG7gxm_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
