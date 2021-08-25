import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useRowStyles = makeStyles({
  bigCard: {
    width: 80,
    height: 80,
    margin: "auto",
  },
  Content: {
    height: "100%",
    width: "100%",
  },
});

export default function SummonerIcon(props) {
  const { summonerInfo } = props;
  const classes = useRowStyles();

  const imageURL = `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${summonerInfo.profileIconId}.png`;
  return (
    <Card className={classes.bigCard}>
      <CardMedia className={classes.Content} image={imageURL} />
    </Card>
  );
}
