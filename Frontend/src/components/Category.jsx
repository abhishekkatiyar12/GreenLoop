import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Image, Text, SimpleGrid, useBreakpointValue, VStack, HStack } from '@chakra-ui/react';

const URL = 'https://greenloop-nw0w.onrender.com/api/v1/search/category';
const CATEGORIES_PER_PAGE = 10; // Set the limit for categories per page

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if more categories are available
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCategories = async (page) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(URL, {
        params: {
          page,
          limit: CATEGORIES_PER_PAGE
        }
      });

      // Append new categories to existing ones
      setCategories((prevCategories) => [...prevCategories, ...response.data.data]);

      // Check if there are more categories to load
      setHasMore(response.data.data.length === CATEGORIES_PER_PAGE);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment page to load more categories
  };

  const handleCategoryClick = (category) => {
    navigate(`/category-grid/category=${category}`);
  };

  return (
    <Box width="100%" overflowX="auto" p={4}>
      <Text fontSize="2xl" fontWeight="semibold" mb={6}>
        Explore Your Categories
      </Text>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4} overflowX="auto">
          {categories.map((category, index) => (
            <Box
              key={index}
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
              cursor="pointer"
              onClick={() => handleCategoryClick(category.category)}
              w="200px"
              textAlign="center"
            >
              <Image
                src={category.image}
                alt={category.category}
                boxSize="130px"
                objectFit="cover"
                w="100%"
                h="130px"
                borderRadius="md"
              />
              <Box p={4} bg="white">
                <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                  {category.category}
                </Text>
              </Box>
            </Box>
          ))}
        </HStack>
      </VStack>

      {hasMore && !loading && (
        <Button
          onClick={handleLoadMore}
          colorScheme="teal"
          size="md"
          variant="outline"
          mt={6}
          w="full"
          _hover={{ bg: 'teal.100' }}
        >
          Load More
        </Button>
      )}

      {loading && <Text mt={4}>Loading...</Text>}
    </Box>
  );
};

export default CategoryGrid;
