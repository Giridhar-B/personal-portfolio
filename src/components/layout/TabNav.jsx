import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const tabs = [
  { label: "AI Mode", path: "/ai" },
  { label: "All", path: "/" },
  { label: "Images", path: "/images" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

const TabNav = ({ isAIPage }) => {
  const navStyle = {
    borderBottom: "1px solid #dadce0",
    marginBottom: "20px",
    marginTop: isAIPage ? "30px" : "0px",

    paddingLeft: "180px",

    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",

    fontFamily: "Arial, sans-serif",

    ...(isAIPage && {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "#ffffff",
      paddingTop: "12px",
    }),
  };

  return (
    <div style={navStyle}>
      {isAIPage && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "12px",
            marginBottom: "10px",
          }}
        >
          <FcGoogle size={26} />
        </div>
      )}

      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={tab.path}
          style={({ isActive }) => ({
            textDecoration: "none",
            paddingBottom: "10px",

            fontSize: "14px",
            cursor: "pointer",

            color: isActive ? "#1a0dab" : "#5f6368",

            borderBottom: isActive
              ? "3px solid #1a0dab"
              : "3px solid transparent",

            fontWeight: isActive ? "500" : "400",

            fontFamily: "Arial, sans-serif",

            transition: "all 0.2s ease",
          })}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default TabNav;