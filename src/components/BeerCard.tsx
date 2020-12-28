import {
  Button,
  Card,
  CardContent,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  CardMedia,
} from "@material-ui/core";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minWidth: 256,
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    cover: {
      height: 256,
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    rateButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: theme.spacing(2),
    },
  })
);

const BeerCard: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image="https://www.bevco.dk/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/h/e/heineken_flaske_33_cl_wet_1.jpeg"
          title="Heineken beer image"
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Heineken
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Unknown Brewers
          </Typography>
        </CardContent>
        <div className={classes.rateButton}>
          <Button variant="contained" color="secondary">
            Rate
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BeerCard;
