import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { SchoolWorkGridItem } from '../components/grid-item'

import thumbAdventuregame from '../public/images/work/Adventuregame.png'

const schoolProjects = () => (
  <Layout title="schoolProjects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        School Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <SchoolWorkGridItem
            id="adventuregame"
            title="Adventuregame"
            thumbnail={thumbAdventuregame}
          >
            A simple web game made from JS; Part of THECODE: Javascript
            development program
          </SchoolWorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default schoolProjects
