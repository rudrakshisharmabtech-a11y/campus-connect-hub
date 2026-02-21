import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CampusMap from "./pages/CampusMap";
import Study from "./pages/Study";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Internship from "./pages/Internship";
import ResearchHub from "./pages/ResearchHub";
import StudyGroupDetail from "./pages/StudyGroupDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/campus-map" element={<CampusMap />} />
          <Route path="/study" element={<Study />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/research-hub" element={<ResearchHub />} />
          <Route path="/study-group/:groupId" element={<StudyGroupDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
