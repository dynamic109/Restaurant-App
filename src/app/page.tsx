"use client";
import Cart from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function () {
  const [isOrderActive, setIsOrderActive] = useState(null);
  const [orderAmounts, setOrderAmounts] = useState<{ [key: string]: number }>(
    {}
  );

  const handleClick = (event: any) => {
    const clickedProduct = event.currentTarget.id;
    setIsOrderActive((prevOrder) =>
      prevOrder === clickedProduct ? null : clickedProduct
    );
  };

  const Increment = (id: string) => {
    setOrderAmounts((prevState) => {
      const newAmount = (prevState[id] || 0) + 1;
      console.log(newAmount, id);
      return {
        ...prevState,
        [id]: newAmount,
      };
    });
  };

  const Decrement = (id: string) => {
    setOrderAmounts((prevState) => {
      const newAmount = Math.max((prevState[id] || 0) - 1, 0);
      console.log(newAmount, id);
      return {
        ...prevState,
        [id]: newAmount,
      };
    });
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"hsl(20, 50%, 98%)"}
      p={{ base: "50px 40px", md: "50px" }}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Flex
        direction={"column"}
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={"30px"}
      >
        <Heading>Desserts</Heading>
        <ProductCard
          handleClick={handleClick}
          isOrderActive={isOrderActive}
          setIsOrderActive={setIsOrderActive}
          orderAmount={orderAmounts}
          Increment={Increment}
          Decrement={Decrement}
        />
      </Flex>

      <Flex w={{ base: "100%", md: "100%", lg: "40%" }}>
        <Cart isOrderActive={isOrderActive} orderAmount={orderAmounts} />
      </Flex>
    </Flex>
  );
}
