import { Button, Flex, Text } from "@chakra-ui/react";
import CartIcon from "../app/assets/icon-add-to-cart.svg";
import Image from "next/image";

export default function AddToCart({
  isClickedProduct,
  handleClick,
  ProductID,
}: any) {
  return (
    <Flex
      //   display={isOrderActive ? "none" : "flex"}
      direction={"row"}
      position="absolute"
      bottom={{ base: "-13px", md: "-17px" }}
      left="50%"
      transform="translateX(-50%)"
      width={{ base: "90px", md: "100px" }}
      height={{ base: "26px", md: "30px" }}
      alignItems={"center"}
    >
      <Button
        display={isClickedProduct ? "none" : "flex"}
        id={ProductID}
        alignItems={"center"}
        gap={"5px"}
        fontWeight={"600"}
        fontSize={{ base: "8px", md: "10px" }}
        height={"100%"}
        width={"100%"}
        bg={"white"}
        padding={{ base: "7px 10px", md: "9px 13px" }}
        borderRadius={"full"}
        border={"1px solid hsl(7, 20%, 60%)"}
        colorScheme="gold"
        color={"black"}
        onClick={handleClick}
      >
        <Image src={CartIcon} width={"18"} alt="Cart Icon" />
        Add to Cart
      </Button>
    </Flex>
  );
}
