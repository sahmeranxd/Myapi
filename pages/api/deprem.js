export default function handler(req, res) {
  const veriler = [
    {
      city: "MARMARA",
      area: "MARMARA DENIZI",
      intensity_ml: "1.9",
      depth_km: "17.1",
      date: 1741289596,
      location: "https://www.google.com/maps?q=40.7220,28.2448",
      image: "https://tile.openstreetmap.org/10/592/384.png",
      lat: "40.7220",
      lng: "28.2448"
    },
    {
      city: "ADANA",
      area: "KOZAN",
      intensity_ml: "2.5",
      depth_km: "5.4",
      date: 1741289500,
      location: "https://www.google.com/maps?q=37.4471,35.8124",
      image: "https://tile.openstreetmap.org/10/600/390.png",
      lat: "37.4471",
      lng: "35.8124"
    }
    // Buraya istediğin kadar veri ekleyebilirsin
  ];

  const query = req.query.deprem?.toLowerCase(); // Örneğin: ?deprem=adana

  if (query) {
    const filtreli = veriler.filter(dep =>
      dep.city.toLowerCase().includes(query) ||
      dep.area.toLowerCase().includes(query)
    );
    return res.status(200).json(filtreli);
  }

  res.status(200).json(veriler); // Sorgu yoksa tüm veriyi döner
}
