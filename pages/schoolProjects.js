import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from '../components/section'
import { SchoolWorkGridItem } from '../components/grid-item'

import thumbAdventuregame from '../public/images/work/thumbAdventuregame.png'

const schoolProjects = () => {
    return (
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            School Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
        <SchoolWorkGridItem id="adventuregame" title="JS web adventure game" thumbnail={thumbAdventuregame}>
            A simple web game made from JS; Part of THECODE: Javascript development program
        </SchoolWorkGridItem>
        </Section>
        </SimpleGrid>
    </Container>
    )
}

export default schoolProjects