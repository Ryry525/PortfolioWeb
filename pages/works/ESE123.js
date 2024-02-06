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
    <Layout title="Multi-function Variable Digital Clock">
      <Container>
        <Title>
          Adventuregame <Badge>2022</Badge>
        </Title>
        <P>
        Developed a digital clock using an ATMEGA4809 microcontroller, programmed in C++, and integrated it into a PCB with versatile settings. It supports both 12-hour and 24-hour time display modes in real-time and functions as a timer/counter with four 7-segment displays. Additionally, it doubles as a battery charger for external devices.
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
            <span>Windows/MacOS/Linux</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/ESE123.png" alt="ESE123" />
      </Container>
    </Layout>
  )
  
  export default Work
  