export interface Airport {
  code: string;
  city: string;
  state: string;
  name: string;
}

export const airports: Airport[] = [
  { code: "ATL", city: "Atlanta", state: "GA", name: "Hartsfield-Jackson Atlanta International" },
  { code: "LAX", city: "Los Angeles", state: "CA", name: "Los Angeles International" },
  { code: "ORD", city: "Chicago", state: "IL", name: "O'Hare International" },
  { code: "DFW", city: "Dallas", state: "TX", name: "Dallas/Fort Worth International" },
  { code: "DEN", city: "Denver", state: "CO", name: "Denver International" },
  { code: "JFK", city: "New York", state: "NY", name: "John F. Kennedy International" },
  { code: "SFO", city: "San Francisco", state: "CA", name: "San Francisco International" },
  { code: "SEA", city: "Seattle", state: "WA", name: "Seattle-Tacoma International" },
  { code: "LAS", city: "Las Vegas", state: "NV", name: "Harry Reid International" },
  { code: "MCO", city: "Orlando", state: "FL", name: "Orlando International" },
  { code: "EWR", city: "Newark", state: "NJ", name: "Newark Liberty International" },
  { code: "PHX", city: "Phoenix", state: "AZ", name: "Phoenix Sky Harbor International" },
  { code: "IAH", city: "Houston", state: "TX", name: "George Bush Intercontinental" },
  { code: "MIA", city: "Miami", state: "FL", name: "Miami International" },
  { code: "BOS", city: "Boston", state: "MA", name: "Logan International" },
  { code: "MSP", city: "Minneapolis", state: "MN", name: "Minneapolis-Saint Paul International" },
  { code: "DTW", city: "Detroit", state: "MI", name: "Detroit Metropolitan" },
  { code: "PHL", city: "Philadelphia", state: "PA", name: "Philadelphia International" },
  { code: "LGA", city: "New York", state: "NY", name: "LaGuardia" },
  { code: "CLT", city: "Charlotte", state: "NC", name: "Charlotte Douglas International" },
  { code: "BWI", city: "Baltimore", state: "MD", name: "Baltimore/Washington International" },
  { code: "SLC", city: "Salt Lake City", state: "UT", name: "Salt Lake City International" },
  { code: "DCA", city: "Washington", state: "DC", name: "Ronald Reagan Washington National" },
  { code: "IAD", city: "Washington", state: "DC", name: "Washington Dulles International" },
  { code: "SAN", city: "San Diego", state: "CA", name: "San Diego International" },
  { code: "TPA", city: "Tampa", state: "FL", name: "Tampa International" },
  { code: "PDX", city: "Portland", state: "OR", name: "Portland International" },
  { code: "HNL", city: "Honolulu", state: "HI", name: "Daniel K. Inouye International" },
  { code: "AUS", city: "Austin", state: "TX", name: "Austin-Bergstrom International" },
  { code: "DAL", city: "Dallas", state: "TX", name: "Dallas Love Field" },
  { code: "MDW", city: "Chicago", state: "IL", name: "Midway International" },
  { code: "HOU", city: "Houston", state: "TX", name: "William P. Hobby" },
  { code: "BNA", city: "Nashville", state: "TN", name: "Nashville International" },
  { code: "RDU", city: "Raleigh", state: "NC", name: "Raleigh-Durham International" },
  { code: "SMF", city: "Sacramento", state: "CA", name: "Sacramento International" },
  { code: "SJC", city: "San Jose", state: "CA", name: "Norman Y. Mineta San Jose International" },
  { code: "OAK", city: "Oakland", state: "CA", name: "Oakland International" },
  { code: "STL", city: "St. Louis", state: "MO", name: "St. Louis Lambert International" },
  { code: "MCI", city: "Kansas City", state: "MO", name: "Kansas City International" },
  { code: "ONT", city: "Ontario", state: "CA", name: "Ontario International" },
  { code: "ALB", city: "Albany", state: "NY", name: "Albany International" },
  { code: "BUR", city: "Burbank", state: "CA", name: "Hollywood Burbank" },
  { code: "SNA", city: "Santa Ana", state: "CA", name: "John Wayne Airport" },
  { code: "IND", city: "Indianapolis", state: "IN", name: "Indianapolis International" },
  { code: "CLE", city: "Cleveland", state: "OH", name: "Cleveland Hopkins International" },
  { code: "PIT", city: "Pittsburgh", state: "PA", name: "Pittsburgh International" },
  { code: "CMH", city: "Columbus", state: "OH", name: "John Glenn Columbus International" },
  { code: "MKE", city: "Milwaukee", state: "WI", name: "General Mitchell International" },
  { code: "JAX", city: "Jacksonville", state: "FL", name: "Jacksonville International" },
  { code: "RSW", city: "Fort Myers", state: "FL", name: "Southwest Florida International" },
];

export const searchAirports = (query: string): Airport[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return airports.slice(0, 10);
  
  return airports.filter(
    (airport) =>
      airport.code.toLowerCase().includes(lowerQuery) ||
      airport.city.toLowerCase().includes(lowerQuery) ||
      airport.state.toLowerCase().includes(lowerQuery) ||
      airport.name.toLowerCase().includes(lowerQuery)
  ).slice(0, 10);
};

export const getAirportByCode = (code: string): Airport | undefined => {
  return airports.find((a) => a.code === code);
};
