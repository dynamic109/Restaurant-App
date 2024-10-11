import {
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Cart() {
  return (
    <Flex
    w={"100%"}
    h={"max-content"}
      direction={"column"}
      fontSize={"10px"}
      gap={"20px"}
      bg={"white"}
      p={"20px 10px"}
    >
      <Heading fontSize={"22px"}>Your Cart(7)</Heading>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"column"}>
          <Text>Order Name</Text>
          <Stack direction={"row"}>
            <Text>Amount</Text>
            <Text>Unit Price</Text>
            <Text>Total Item Price</Text>
          </Stack>
        </Stack>
        <Icon />
      </Flex>
      <Divider />

      <Flex justifyContent={"space-between"}>
        <Text>Order Total</Text>
        <Text>Total Price</Text>
      </Flex>
      <Flex alignItems={"center"} gap={"7px"}>
        <Icon />
        <Text>This is a carbon-neutral delivery</Text>
      </Flex>
      <Button>Confirm Order</Button>
    </Flex>
  );
}
