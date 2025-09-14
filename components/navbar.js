import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'cyan.200' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}


const Navbar = props => {
  const { path } = props

  const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
  ))

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
        
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <div style={{ flex: 1 }} />

          <LinkItem
            target="_blank"
            href="https://github.com/NguyettNhu"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)">
               
                <MenuItem bg='transparent' as={MenuLink} href="/works">
                  Works
                </MenuItem>
               
                <MenuItem bg='transparent' as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                
                <MenuItem
                  bg='transparent'
                  as={Link}
                  href="https://github.com/NguyettNhu"
                  target='_blank'
                  style={{ gap: 4 }}
                >
                  <IoLogoGithub  />

                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box> 
      </Container>
    </Box>
  )
}

export default Navbar
