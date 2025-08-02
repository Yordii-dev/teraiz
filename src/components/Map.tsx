import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [-80, 20],
      zoom: 2,
      attributionControl: false,
    });

    map.current.on("load", async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
      );
      const data = await response.json();

      map.current!.addSource("countries", {
        type: "geojson",
        data,
      });

      map.current!.addLayer(
        {
          id: "highlighted-countries",
          type: "fill",
          source: "countries",
          paint: {
            "fill-color": "#00DCA7",
            "fill-opacity": 0.6,
          },
          filter: [
            "in",
            "name",
            "Mexico",
            "Colombia",
            "Peru",
            "Canada",
            "United States of America",
          ],
        },
        "landuse"
      );

      map.current!.fitBounds(
        [
          [-120, -50],
          [-30, 60],
        ],
        { padding: 30 }
      );
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} className="h-96 w-full" />;
};

export default Map;
