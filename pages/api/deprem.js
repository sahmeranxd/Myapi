export default function handler(req, res) {
  const veriler = [
    { city: "ADANA", area: "KOZAN", country: "Türkiye", intensity_ml: "2.5", depth_km: "5.4", date: 1741289500, location: "https://www.google.com/maps?q=37.4471,35.8124", image: "https://tile.openstreetmap.org/10/600/390.png", lat: "37.4471", lng: "35.8124" },
    { city: "ISTANBUL", area: "SARIYER", country: "Türkiye", intensity_ml: "3.0", depth_km: "10.2", date: 1741291234, location: "https://www.google.com/maps?q=41.1736,29.0524", image: "https://tile.openstreetmap.org/10/605/395.png", lat: "41.1736", lng: "29.0524" },
    { city: "ANTALYA", area: "KEPEZ", country: "Türkiye", intensity_ml: "2.8", depth_km: "12.5", date: 1741289700, location: "https://www.google.com/maps?q=36.8880,30.7056", image: "https://tile.openstreetmap.org/10/600/390.png", lat: "36.8880", lng: "30.7056" },

    { city: "LOS ANGELES", area: "CALIFORNIA", country: "USA", intensity_ml: "4.2", depth_km: "8.0", date: 1741300000, location: "https://www.google.com/maps?q=34.0522,-118.2437", image: "https://tile.openstreetmap.org/10/589/382.png", lat: "34.0522", lng: "-118.2437" },
    { city: "SAN FRANCISCO", area: "CALIFORNIA", country: "USA", intensity_ml: "3.5", depth_km: "10.0", date: 1741300200, location: "https://www.google.com/maps?q=37.7749,-122.4194", image: "https://tile.openstreetmap.org/10/587/379.png", lat: "37.7749", lng: "-122.4194" },

    { city: "TOKYO", area: "KANTO", country: "JAPAN", intensity_ml: "5.0", depth_km: "15.0", date: 1741301000, location: "https://www.google.com/maps?q=35.6895,139.6917", image: "https://tile.openstreetmap.org/10/605/410.png", lat: "35.6895", lng: "139.6917" },
    { city: "OSAKA", area: "KANSAI", country: "JAPAN", intensity_ml: "4.0", depth_km: "12.0", date: 1741301100, location: "https://www.google.com/maps?q=34.6937,135.5023", image: "https://tile.openstreetmap.org/10/607/412.png", lat: "34.6937", lng: "135.5023" },

    { city: "ROME", area: "LAZIO", country: "ITALY", intensity_ml: "3.6", depth_km: "8.5", date: 1741302000, location: "https://www.google.com/maps?q=41.9028,12.4964", image: "https://tile.openstreetmap.org/10/597/394.png", lat: "41.9028", lng: "12.4964" },
    { city: "NAPLES", area: "CAMPANIA", country: "ITALY", intensity_ml: "3.9", depth_km: "9.0", date: 1741302100, location: "https://www.google.com/maps?q=40.8518,14.2681", image: "https://tile.openstreetmap.org/10/598/393.png", lat: "40.8518", lng: "14.2681" },

    { city: "SANTIAGO", area: "METROPOLITAN", country: "CHILE", intensity_ml: "4.5", depth_km: "20.0", date: 1741303000, location: "https://www.google.com/maps?q=-33.4489,-70.6693", image: "https://tile.openstreetmap.org/10/590/383.png", lat: "-33.4489", lng: "-70.6693" },

    { city: "WELLINGTON", area: "WELLINGTON REGION", country: "NEW ZEALAND", intensity_ml: "3.7", depth_km: "18.0", date: 1741304000, location: "https://www.google.com/maps?q=-41.2865,174.7762", image: "https://tile.openstreetmap.org/10/602/390.png", lat: "-41.2865", lng: "174.7762" }
  ];

  const query = req.query.deprem?.toLowerCase();

  if (query) {
    const filtreli = veriler.filter(dep =>
      dep.city.toLowerCase().includes(query) ||
      dep.area.toLowerCase().includes(query) ||
      dep.country.toLowerCase().includes(query)
    );
    return res.status(200).json(filtreli);
  }

  res.status(200).json(veriler);
}
