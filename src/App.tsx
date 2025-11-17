import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import More from "./pages/More";
import Book from "./pages/Book";
import Flights from "./pages/Flights";
import Review from "./pages/Review";
import Deals from "./pages/Deals";
import Trips from "./pages/Trips";
import FlightHistory from "./pages/FlightHistory";
import CheckIn from "./pages/CheckIn";
import BoardingPass from "./pages/BoardingPass";
import FlightStatus from "./pages/FlightStatus";
import FlightStatusDetails from "./pages/FlightStatusDetails";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/more" element={<More />} />
          <Route path="/book" element={<Book />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/review" element={<Review />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/flight-history" element={<FlightHistory />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/boarding-pass" element={<BoardingPass />} />
          <Route path="/flight-status" element={<FlightStatus />} />
          <Route path="/flight-status-details" element={<FlightStatusDetails />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
