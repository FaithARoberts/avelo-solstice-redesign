import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabSwitcher = ({ tabs, activeTab, onTabChange }: TabSwitcherProps) => {
  return (
    <div className="flex bg-white rounded-2xl p-1 border border-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-1 py-3 px-4 rounded-2xl font-heading text-xl transition-colors min-h-[44px]",
            activeTab === tab.id
              ? "bg-avelo-purple text-white"
              : "bg-white text-avelo-text-dark hover:bg-avelo-card-light"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
