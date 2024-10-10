import ProductCard from "@/components/ProductCard";
import { Flex, Heading } from "@chakra-ui/react";

export default function () {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"hsl(20, 50%, 98%)"}
      p={"50px"}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Flex
        direction={"column"}
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={"30px"}
      >
        <Heading>Desserts</Heading>
        <ProductCard />
      </Flex>

      <Flex>
        <Heading>Cart Items here!!!</Heading>
      </Flex>
    </Flex>
  );
}
