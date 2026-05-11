import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import Index from "./pages/Index";
import SobreZenith from "./pages/SobreZenith";
import CasosReais from "./pages/CasosReais";
import Comercializacao from "./pages/Comercializacao";
import FalaConosco from "./pages/FalaConosco";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Index },
      { path: "sobre-zenith", Component: SobreZenith },
      { path: "casos-reais", Component: CasosReais },
      { path: "comercializacao", Component: Comercializacao },
      { path: "falaconosco", Component: FalaConosco },
      { path: "*", Component: NotFound },
    ],
  },
]);
