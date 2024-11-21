import React from 'react';
import { Box, Flex, AspectRatio } from '@chakra-ui/react';
import HARDDISK from './images/RAM.jpeg.jpg';
import RAM from './images/pendrive.jpg';
import PENDRIVE from './images/HDD.jpg';

function Scroll() {
  return (
    <Box
      width="100vw" // Full width of the viewport
      bg="gray.100"
      py={6}
      px={{ base: 4, md: 8 }}
      boxShadow="md"
    >
      <Flex
        justify="space-between" // Distribute images evenly
        align="center"
        gap={6} // Add spacing between images
      >
        {/* Image 1 */}
        <AspectRatio
          ratio={4 / 3} // Maintain consistent aspect ratio
          flex="1" // Ensure all images occupy equal space
          maxW="30%" // Ensure each image adjusts responsively
        >
          <Box
            as="img"
            src={HARDDISK}
            alt="Hard Disk"
            borderRadius="lg"
            objectFit="cover"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
          />
        </AspectRatio>

        {/* Image 2 */}
        <AspectRatio
          ratio={4 / 3}
          flex="1"
          maxW="30%"
        >
          <Box
            as="img"
            src={RAM}
            alt="RAM"
            borderRadius="lg"
            objectFit="cover"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
          />
        </AspectRatio>

        {/* Image 3 */}
        <AspectRatio
          ratio={4 / 3}
          flex="1"
          maxW="30%"
        >
          <Box
            as="img"
            src={PENDRIVE}
            alt="Pen Drive"
            borderRadius="lg"
            objectFit="cover"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
          />
        </AspectRatio>
      </Flex>
    </Box>
  );
}

export default Scroll;
