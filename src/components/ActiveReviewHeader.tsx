import { Typography, useTheme } from "@material-ui/core";
import React, { FC } from "react";

const ActiveReviewHeader: FC = () => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.spacing(4) }}>
      <Typography variant="h2" color="textPrimary" align="center">
        There is a vote running
      </Typography>
      <Typography variant="h3" color="textSecondary" align="center">
        Cast your vote now!
      </Typography>
    </div>
  );
};

export default ActiveReviewHeader;
