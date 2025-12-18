import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Pool Light - Blue LED",
      image:
        "https://media.istockphoto.com/id/1550110756/photo/luxury-patio-with-a-pool-at-night.jpg?s=612x612&w=0&k=20&c=vy3McsRjNNmW_cKhZPF1mM0scSn3cPS-1jhs_x3pJ2w=",
    },
    {
      id: 2,
      name: "Pool Light - RGB Color",
      image:
        "https://media.istockphoto.com/id/1204560807/photo/led-light-application-for-swimming-pool-underwater-lighting.jpg?s=612x612&w=0&k=20&c=vAXvVUS-9tsR5O_seQwruJjZeBIwik6xMsodZZAZt1Y=",
    },
    {
      id: 3,
      name: "Pool Light - Underwater",
      image:
        "https://media.istockphoto.com/id/1452855533/photo/a-luxury-swimming-pool-with-lighting-in-night.jpg?s=612x612&w=0&k=20&c=AxNHN_vt_hjEoAfrIBxCe7xQn9iyiBldS_tHdgzRWOs=",
    },
    {
      id: 4,
      name: "Pool Light - Floating",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Spa Light - Warm White",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Spa Light - Ambient",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Spa Light - Color Therapy",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "LED Bulb - White",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "LED Bulb - Smart RGB",
      image:
        "https://images.unsplash.com/photo-1550985616-10810253b84d?w=300&h=300&fit=crop",
    },
    {
      id: 10,
      name: "LED Bulb - Dimmable",
      image:
        "https://images.unsplash.com/photo-1567894315497-688c6d977d82?w=300&h=300&fit=crop",
    },
    {
      id: 11,
      name: "Bulb - Edison Style",
      image:
        "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&h=300&fit=crop",
    },
    {
      id: 12,
      name: "Bulb - Vintage Filament",
      image:
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=300&h=300&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="font-sans">
        <div className="relative w-full h-64 md:h-96">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6821437/pexels-photo-6821437.jpeg')",
            }}
          >
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold z-10">Our Products</h1>
          </div>
        </div>
      </section>

      {/* Products */}
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate("/item")}
              className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3 hover:opacity-90 transition"
              />

              <h3 className="text-center font-medium text-gray-800 mb-3 hover:text-blue-600 transition">
                {product.name}
              </h3>

              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Description
              </button>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        {/* The entire area will be a solid blue color */}
      </section>
    </>
  );
};

export default Products;
