import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Booking {
  id: string;
  userId: string;
  origin: { code: string; city: string };
  destination: { code: string; city: string };
  departureDate: string;
  returnDate?: string;
  passengers: number;
  tripType: "roundTrip" | "oneWay" | "multiCity";
  selectedFlight: {
    time: string;
    arrivalTime: string;
    duration: string;
    stops: string;
    price: number;
  };
  selectedSeat?: string;
  totalPrice: number;
  confirmationCode: string;
  status: "booked" | "confirmed" | "checked-in" | "completed" | "cancelled";
  createdAt: string;
}

interface CurrentBooking extends Partial<Booking> {
  selectedSeat?: string;
}

interface BookingContextType {
  bookings: Booking[];
  currentBooking: CurrentBooking | null;
  setCurrentBooking: (booking: CurrentBooking | null) => void;
  saveBooking: (userId: string) => Booking | null;
  getUserBookings: (userId: string) => Booking[];
  updateBookingStatus: (bookingId: string, status: Booking["status"]) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const BOOKINGS_STORAGE_KEY = "avelo_bookings";

const generateConfirmationCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentBooking, setCurrentBooking] = useState<CurrentBooking | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  const saveBookingsToStorage = (newBookings: Booking[]) => {
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(newBookings));
    setBookings(newBookings);
  };

  const saveBooking = (userId: string): Booking | null => {
    if (!currentBooking || !currentBooking.selectedFlight) return null;

    const newBooking: Booking = {
      id: crypto.randomUUID(),
      userId,
      origin: currentBooking.origin!,
      destination: currentBooking.destination!,
      departureDate: currentBooking.departureDate!,
      returnDate: currentBooking.returnDate,
      passengers: currentBooking.passengers || 1,
      tripType: currentBooking.tripType || "roundTrip",
      selectedFlight: currentBooking.selectedFlight,
      selectedSeat: currentBooking.selectedSeat,
      totalPrice: currentBooking.selectedFlight.price,
      confirmationCode: generateConfirmationCode(),
      status: "booked",
      createdAt: new Date().toISOString(),
    };

    const updatedBookings = [...bookings, newBooking];
    saveBookingsToStorage(updatedBookings);
    setCurrentBooking(null);

    return newBooking;
  };

  const getUserBookings = (userId: string): Booking[] => {
    return bookings.filter((b) => b.userId === userId);
  };

  const updateBookingStatus = (bookingId: string, status: Booking["status"]) => {
    const updatedBookings = bookings.map((b) =>
      b.id === bookingId ? { ...b, status } : b
    );
    saveBookingsToStorage(updatedBookings);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        currentBooking,
        setCurrentBooking,
        saveBooking,
        getUserBookings,
        updateBookingStatus,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
