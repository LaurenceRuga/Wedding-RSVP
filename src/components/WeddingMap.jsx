import { useEffect, useRef } from "react";

const SOUTHAMPTON = { lat: 50.9097, lng: -1.4044 };

const MAP_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

const darkMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

export default function WeddingMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = () => {
      if (!window.google?.maps || !mapRef.current) return;
      if (mapInstanceRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: SOUTHAMPTON,
        zoom: 13,
        styles: darkMapStyles,
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      new window.google.maps.Marker({
        position: SOUTHAMPTON,
        map,
        title: "Southampton, England",
      });

      mapInstanceRef.current = map;
    };

    if (window.google?.maps) {
      initMap();
      return undefined;
    }

    const existing = document.querySelector(`script[data-google-maps="true"]`);
    if (existing) {
      existing.addEventListener("load", initMap);
      return () => existing.removeEventListener("load", initMap);
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="h-80 min-h-[20rem] w-full md:h-full md:min-h-[22rem]"
      role="region"
      aria-label="Map of Southampton, England"
    />
  );
}
