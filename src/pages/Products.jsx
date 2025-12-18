const Products = () => {
  const items = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "USB-C Cable",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Phone Case",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Keyboard",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Mouse",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Webcam",
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
    },
    {
      id: 10,
      name: "Monitor",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    },
    {
      id: 11,
      name: "Desk Lamp",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    },
    {
      id: 12,
      name: "Water Bottle",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
    },
    {
      id: 13,
      name: "Notebook",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=300&fit=crop",
    },
    {
      id: 14,
      name: "Pen Set",
      image:
        "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=300&h=300&fit=crop",
    },
    {
      id: 15,
      name: "Coffee Mug",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop",
    },
    {
      id: 16,
      name: "Plant Pot",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop",
    },
    {
      id: 17,
      name: "Wall Clock",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300&h=300&fit=crop",
    },
    {
      id: 18,
      name: "Desk Organizer",
      image:
        "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=300&h=300&fit=crop",
    },
    {
      id: 19,
      name: "Table Fan",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    },
    {
      id: 20,
      name: "Storage Box",
      image:
        "https://images.unsplash.com/photo-1600493572592-5ed44598b1eb?w=300&h=300&fit=crop",
    },
  ];

  return (
    <>
      <section className="font-sans">
        <div className="relative w-full h-64 md:h-96">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/6821437/pexels-photo-6821437.jpeg?_gl=1*1ngmhw0*_ga*MTA4NTUwMzU4Ny4xNzY1ODg3OTQx*_ga_8JE65Q40S6*czE3NjU5NTM1NDkkbzMkZzEkdDE3NjU5NTM2MDckajIkbDAkaDA.')`,
            }}
          >
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider relative z-10">
              Our Products
            </h1>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <a href={`/product/${product.id}`} className="block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded mb-3 hover:opacity-90 transition"
                  />
                  <h3 className="text-center font-medium text-gray-800 mb-3 hover:text-blue-600 transition">
                    {product.name}
                  </h3>
                </a>
                <a href="/item" className="block">
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Add
                  </button>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Show More
            </button>
          </div>
        </div>
      </div>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        {/* The entire area will be a solid blue color */}
      </section>
    </>
  );
};
export default Products;
