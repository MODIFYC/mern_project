import { useSetAtom } from "jotai";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";
import { infosAtom } from "../../atoms/info";
import { infos } from "../../data/infos";
import MarkersContainer from "../../components/MarkersContainer";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Info } from "../../types/info";
import { getInfos } from "../../apis/info";

function Home() {
  const setInfos = useSetAtom(infosAtom);
  const { status } = useQuery("infos", getInfos, {
    select: (result) => result.data.data,
    onSuccess: (infos) => {
      setInfos(infos);
    },
  });

  if (status === "loading") return <></>;

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Home;
