import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "src/components/layout.tsx";  // Changed from "@/components/layout"
import Home from "src/pages/home.tsx";               // Changed from "@/pages/home"
import Features from "src/pages/features.tsx";       // Changed from "@/pages/features"
import Install from "src/pages/install.tsx";         // Changed from "@/pages/install"
import Changelog from "src/pages/changelog.tsx";     // Changed from "@/pages/changelog"
import Community from "src/pages/community.tsx";     // Changed from "@/pages/community"
import NotFound from "src/pages/not-found.tsx";      // Changed from "@/pages/not-found"

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/install" component={Install} />
        <Route path="/changelog" component={Changelog} />
        <Route path="/community" component={Community} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
