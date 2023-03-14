import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import theme from "./resources/theme";
import Loading from "./pages/loading/Loading";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
