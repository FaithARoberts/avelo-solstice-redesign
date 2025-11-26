import { Star, Plane, Home, Briefcase, Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-avelo-card-light border-t border-border z-50">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-4">
        <NavLink
          to="/deals"
          className="flex flex-col items-center justify-center gap-1 text-avelo-text-medium min-h-[44px] px-3 rounded-xl transition-all duration-200"
          activeClassName="text-white bg-avelo-purple"
        >
          <Star className="w-6 h-6" />
          <span className="text-xs font-body font-medium">Deals</span>
        </NavLink>
        
        <NavLink
          to="/book"
          className="flex flex-col items-center justify-center gap-1 text-avelo-text-medium min-h-[44px] px-3 rounded-xl transition-all duration-200"
          activeClassName="text-white bg-avelo-purple"
        >
          <Plane className="w-6 h-6" />
          <span className="text-xs font-body font-medium">Book</span>
        </NavLink>
        
        <NavLink
          to="/"
          className="flex flex-col items-center justify-center gap-1 text-avelo-text-medium min-h-[44px] px-3 rounded-xl transition-all duration-200"
          activeClassName="text-white bg-avelo-purple"
          end
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-body font-medium">Home</span>
        </NavLink>
        
        <NavLink
          to="/trips"
          className="flex flex-col items-center justify-center gap-1 text-avelo-text-medium min-h-[44px] px-3 rounded-xl transition-all duration-200"
          activeClassName="text-white bg-avelo-purple"
        >
          <Briefcase className="w-6 h-6" />
          <span className="text-xs font-body font-medium">My Trips</span>
        </NavLink>
        
        <NavLink
          to="/more"
          className="flex flex-col items-center justify-center gap-1 text-avelo-text-medium min-h-[44px] px-3 rounded-xl transition-all duration-200"
          activeClassName="text-white bg-avelo-purple"
        >
          <Menu className="w-6 h-6" />
          <span className="text-xs font-body font-medium">More</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
