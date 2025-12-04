import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { BookingProvider } from "@/contexts/BookingContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import More from "./pages/More";
import Book from "./pages/Book";
import Flights from "./pages/Flights";
import Review from "./pages/Review";
import BookingConfirmation from "./pages/BookingConfirmation";
import Deals from "./pages/Deals";
import Trips from "./pages/Trips";
import FlightHistory from "./pages/FlightHistory";
import CheckIn from "./pages/CheckIn";
import BoardingPass from "./pages/BoardingPass";
import FlightStatus from "./pages/FlightStatus";
import FlightStatusDetails from "./pages/FlightStatusDetails";
import Notifications from "./pages/Notifications";
import PaymentMethods from "./pages/PaymentMethods";
import AddPaymentMethod from "./pages/AddPaymentMethod";
import EditPaymentMethod from "./pages/EditPaymentMethod";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import ForgotPassword from "./pages/ForgotPassword";
import SeatSelection from "./pages/SeatSelection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BookingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/account" element={<Account />} />
              <Route path="/more" element={<More />} />
              <Route path="/book" element={<Book />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/seat-selection" element={<SeatSelection />} />
              <Route path="/review" element={<Review />} />
              <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/flight-history" element={<FlightHistory />} />
              <Route path="/check-in" element={<CheckIn />} />
              <Route path="/boarding-pass" element={<BoardingPass />} />
              <Route path="/flight-status" element={<FlightStatus />} />
              <Route path="/flight-status-details" element={<FlightStatusDetails />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/payment-methods" element={<PaymentMethods />} />
              <Route path="/payment-methods/add" element={<AddPaymentMethod />} />
              <Route path="/payment-methods/edit/:id" element={<EditPaymentMethod />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </BookingProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
