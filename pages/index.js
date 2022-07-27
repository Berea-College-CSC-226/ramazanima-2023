import { Link, Box, Text, Heading, Image, GridItem } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Grid } from '../components/Grid';
import { Experience } from '../components/Experience';
import Cursor from '../components/Cursor';

export default function Home() {
  return (
    <Box py="130px" maxWidth={490} mx="auto">
      <Cursor />
      <ConnectButton
        accountStatus="address"
        chainStatus="none"
        showBalance={false}
      />

      <Grid fluid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
        <GridItem colSpan={1}>
          <Box borderRadius="full" overflow="hidden">
            <Image
              borderRadius="full"
              width="full"
              src="/profile.png"
              alt="Bonhomme"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box>
            <Heading as="h1" size="lg">
              Maxime Bonhomme
            </Heading>
            <Text>Product-focused Fullstack Developer</Text>
            <Link
              opacity={0.5}
              href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
            >
              himlate.eth
            </Link>
          </Box>
        </GridItem>
      </Grid>
      <Box mb={14}>
        <Heading as="h2" size="md" mb={2}>
          About
        </Heading>
        <Text>
          GM, I'm Max. I enjoy building dynamic, creative products from start to
          finish. Focused on developing intuative experiences that constantly
          grow and improve based on user metrics. Always shipping.
        </Text>
      </Box>
      <Box mb={14}>
        <Heading as="h2" size="md" mb={10}>
          Work Experience
        </Heading>

        <Experience
          href="https://everpress.com/"
          side="2020 - 2022"
          title="Full Stack & Technical Lead – Everpress"
          desc="Led a team of 5 engineers to develop our creator tools and e-commerce
        app. Collaborated closely with the Head of Product to track our tactical
        objectives, improve technical directions and shipping frequency."
          stack="React • Redux • Symfony • AWS"
        />
        <Experience
          side="2016 – 2020"
          title="Front End Engineer – Freelance"
          desc="Worked with a range of large and small agencies, start-ups and individuals to build products. Clients included Marvel App, United Nations, Netflix, Dropbox Design."
          stack="React • Redux • Styled Components • Framer Motion"
        />
        <Experience
          href="https://neverbland.com/"
          side="2014 – 2016"
          title="Front End Engineer – NEVERBLAND"
          desc="Part of a tight-knit team of designers, developers and critical thinkers, I built MVP products and marketing experiences for start-ups."
          stack="React • Redux • CSSModules • Three.js"
        />

        <Heading as="h2" size="md" mt={14} mb={10}>
          Side Projects
        </Heading>

        <Experience
          image="/tamiko.svg"
          side="Ongoing"
          title="Tamiko"
          desc="Tamiko are non-fungible friends that live completely on-chain. You can hatch, feed, breed and evolve them."
          stack="Solidity • ERC721 • ERC1155 • Next.js"
        />
        <Experience
          href="https://kineticspectru.ms/"
          image="/kineticspectrum.png"
          side="Ongoing"
          title="Kinetic Spectrums"
          desc="Generative on-chain NFTs. A collection of dynamic, ever changing artworks."
          stack="Solidity • ERC721 • Next.js"
        />

        <Heading as="h2" size="md" mt={14} mb={10}>
          Links
        </Heading>

        <Experience
          side="Github"
          title="@maximebonhomme"
          href="https://github.com/maximebonhomme"
          mb={4}
        />
        <Experience
          side="Etherscan"
          title="himlate.eth"
          href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
          mb={4}
        />
        <Experience
          side="Foundation"
          title="@bonhomme"
          href="https://foundation.app/@bonhomme?tab=owned"
          mb={4}
        />
        <Experience
          side="Twitter"
          title="@pixel_arts"
          href="https://twitter.com/pixel_arts"
          mb={4}
        />
      </Box>
    </Box>
  );
}
