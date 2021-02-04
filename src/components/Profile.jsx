import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
  card: {
    position: "relative",
    display: "flex",
    marginTop: 80,
    height: "100vh",
  },
  content: {
    padding: 25,
    objectFit: "cover",
    textAlign: "center",
    margin: "0 auto",
  },
});

const Profile = () => {
  const user = useContext(AuthContext);
  console.log(user);

  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="body1">{`First Name: ${user.firstName}`}</Typography>
        <Typography variant="body1">{`Last Name: ${user.lastName}`}</Typography>
        <Typography variant="body1">{`Email: ${user.email}`}</Typography>
        <Typography variant="body1">{`Username: ${user.username}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
