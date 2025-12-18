import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: "Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
    { id: 2, name: "Smart Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" },
    { id: 3, name: "Laptop Backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop" },
    { id: 4, name: "Bluetooth Speaker", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop" },
    { id: 5, name: "USB-C Cable", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop" },
    { id: 6, name: "Phone Case", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop" },
    { id: 7, name: "Keyboard", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop" },
    { id: 8, name: "Mouse", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop" },
    { id: 9, name: "Webcam", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop" },
    { id: 10, name: "Monitor", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop" }
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
            <h1 className="text-white text-4xl font-bold z-10">
              Our Products
            </h1>
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
    </>
  );
};

export default Products;
