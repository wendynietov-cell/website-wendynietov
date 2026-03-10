import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import Estudios from "@/pages/Estudios";
import Insights from "@/pages/Insights";
import SobreMi from "@/pages/SobreMi";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios/:slug" component={ServicePage} />
        
        {/* Redirect base servicios to the first one or a directory page if preferred */}
        <Route path="/servicios">
          {() => <Redirect to="/servicios/tecnologia-restaurantes" />}
        </Route>
        
        <Route path="/estudios" component={Estudios} />
        <Route path="/insights" component={Insights} />
        <Route path="/sobre-mi" component={SobreMi} />
        <Route path="/contacto" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
