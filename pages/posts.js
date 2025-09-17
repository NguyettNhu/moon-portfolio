import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const postsData = [
  {
    sectionDelay: 0.1,
    items: [
      {
        title: "How internet works in 5 minutes",
        thumbnail: "/images/contents/youtube-how-to-build-portfolio.jpg",
        href: "https://buns-blog.vercel.app/blog/cach-hoat-dong-internet-trong-5-phut"
      },
      {
        title: "Morden web development workflow",
        thumbnail: "/images/contents/youtube-how-to-use-inkdrop.jpg",
        href: "https://buns-blog.vercel.app/blog/cach-thuc-deploy"
      },
      {
        title: "REST API vs GraphQL: A Comparison",
        thumbnail: "https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2024%2F08%2Fgraphql-la-gi-GraphQL-vs-REST.jpg&w=640&q=75",
        href: "https://buns-blog.vercel.app/blog/rest-api-vs-graphql"
      },
      {
        title: "Solid Principles in OOP",
        thumbnail: "https://i.postimg.cc/zB23GX8D/Solid-principles.png",
        href: "https://buns-blog.vercel.app/blog/solid-principles-oop"
      }
    ]
  },
  {
    sectionDelay: 0.3,
    items: [
      {
        title: "NestJS vs ExpressJS: Which One Should You Choose?",
        thumbnail: "https://s3-eu-west-1.amazonaws.com/blog.forestadmin.com/2022/07/NestJS-vs-ExpressJS@2x.png",
        href: "https://buns-blog.vercel.app/blog/nestjs-vs-expressjs"
      },
      {
        title: "Next.js vs React.js: Choosing the Right Framework for Your Project",
        thumbnail: "https://studio.uxpincdn.com/studio/wp-content/uploads/2024/04/next-js-vs-react-1024x512.png",
        href: "https://buns-blog.vercel.app/blog/nextjs-vs-reactjs"
      }
    ]
  },
  {
    sectionDelay: 0.5,
    items: [
      {
        title: "React Server Components vs API Routes: When to Use Each?",
        thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQEkVabllY7JrQ/article-cover_image-shrink_720_1280/B4DZbZaZkvIEAI-/0/1747404304811?e=2147483647&v=beta&t=Npiu8gX8hb1Wr7v7PWaa-w4QEyH8sujANXS_LoLjy4Y",
        href: "https://buns-blog.vercel.app/blog/react-server-components"
      },
      {
        title: "Tailwind CSS: A Modern CSS Framework for Rapid UI Development",
        thumbnail: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi5vke8fu8g8659hjvv22.jpeg",
        href: "https://buns-blog.vercel.app/blog/tailwind-css-modern"
      }
    ]
  }
]


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} bgGradient="linear(to-r, purple.400, purple.200)"
        bgClip="text"
        w='fit-content'>
        Popular Posts
      </Heading>

      {postsData.map((section, idx) => (
        <Section delay={section.sectionDelay} key={idx}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {section.items.map((item, i) => (
              <GridItem
                key={i}
                title={item.title}
                thumbnail={item.thumbnail}
                href={item.href}
              />
            ))}
          </SimpleGrid>
        </Section>
      ))}
    </Container>
  </Layout>
)

export default Posts
