import React from "react";
import Map from "./common/Map";
import { mapAtom } from "../atoms/map";
import { useSetAtom } from "jotai";
import { selectInfoAtom } from "../atoms/info";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);
    //맵 클릭 시 이벤트
    naver.maps.Event.addListener(map, "click", () => {
      // selectInof == null > infowinodw close
      setSelectInfo(null);
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;
