import {

  Text,

  Flex,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bgColor={"gray.50"}
      height={"7rem"}
      borderTopLeftRadius={"5rem"}
      justifyContent={"end"}
      alignItems={"center"}
      px={"2rem"}
      boxShadow={"-0.5px -3px 15px rgb(0 0 0 / 12%)"}
    >
      <Text>© 2023 Kelompok 3. All rights reserved</Text>
    </Flex>
  );
}
