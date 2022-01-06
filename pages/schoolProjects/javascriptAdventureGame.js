import { Container, Badge, Link, List, Listitem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/schoolProjects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const schoolProject = () => (
    <Layout title="Adventuregame">
        <Container>
            <Title>
                Javascript Adventure Game  <Badge>2021-</Badge>
            </Title>
            <P>
                A web game created using Javascript. Part of the code:javascript development program.
            </P>
            <List ml={4} my={4}>
                <Listitem>
                    <Meta>Website</Meta>
                    <Link href="https://ryry525.github.io/javascript-adventure-game/">
                        <ExternalLinkIcon px={2} />
                    </Link>
                </Listitem>
            </List>

            <WorkImage src="/images/work/Adventuregame.png" alt="Adventuregame" />
        </Container>
    </Layout>
)

export default schoolProject