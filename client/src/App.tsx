import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WikiIndex from "./pages/WikiIndex";
import WikiSection from "./pages/WikiSection";
import Layout from "./components/Layout";
import Economia from "./pages/Economia";
import Moral from "./pages/Moral";
import AntiAereo from "./pages/AntiAereo";
import Misseis from "./pages/Misseis";
import Espioes from "./pages/Espioes";
import CalculoDano from "./pages/CalculoDano";
import FAQ from "./pages/FAQ";
import Calculadora from "./pages/Calculadora";
import Paises from "./pages/Paises";
import Edificios from "./pages/Edificios";
import EdificiosProvincia from "./pages/EdificiosProvincia";
import Unidades from "./pages/Unidades";
import Estrategias from "./pages/Estrategias";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/wiki"} component={WikiIndex} />
        <Route path={"/wiki/:id"} component={WikiSection} />
        <Route path={"/economia"} component={Economia} />
        <Route path={"/moral"} component={Moral} />
        <Route path={"/anti-aereo"} component={AntiAereo} />
        <Route path={"/misseis"} component={Misseis} />
        <Route path={"/espioes"} component={Espioes} />
        <Route path={"/calculo-dano"} component={CalculoDano} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/calculadora"} component={Calculadora} />
        <Route path={"/paises"} component={Paises} />
        <Route path={"/edificios"} component={Edificios} />
        <Route path={"/edificios-provincia"} component={EdificiosProvincia} />
        <Route path={"/unidades"} component={Unidades} />
        <Route path={"/estrategias"} component={Estrategias} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
