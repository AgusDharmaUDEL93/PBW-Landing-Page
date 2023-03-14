import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate} from "react-router-dom";

type props = {
  children: string;
  summary: string;

  path: string;
};

export default function Tugas({ children, summary, path }: props) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{children}</Heading>
      </CardHeader>
      <CardBody>
        <Text minWidth={"10rem"} maxWidth={"15rem"} textAlign={"justify"}>
          {summary}
        </Text>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => {
            navigate(path);
          }}
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
