import { Switch, Route, Router as WouterRouter } from 'wouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/layout'
import Home from './pages/home'
import Features from './pages/feaures'
import Install from './pages/install'
import Changelog from './pages/changelog'
import Community from './pages/community'
import NotFound from './pages/not-found'

const queryClient = new QueryClient()

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
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  )
}

export default App
