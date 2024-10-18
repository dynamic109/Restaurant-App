"use client";
import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import AddToCart from "./AddToCart";
import ProductsData from "@/app/data.json";

export default function ProductFlex({
  handleClick,
  orderAmount,
  isOrderActive,
  setIsOrderActive,
  Increment,
  Decrement,
}: any) {
  return (
    <Flex
      wrap={"wrap"}
      gap={"20px"}
      justifyContent={{ base: "center", md: "flex-start" }}
      textAlign={"left"}
      direction={{ base: "column", md: "row" }}
    >
      {ProductsData.map((data: any, index: number) => {
        const isClickedProduct = isOrderActive === data.name;
        return (
          <Flex
            key={index}
            direction={{ base: "column", sm: "column" }}
            width={{ base: "100%", sm: "60%", md: "35%", lg: "20%" }}
            bg={"transparent"}
          >
            <Box
              position="relative"
              bg="gray.200"
              width="100%"
              height="150px"
              borderRadius={"8px"}
              backgroundImage={`url(assets/${data.image.mobile}.jpg)`}
              bgPosition={"center"}
              backgroundSize="cover"
              border={isClickedProduct ? "2px solid hsl(14, 86%, 42%)" : "none"}
            >
              <AddToCart
                isOrderActive={isOrderActive}
                setIsOrderActive={setIsOrderActive}
                handleClick={handleClick}
                ProductID={data.name}
                isClickedProduct={isClickedProduct}
                orderAmount={orderAmount}
                Increment={Increment}
                Decrement={Decrement}
              />
            </Box>
            <Stack mt={"25px"} lineHeight={"8px"} fontWeight={"500"}>
              textAlign={"left"} fontWeight={"600"}
              <Heading
                fontSize="10px"
                fontWeight={"500"}
                color={"hsl(7, 20%, 60%)"}
              >
                {data.category}
              </Heading>
              <Text fontSize="12px" fontWeight={"600"}>
                {data.name}
              </Text>
              <Text fontSize="13px" color={"hsl(14, 86%, 42%)"}>
                ${data.price}
              </Text>
            </Stack>
          </Flex>
        );
      })}
    </Flex>
  );
}
