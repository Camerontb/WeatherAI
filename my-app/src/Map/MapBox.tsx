// Example: Map.tsx
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import the CSS!

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZXJvbmJ1dGNoYXJ0IiwiYSI6ImNtNWhndzhwZDBpdmUya3B3cXY4eDlsbmoifQ.-4c4zqbaMO5Bu_Yjg369sQ';

const MapBox = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
  
    useEffect(() => {
      if (map.current || !mapContainer.current) return;
  
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [151.2093, -33.8688], // Sydney
        zoom: 10,
      });
    }, []);
  
    return <div ref={mapContainer} style={{ height: '100vh', width: '100%' }} />;
  };
  
  export default MapBox;