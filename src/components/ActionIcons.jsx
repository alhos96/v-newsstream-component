import { IconButton } from "@mui/material";

//import "./action-icons.css";

const ActionIcons = ({ icons }) => {
  console.log(icons);

  return (
    <div className="action-icons">
      {icons?.map((icon, i) => {
        return (
          <IconButton
            sx={{ padding: 0, ml: 0.5, color: "#11b65e" }}
            title={icon.label}
            aria-label={icon.label}
            key={i}
          >
            {icon.icon}
          </IconButton>
        );
      })}
    </div>
  );
};

export default ActionIcons;
