const tabs = ["All", "Images", "Experience", "Projects", "Resume", "Skills", "Contact"];

const TabNav = ({ activeTab, setActiveTab }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #dadce0",
        marginBottom: "20px",
        paddingLeft: "180px"
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            background: "none",
            border: "none",
            marginRight: "20px",
            paddingBottom: "10px",
            fontSize: "14px",
            cursor: "pointer",
            color: activeTab === tab ? "#1a0dab" : "#5f6368",
            borderBottom:
              activeTab === tab ? "3px solid #1a0dab" : "none"
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNav;