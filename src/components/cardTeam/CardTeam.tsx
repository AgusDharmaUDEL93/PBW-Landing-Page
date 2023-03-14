import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import redirection from "../../utils/redirection";

type props = {
  nim: string;
  children: string;
  whatsapp: string;
  instagram: string;
  github: string;
  image: string;
};

export default function CardTeam({
  children,
  nim,
  whatsapp,
  instagram,
  github,
  image,
}: props) {
  return (
    <Box>
      <Card p={"20px"} borderRadius={"30px"}>
        <Center>
          <Image src={`/assets/anggota/${image}`} boxSize={"300px"} />
        </Center>
        <Stack>
          <CardBody>
            <Center marginBottom={"20px"} maxWidth={"500px"}>
              <Heading
                fontSize={"2xl"}
                fontWeight={"semibold"}
                textAlign={"center"}
              >
                {nim}
              </Heading>
            </Center>
            <Heading
              fontSize={"xl"}
              fontWeight={"semibold"}
              textAlign={"center"}
            >
              {children}
            </Heading>
            <Text fontSize={"lg"} textAlign={"center"}>
              Informatika'21
            </Text>
            <Stack direction={"row"} justify={"center"} my={"20px"}>
              <Button
                p={0}
                colorScheme={"whatsapp"}
                variant={"outline"}
                onClick={() => {
                  redirection(whatsapp);
                }}
              >
                <AiOutlineWhatsApp size={"25px"} />
              </Button>
              <Button
                p={0}
                colorScheme={"pink"}
                variant={"outline"}
                onClick={() => {
                  redirection(instagram);
                }}
              >
                <AiOutlineInstagram size={"25px"} />
              </Button>
              <Button
                p={0}
                colorScheme={"black"}
                variant={"outline"}
                onClick={() => {
                  redirection(github);
                }}
              >
                <AiOutlineGithub size={"25px"} />
              </Button>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
