import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue
 } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Age from '../components/age'
const Page = () => {
  return (
    <Container>
      <Box 
      borderRadius="lg"  
      mb={6} 
      p={3}
      align="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
      >
        Hello, I&apos;m a <Age/> years old high school student from NYC!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ryan Lin
          </Heading>
          <Section delay={0.1}>
          <p>
            Senior year of highschool, attending{' '}<b>Midwood High School at Brooklyn College</b> {' '} (2019-2022)
          </p>
          </Section>
        </Box>
        <Box 
        flexShrink={0} 
        mt={{base:4, md: 0}} 
        ml={{md :6}} 
        textAlign="center"
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

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>Born in NYC, USA. 
        </BioSection>
        <BioSection>
          <BioYear>2005-2010</BioYear>Lived in FuZhou, China.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>Accepted into James Madison High School. 
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>Transferred into Midwood High School. 
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>TBD.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥️
        </Heading>
        <Paragraph>
        Videogames, Food, Music, Crypto Currency, Cars
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
