import { Box, Center } from "@chakra-ui/react";
import "./Loading.css";

export default function Loading() {
  return (
    <Box>
      <Center height={"100vh"}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Center>
    </Box>
  );
}
