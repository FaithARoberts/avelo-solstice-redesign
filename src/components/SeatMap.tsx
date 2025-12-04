import { cn } from "@/lib/utils";

interface SeatMapProps {
  selectedSeat: string | null;
  onSeatSelect: (seat: string) => void;
}

const SeatMap = ({ selectedSeat, onSeatSelect }: SeatMapProps) => {
  const columns = ["A", "B", "C", "D", "E", "F"];
  const rows = Array.from({ length: 25 }, (_, i) => i + 1);

  // Simulate taken seats
  const takenSeats = new Set([
    "1A", "1B", "2C", "3D", "4E", "4F", "5A", "6B", "7C",
    "8D", "9E", "10A", "11F", "12B", "13C", "15D", "16E",
    "18A", "19B", "20C", "21D", "22E", "23F", "24A"
  ]);

  const isPreferred = (row: number) => row <= 5;
  const isExitRow = (row: number) => row === 10 || row === 11;

  const getSeatStatus = (seat: string) => {
    if (takenSeats.has(seat)) return "taken";
    if (selectedSeat === seat) return "selected";
    return "available";
  };

  const getSeatStyle = (seat: string, row: number) => {
    const status = getSeatStatus(seat);
    const baseStyles = "w-8 h-8 rounded text-xs font-semibold transition-all";

    if (status === "taken") {
      return cn(baseStyles, "bg-avelo-text-medium text-white cursor-not-allowed");
    }

    if (status === "selected") {
      return cn(baseStyles, "bg-avelo-purple text-white ring-2 ring-avelo-yellow");
    }

    if (isPreferred(row)) {
      return cn(baseStyles, "bg-avelo-yellow text-avelo-purple hover:bg-avelo-yellow/80 cursor-pointer");
    }

    if (isExitRow(row)) {
      return cn(baseStyles, "bg-green-200 text-green-800 hover:bg-green-300 cursor-pointer");
    }

    return cn(baseStyles, "bg-avelo-card-light text-avelo-text-dark hover:bg-avelo-card-light/70 cursor-pointer");
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[280px] mx-auto">
        {/* Plane nose indicator */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-8 bg-avelo-purple-dark rounded-t-full flex items-center justify-center">
            <span className="text-white text-xs font-body">Front</span>
          </div>
        </div>

        {/* Column headers */}
        <div className="flex justify-center gap-1 mb-2">
          <div className="w-6" /> {/* Row number spacer */}
          {columns.slice(0, 3).map((col) => (
            <div key={col} className="w-8 text-center text-xs font-body text-avelo-text-medium">
              {col}
            </div>
          ))}
          <div className="w-6" /> {/* Aisle */}
          {columns.slice(3).map((col) => (
            <div key={col} className="w-8 text-center text-xs font-body text-avelo-text-medium">
              {col}
            </div>
          ))}
        </div>

        {/* Seat rows */}
        <div className="space-y-1">
          {rows.map((row) => (
            <div key={row} className="flex justify-center gap-1 items-center">
              <div className="w-6 text-xs font-body text-avelo-text-medium text-right pr-1">
                {row}
              </div>
              {columns.slice(0, 3).map((col) => {
                const seat = `${row}${col}`;
                const status = getSeatStatus(seat);
                return (
                  <button
                    key={seat}
                    className={getSeatStyle(seat, row)}
                    onClick={() => status !== "taken" && onSeatSelect(seat)}
                    disabled={status === "taken"}
                    aria-label={`Seat ${seat}${status === "taken" ? " (taken)" : ""}`}
                  >
                    {col}
                  </button>
                );
              })}
              <div className="w-6" /> {/* Aisle */}
              {columns.slice(3).map((col) => {
                const seat = `${row}${col}`;
                const status = getSeatStatus(seat);
                return (
                  <button
                    key={seat}
                    className={getSeatStyle(seat, row)}
                    onClick={() => status !== "taken" && onSeatSelect(seat)}
                    disabled={status === "taken"}
                    aria-label={`Seat ${seat}${status === "taken" ? " (taken)" : ""}`}
                  >
                    {col}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Exit row labels */}
        <div className="flex justify-center mt-2 text-xs text-green-600 font-body">
          <span>🚪 Exit rows: 10-11 (+$35)</span>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
