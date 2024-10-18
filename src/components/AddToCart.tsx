import { Button, Flex } from "@chakra-ui/react";
import CartIcon from "@/app/assets/icon-add-to-cart.svg";
import Image from "next/image";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function AddToCart({
  isClickedProduct,
  handleClick,
  ProductID,
  orderAmount,
  Increment,
  Decrement,
}: any) {
  return (
    <Flex
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
      <Button
        display={isClickedProduct ? "flex" : "none"}
        id={ProductID}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"5px"}
        fontWeight={"600"}
        fontSize={{ base: "12px" }}
        height={"100%"}
        width={"100%"}
        bg={"hsl(14, 86%, 42%)"}
        padding={{ base: "7px 5px", md: "12px 7px" }}
        borderRadius={"full"}
        border={"1px solid hsl(7, 20%, 60%)"}
        colorScheme="white"
        color={"white"}
      >
        <MinusIcon
          boxSize={4}
          border={"1px solid white"}
          p={"2px"}
          borderRadius={"50%"}
          _hover={{
            background: "white",
            color: "hsl(14, 86%, 42%)",
          }}
          onClick={() => Decrement(ProductID)}
        />

        {typeof orderAmount[ProductID] === "number"
          ? orderAmount[ProductID]
          : 0}
        <AddIcon
          id={ProductID}
          boxSize={4}
          border={"1px solid white"}
          p={"2px"}
          borderRadius={"50%"}
          _hover={{
            background: "white",
            color: "hsl(14, 86%, 42%)",
          }}
          onClick={() => {
            Increment(ProductID);
          }}
        />
      </Button>
    </Flex>
  );
}
