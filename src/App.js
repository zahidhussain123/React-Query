import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import HomepageQuery from "./pages/HomepageQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NewQueryPage from "./pages/NewQueryPage";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homequery" element={<HomepageQuery />} />
          <Route path="/homequerypage/:heroId" element={<NewQueryPage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
