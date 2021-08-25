import React, { useEffect, useState } from "react";
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
  const [imageURL, setImageURL] = useState(``);
  const classes = useRowStyles();

  useEffect(() => {
    if (!summonerInfo) {
      console.log("waiting for summonerInfo coming");
    } else {
      console.log("summonerInfo gotten ");
      console.log(summonerInfo);
      setImageURL(
        `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${summonerInfo.profileIconId}.png`
      );
    }
  }, [summonerInfo]);

  return (
    <Card className={classes.bigCard}>
      <CardMedia className={classes.Content} image={imageURL} />
    </Card>
  );
}
