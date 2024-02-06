import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import Age from '../components/age'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          align="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a <Age /> years old student from NYC!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ryan Lin
            </Heading>
            <Section delay={0.1}>
              <p>
                Computer Engineering Major, attending{' '}
                <b>SUNY Stony Brook University</b> (2022- Expected: 2026)
              </p>
            </Section>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
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
            <BioYear>2005</BioYear>Lived in FuZhou, China.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>Moved back to NYC.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>Accepted into James Madison High School.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>Transferred into Midwood High School.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>Graduated from Midwood High School
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>Attending Stony Brook University.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥️
          </Heading>
          <Paragraph>
            Videogames, Food, Cars, and Mechanical Keyboards
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Ryry525" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  colorScheme="red"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Ryry525
                </Button>
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ryan-lin-645367202/" 
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="red"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Ryan Lin
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
