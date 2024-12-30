import React from "react";
import img1 from "../../assets/15.png";
import img2 from "../../assets/16.png";
import img3 from "../../assets/17.png";
import img4 from "../../assets/18.png";
import img5 from "../../assets/19.png";
import img6 from "../../assets/20.png";
import img7 from "../../assets/21.png";
import img8 from "../../assets/22.png";

const products = [
  {
    id: 1,
    image: img1,
    alt: "Vintage carousel horse",
  },
  {
    id: 2,
    image: img2,
    alt: "Colorful carousel seats",
  },
  {
    id: 3,
    image: img3,
    alt: "Ornate carousel ceiling",
  },
  {
    id: 4,
    image: img4,
    alt: "Vintage carousel in amusement park",
  },
  {
    id: 5,
    image: img5,
    alt: "Carousel horse close-up",
  },
  {
    id: 6,
    image: img6,  
    alt: "Whimsical tea set",
  },
  {
    id: 7,
    image: img7,
    alt: "Colorful ferris wheel",
  },
  {
    id: 8,
    image: img8,
    alt: "Carousel horses in motion",
  },
];

export default function ProductGrid() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden shadow-lg transition-all duration-300 hover:scale-95 hover:shadow-xl"
          >
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
