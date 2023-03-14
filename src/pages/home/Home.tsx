import { Box } from "@chakra-ui/react";
import Section2 from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Section1 from "../../components/header/Header";

export default function Home() {
  return (
    <Box bgImage={`/assets/background/bgpattern.png`}>
      <Section1 />
      <Section2 />
      <Footer />
    </Box>
  );
}
