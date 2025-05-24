export default function handler(req, res) {
  const { deprem } = req.query;

  const veriler = [
    // Türkiye
    { city: "İstanbul", area: "Silivri", country: "Türkiye", intensity_ml: "3.0", depth_km: "10.2", date: 1741284000, location: "https://www.google.com/maps?q=41.073,28.236" },
    { city: "Ankara", area: "Çankaya", country: "Türkiye", intensity_ml: "2.6", depth_km: "5.7", date: 1741284600, location: "https://www.google.com/maps?q=39.9208,32.8541" },
    { city: "İzmir", area: "Karşıyaka", country: "Türkiye", intensity_ml: "3.1", depth_km: "8.3", date: 1741285200, location: "https://www.google.com/maps?q=38.4550,27.1230" },

    // USA
    { city: "Los Angeles", area: "California", country: "USA", intensity_ml: "4.5", depth_km: "12.1", date: 1741285800, location: "https://www.google.com/maps?q=34.0522,-118.2437" },
    { city: "San Francisco", area: "California", country: "USA", intensity_ml: "4.9", depth_km: "15.0", date: 1741286400, location: "https://www.google.com/maps?q=37.7749,-122.4194" },

    // Japan
    { city: "Tokyo", area: "Kantō", country: "Japan", intensity_ml: "5.2", depth_km: "18.4", date: 1741287000, location: "https://www.google.com/maps?q=35.6895,139.6917" },
    { city: "Osaka", area: "Kansai", country: "Japan", intensity_ml: "4.7", depth_km: "10.0", date: 1741287600, location: "https://www.google.com/maps?q=34.6937,135.5023" },

    // Italy
    { city: "Rome", area: "Lazio", country: "Italy", intensity_ml: "3.9", depth_km: "9.0", date: 1741288200, location: "https://www.google.com/maps?q=41.9028,12.4964" },
    { city: "Naples", area: "Campania", country: "Italy", intensity_ml: "4.1", depth_km: "11.2", date: 1741288800, location: "https://www.google.com/maps?q=40.8518,14.2681" },

    // Chile
    { city: "Santiago", area: "Metropolitan", country: "Chile", intensity_ml: "5.4", depth_km: "20.3", date: 1741289400, location: "https://www.google.com/maps?q=-33.4489,-70.6693" },

    // New Zealand
    { city: "Wellington", area: "Wellington Region", country: "New Zealand", intensity_ml: "4.8", depth_km: "14.6", date: 1741290000, location: "https://www.google.com/maps?q=-41.2865,174.7762" }
  ];

  if (!deprem) {
    return res.status(200).json(veriler); // Hepsini döndür
  }

  const filtre = veriler.filter(item =>
    item.city.toLowerCase().includes(deprem.toLowerCase()) ||
    item.area.toLowerCase().includes(deprem.toLowerCase()) ||
    item.country.toLowerCase().includes(deprem.toLowerCase())
  );

  if (filtre.length === 0) {
    return res.status(404).json({ hata: "Deprem verisi bulunamadı." });
  }

  res.status(200).json(filtre);
}
