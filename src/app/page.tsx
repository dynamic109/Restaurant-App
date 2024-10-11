import Cart from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { Flex, Heading } from "@chakra-ui/react";

export default function () {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"hsl(20, 50%, 98%)"}
      p={{base: "50px 40px", md:"50px"}}
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

      <Flex w={{ base: "100%", md: "100%", lg: "40%" }}>
        <Cart />
      </Flex>
    </Flex>
  );
}
