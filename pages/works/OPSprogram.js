import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OPS Program">
    <Container>
      <Title>
        IEEE OPSProgram <Badge>2022</Badge>
      </Title>
      <P>
        A workshop hosted by the IEEE of Stony Brrok to teach aspiring engineers
        the fundamentals of electrical, computer, and software engineering
        through guided lectures and hands-on projects using an Arduino Nano.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Ryry525/Ops_program" target="_blank" rel="noopener noreferrer">
            https://github.com/Ryry525/Ops_program <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/OPSLogo.png" alt="OPSLOGO" />
    </Container>
  </Layout>
)

export default Work
