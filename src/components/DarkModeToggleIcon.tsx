import React, { FC } from "react";
import DarkModeIcon from "@material-ui/icons/Brightness4";
import LightModeIcon from "@material-ui/icons/Brightness5";

interface Props {
  toggled: boolean;
}

const DarkModeToggleIcon: FC<Props> = ({ toggled }) => {
  return <>{toggled ? <LightModeIcon /> : <DarkModeIcon />}</>;
};

export default DarkModeToggleIcon;
