import { Container, Heading, SimpleGrid, Divider} from "@chakra-ui/react"
import Section from '../components/section'
import { schoolWorkGridItem } from "../components/layouts/grid-item"

import thumbAdventuregame from '../public/images/work/thumbAdventuregame.png'

const schoolWork = () => {
    return (
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            School Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
        <schoolWorkGridItem id="adventuregame" title="JS web adventure game" thumbnail={thumbAdventuregame}>
            A simple web game made from JS; Part of THECODE: Javascript development program
        </schoolWorkGridItem>
        </Section>
        </SimpleGrid>
    </Container>
    )
}

export default schoolWork