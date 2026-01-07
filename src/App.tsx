import { DocsLayout } from "@/components/tabs/Docs/DocsLayout";
import { Header } from "@/components/layout/Header/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GetStartedLayout } from "@/components/tabs/GetStarted/GetStartedLayout";
import { TextureCalcLayout } from "./components/tabs/TextureCalcLayout";
import { NotFound } from "./components/layout/NotFound";
import { Box } from "@chakra-ui/react";
import { useColorPalette } from "./components/ui/color-mode";

function App() {
  const { bgColor } = useColorPalette();

  return (
    <Box background={bgColor} minH={"100vh"}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/getstarted/info" />} />
          <Route path="getstarted/:category">
            <Route index element={<GetStartedLayout />} />
          </Route>
          <Route path="docs/:category" element={<DocsLayout />} />
          <Route path="textureCalc" element={<TextureCalcLayout />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
