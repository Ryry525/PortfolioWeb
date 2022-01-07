import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import dynamic from 'next/dynamic'
import Loader from '../voxel-bear-loader'

const LazyBear = dynamic(() => import('../voxel-bear'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ryan Shilling" />
        <meta name="author" content="Ryan Lin" />
        <meta property="og:site_name" content="Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/pfp.jpg" />
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\
        
        <title>WIP: Ryan Lin</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyBear />
        {children}
      </Container>
    </Box>
  )
}

export default Main