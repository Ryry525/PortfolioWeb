import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue
 } from '@chakra-ui/react'
 import Section from '../components/section'
 import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a high school student from NYC!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ryan Lin
          </Heading>
          <p>Senior year of highschool, attending{' '}<b>MidWood High school at Brooklyn College</b></p>
        </Box>
        <Box 
        flexShrink={0} 
        mt={{base:4, md: 0}} 
        ml={{md :6}} 
        align="center"
        >
            <Image 
            borderColors="whiteAlpha.800"
            borderWidth={2} 
            borderStyle="solid"
            maxWidth="100px" 
            display="inline-block" 
            borderRadius="full" 
            src="/images/pfp.jpg"
            alt="Profile Image"
            />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>Paragraph
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
