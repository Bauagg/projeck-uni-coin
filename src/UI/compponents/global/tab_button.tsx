interface TabButtonProps {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
    activeTab: string;
    onClick: (id: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ id, label, icon: Icon, activeTab, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`flex items-center justify-center space-x-2  my-4
      px-4 py-2 rounded-lg transition-all duration-300
      ${activeTab === id
                ? "floating-action text-black font-semibold"
                : "trading-card text-gray-300 hover:text-white"
            }`}
    >
        <Icon size={18} />
        <span className="whitespace-nowrap">{label}</span>
    </button>
);

export default TabButton