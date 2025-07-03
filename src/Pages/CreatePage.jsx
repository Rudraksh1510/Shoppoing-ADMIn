import { Box, Container, Heading, VStack, Input,Button } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () =>{
    console.log(newProduct);
  }
  return (
    <Box>
      <Container maxW="container.sm">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8}>
            Create New Product
          </Heading>
          <Box w="full" p={6} rounded="lg" shadow="md">
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                type="number"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Button colorScheme={"blue"}
              onClick={handleAddProduct} w='xs' bg={"#2196F3"} color={"white"}>Add Product</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CreatePage;
