import { Flex, Text } from "@chakra-ui/react";
import CartIcon from "../app/Assets/icon-add-to-cart.svg";
import Image from "next/image";

export default function AddToCart() {
  return (
    <Flex
      direction={"row"}
      gap={"auto"}
      position="absolute"
      bottom={{ base: "-13px", md: "-20px" }}
      left="50%"
      transform="translateX(-50%)"
      width={{ base: "90px", md: "150px" }}
      height={{ base: "26px", md: "40px" }}
      border={"1px solid red"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={{ base: "5px 10px", md: "10px 25px" }}
      borderRadius={"full"}
    >
      <Image src={CartIcon} width={"18"} alt="Cart Icon" />
      <Text fontSize={{ base: "8px", md: "14px" }} fontWeight={"600"}>
        Add to Cart
      </Text>
    </Flex>
  );
}
