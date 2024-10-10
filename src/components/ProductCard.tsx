import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
("./");
import AddToCart from "./AddToCart";

export default function ProductCard() {
  return (
    <Flex justifyContent={"center"}>
      <Card
        direction={{ base: "column", sm: "column" }}
        variant="outline"
        width={"50%"}
      >
        <Box
          position="relative"
          bg="gray.200"
          width="100%"
          height="300px"
          border="2px solid black"
          backgroundImage={`url("https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60")`}
          bgPosition={"center"}
        >
          <AddToCart />
        </Box>
        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>
            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      {/* <Box
        position="relative"
        bg="gray.200"
        width="300px"
        height="300px"
        border="2px solid black"
      >
        <Box textAlign="center" p="4">
          Box Content
        </Box>

        <Image
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Image on Border"
          position="absolute"
          bottom="-40px"
          left="50%"
          transform="translateX(-50%)"
          width={"100px"}
          height={"80px"}
        />
      </Box> */}
    </Flex>
  );
}
