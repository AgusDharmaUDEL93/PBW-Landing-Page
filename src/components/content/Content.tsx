import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import CardTeam from "../cardTeam/CardTeam";
import CardAssignment from "../cardAssignment/cardAssignment";

import Anggota from "../../data/anggota/Anggota.json";
import Tugas from "../../data/tugas/Tugas.json";

export default function Section2() {
  return (
    <Box py={10} px={5}>
      <Center>
        <Box textAlign={"center"} px={5} paddingBottom={10} marginBottom={5}>
          <Heading>Anggota Kelompok</Heading>
        </Box>
      </Center>
      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 4 }}
        width={"100%"}
        justifyItems={"center"}
        spacing={"10px"}
      >
        {Anggota.map((data, index) => {
          return (
            <CardTeam
              key={index}
              nim={data.nim}
              whatsapp={""}
              instagram={""}
              github={""}
              image={data.image}
            >
              {data.name}
            </CardTeam>
          );
        })}
      </SimpleGrid>
      <Center>
        <Box px={5} py={2} my={10} textAlign={"center"}>
          <Heading>Daftar Tugas</Heading>
        </Box>
      </Center>
      <Box px={"5rem"} marginBottom={20}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 5 }}
          width={"100%"}
          justifyItems={"center"}
          spacing={"20px"}
        >
          {Tugas.map((data, index) => {
            return (
              <CardAssignment
                key={index}
                summary={data.summary}
                path={data.path}
              >
                {data.title}
              </CardAssignment>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
