import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
import maplibregl from "maplibre-gl";

import "mapbox-gl/dist/mapbox-gl.css";
// import { useLanguage } from "@/contexts/LanguageContext";

const MapSection = () => {
  // const { t } = useLanguage();
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
      // 1. Cargar países
      const response = await fetch(
        "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
      );
      const data = await response.json();

      map.current!.addSource("countries", {
        type: "geojson",
        data,
      });

      // 2. Agregar capa para colorear
      map.current!.addLayer(
        {
          id: "highlighted-countries",
          type: "fill",
          source: "countries",
          paint: {
            "fill-color": "#00DCA7", // tu aqua
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
      ); // ⬅️ ¡clave! Insertar debajo de "water" para que sea visible

      // 4. Ajustar vista
      map.current!.fitBounds(
        [
          [-120, -50], // suroeste
          [-30, 60], // noreste
        ],
        { padding: 30 }
      );
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Presencia Internacional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 8 años creando soluciones exitosas para inmobiliarias en
            LATAM y Norteamérica
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div ref={mapContainer} className="h-96 w-full" />

          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-secondary mb-2">
                  8+
                </div>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-secondary mb-2">
                  12
                </div>
                <p className="text-gray-600">Países atendidos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-secondary mb-2">
                  150+
                </div>
                <p className="text-gray-600">Proyectos exitosos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
