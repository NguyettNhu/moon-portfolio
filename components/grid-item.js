import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" h="full" >
    <LinkBox
      as="article"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      h="full"
      textAlign="center"
      borderWidth="0px"
      borderRadius="md"
      p={3}
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        flex="1"
      />

      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>

      {/* flexGrow=1 để phần text chiếm hết chiều cao còn lại, giúp các khối cao bằng nhau */}
      <Text fontSize={14} mt={1} flexGrow={1}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)


export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20} fontWeight={600}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
