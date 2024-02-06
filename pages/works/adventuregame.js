import { 
  Container, 
  Badge, 
  Link, 
  List, 
  ListItem 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Adventure Game">
    <Container>
      <Title>
        Adventuregame <Badge>2021-</Badge>
      </Title>
      <P>
        A webgame created using JS, HTML, and CSS. Part of: TheCode: Javescript
        devleopment program
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ryry525.github.io/javascript-adventure-game/" target="_blank" rel="noopener noreferrer">
            https://ryry525.github.io/javascript-adventure-game/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/Adventuregame.png" alt="Adventuregame" />
    </Container>
  </Layout>
)

export default Work
