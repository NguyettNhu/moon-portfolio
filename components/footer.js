import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
      <Box 
        bg="blackAlpha.500" 
        px={3} 
        py={1} 
        borderRadius="md" 
        display="inline-block"
      >
        &copy; {new Date().getFullYear()} Nguyen Thi Nhu Nguyet. All Rights Reserved.
      </Box>
    </Box>
  )
}

export default Footer
