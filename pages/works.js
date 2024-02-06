import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbAdventuregame from '../public/images/works/Adventuregame.png'
import thumbOPSprogram from '../public/images/works/OPSLogo.png'
import thumbESE123 from '../public/images/works/ESE123.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        School Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="adventuregame"
            title="Adventure Game"
            thumbnail={thumbAdventuregame}
          >
            A simple web game made from JS; Part of THECODE: Javascript
            development program
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="OPSprogram"
            title="OPS Program"
            thumbnail={thumbOPSprogram}
          >
            A project made from Arduio Nano
          </WorkGridItem>
        </Section>
        <WorkGridItem 
          id="ESE123"
          title="Multi-function Variable Digital Clock"
          thumbnail={thumbESE123}
        >
        Developed a digital clock using an ATMEGA4809 microcontroller
        </WorkGridItem>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Personal Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}></Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
