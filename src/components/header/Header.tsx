import { Box, Center, Heading} from "@chakra-ui/react";

export default function Section1() {
  return (
    <Box
      as="section"
      bgImage={`/assets/background/header.svg`}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      height={"17rem"}
    >
      <Center height={"15rem"}>
        <Box textAlign={"center"} textColor={"white"} letterSpacing={"7px"}>
          <Heading
            fontFamily={`Righteous`}
            textShadow={"0.5px 3px 15px rgb(0 0 0 / 12%)"}
          >
            Pemrograman Berbasis Web
          </Heading>
          <Heading fontFamily={`Righteous`}>Kelompok 3</Heading>
        </Box>
      </Center>
    </Box>
  );
}
