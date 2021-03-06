import React from "react";
import MatchForm from "../../components/match/MatchForm";
import CseggTemplate from "../../components/template/CseggTemplate";

export default function MatchPage({ match }) {
  const { summonerName } = match.params;
  return (
    <CseggTemplate>
      <MatchForm summonerName={summonerName} />
    </CseggTemplate>
  );
}
