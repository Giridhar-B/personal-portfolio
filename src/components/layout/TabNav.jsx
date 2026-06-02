import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useMediaQuery from "../../hooks/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width: 768px)");

  const navStyle = {
    borderBottom: "1px solid #dadce0",
    marginBottom: "20px",
    marginTop: isAIPage ? "30px" : "0px",

    display: "flex",
    justifyContent: "center",

    fontFamily: "Arial, sans-serif",

    ...(isAIPage && {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "#ffffff",
      paddingTop: "12px",
    }),
  };

  const innerStyle = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "14px" : "20px",

    padding: isMobile ? "8px 12px" : "0px 16px",

    maxWidth: "1100px",
    width: "100%",

    overflowX: isMobile ? "auto" : "visible",
    whiteSpace: isMobile ? "nowrap" : "normal",
    flexWrap: isMobile ? "nowrap" : "wrap",

    scrollbarWidth: "none",
  };

  const tabWrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "14px" : "20px",
    flexWrap: isMobile ? "nowrap" : "wrap",
  };

  return (
    <div style={navStyle}>
      <div style={innerStyle}>
        {isAIPage && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "12px",
              flexShrink: 0,
            }}
          >
            <FcGoogle size={26} />
          </div>
        )}

        <div style={tabWrapperStyle}>
          {tabs.map((tab) => (
            <NavLink
              key={tab.label}
              to={tab.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                paddingBottom: "10px",

                fontSize: isMobile ? "13px" : "14px",
                cursor: "pointer",
                flexShrink: 0,

                color: isActive ? "#1a0dab" : "#5f6368",

                borderBottom: isActive
                  ? "3px solid #1a0dab"
                  : "3px solid transparent",

                fontWeight: isActive ? "500" : "400",

                transition: "all 0.2s ease",
              })}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNav;
