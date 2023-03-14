import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Error() {
  return (
    <Box px={"30px"}>
      <Center height={"100vh"}>
        <Stack spacing={"2rem"} textAlign={"center"}>
          <Image src={`/assets/illustration/error.svg`} width={"30rem"} />

          <Heading>404 - Page Not Found</Heading>
          <Text maxWidth={"30rem"}>
            The page you're looking for may be under development so you can't
            find it right now
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
