import { useState, useRef, useEffect } from "react";
import { Airport, searchAirports } from "@/data/airports";
import { cn } from "@/lib/utils";

interface CitySearchInputProps {
  value: { code: string; city: string };
  onChange: (value: { code: string; city: string }) => void;
  placeholder?: string;
  className?: string;
}

const CitySearchInput = ({ value, onChange, placeholder = "Search city", className }: CitySearchInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Airport[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setResults(searchAirports(search));
  }, [search]);

  const handleSelect = (airport: Airport) => {
    onChange({ code: airport.code, city: `${airport.city}, ${airport.state}` });
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
        className="cursor-pointer"
      >
        <div className="text-2xl font-heading font-semibold">{value.code}</div>
        <div className="text-sm text-avelo-text-medium">{value.city}</div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-lg border border-border z-50 overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 border-b border-border text-base font-body focus:outline-none"
            autoFocus
          />
          <div className="max-h-64 overflow-y-auto">
            {results.map((airport) => (
              <button
                key={airport.code}
                onClick={() => handleSelect(airport)}
                className="w-full px-4 py-3 text-left hover:bg-avelo-card-light transition-colors flex items-center gap-3"
              >
                <span className="font-heading font-semibold text-avelo-purple">{airport.code}</span>
                <span className="text-sm text-avelo-text-medium">
                  {airport.city}, {airport.state}
                </span>
              </button>
            ))}
            {results.length === 0 && (
              <div className="px-4 py-3 text-sm text-avelo-text-medium">No airports found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySearchInput;
