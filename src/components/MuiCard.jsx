import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const MuiCard = () => (
  <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Material-UI Card
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is an example card using Material-UI (MUI). You can easily use its components to
        create responsive and modern UI.
      </Typography>
    </CardContent>
    <Button variant="contained" color="primary" sx={{ margin: "0 16px 16px" }}>
      Learn More
    </Button>
  </Card>
);

export default MuiCard;
