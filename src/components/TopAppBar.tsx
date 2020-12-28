import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { FC } from "react";
import DarkModeToggleIcon from "./DarkModeToggleIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(4),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    loginButton: {
      marginLeft: theme.spacing(2),
    },
  })
);

interface Props {
  onThemeToggle: () => void;
  themeToggled: boolean;
}

const TopAppBar: FC<Props> = ({ onThemeToggle, themeToggled }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Beer Review
        </Typography>
        <IconButton color="inherit" onClick={onThemeToggle}>
          <DarkModeToggleIcon toggled={themeToggled} />
        </IconButton>
        <Button color="inherit" className={classes.loginButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
