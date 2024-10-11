import {
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import { GiTreeDoor } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

export default function Cart() {
  return (
    <Flex
      w={"100%"}
      h={"max-content"}
      direction={"column"}
      fontSize={"10px"}
      gap={"20px"}
      bg={"white"}
      p={"30px 20px"}
      borderRadius={"10px"}
      my={{ base: "20px", md: "0" }}
    >
      <Heading fontSize={"22px"} color={"hsl(14, 86%, 42%)"}>
        Your Cart(7)
      </Heading>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"column"}>
          <Text fontWeight={700}>Order Name</Text>
          <Stack direction={"row"}>
            <Text color={"hsl(14, 86%, 42%)"} fontWeight={600}>
              1x
            </Text>
            <Text>@ $84</Text>
            <Text fontWeight={600}>$84</Text>
          </Stack>
        </Stack>
        <ImCancelCircle width={"35px"} height={"215px"} />
      </Flex>
      <Divider />

      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>Order Total</Text>
        <Text fontWeight={700} fontSize={"20px"}>
          $64.50
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={"5px"}
        p={"10px 20px"}
        textAlign={"center"}
        bg={"hsl(13, 31%, 94%)"}
        borderRadius={"6px"}
      >
        <GiTreeDoor color="green" />
        <Text>
          This is a <b>carbon-neutral</b> delivery
        </Text>
      </Flex>
      <Button
        borderRadius={"full"}
        bg={"hsl(14, 86%, 42%)"}
        color={"white"}
        colorScheme="hsl(14, 86%, 42%)"
      >
        Confirm Order
      </Button>
    </Flex>
  );
}
