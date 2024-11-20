import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import HARDDISK from './images/RAM.jpeg.jpg';
import RAM from './images/pendrive.jpg';
import PENDRIVE from './images/HDD.jpg';

function Scroll() {
  return (
    <Box
      className="scroll-container"
      overflowX="auto"
      whiteSpace="nowrap"
      width="100%"
      bg="gray.100"
      p={4}
      boxShadow="md"
    >
      <Flex gap={4} justify="start">
        <Image
          src={HARDDISK}
          alt="Image 1"
          boxSize={{ base: '200px', md: '300px' }}
          borderRadius="lg"
          objectFit="cover"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        />
        <Image
          src={RAM}
          alt="Image 2"
          boxSize={{ base: '200px', md: '300px' }}
          borderRadius="lg"
          objectFit="cover"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        />
        <Image
          src={PENDRIVE}
          alt="Image 3"
          boxSize={{ base: '200px', md: '300px' }}
          borderRadius="lg"
          objectFit="cover"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        />
      </Flex>
    </Box>
  );
}

export default Scroll;
