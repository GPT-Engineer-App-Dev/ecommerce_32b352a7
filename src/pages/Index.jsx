import { Box, Image, Text, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  // Product details
  const product = {
    title: "Minimalist Watch",
    price: "$250.00",
    description: "A sleek and modern watch that complements any outfit. Features a minimalist design, stainless steel casing, and a durable leather strap.",
    imageUrl: "https://images.unsplash.com/photo-1607299008952-7179a3f826f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2F0Y2h8ZW58MHx8fHwxNzEyMzgzNjMzfDA&ixlib=rb-4.0.3&q=80&w=1080", // This will be replaced by an actual image URL
  };

  return (
    <Box maxW="container.md" mx="auto" p={8}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Box flexShrink={0}>
          <Image borderRadius="md" src={product.imageUrl} alt={product.title} boxSize="300px" objectFit="cover" />
        </Box>
        <Stack spacing={5} flex={1} px={{ base: 0, md: 8 }}>
          <Heading as="h1" size="xl">
            {product.title}
          </Heading>
          <Text fontWeight="bold" color="green.500" fontSize="2xl">
            {product.price}
          </Text>
          <Text color="gray.600">{product.description}</Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="blue" size="lg" boxShadow="sm" _hover={{ boxShadow: "md" }} _active={{ boxShadow: "lg" }}>
            Add to Cart
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
