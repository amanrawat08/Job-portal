import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    title: "Jobs",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Mark Adair",
    role: "Business",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Company",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Court Henry",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    title: "Candidate",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Jacob Johns",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

// ⭐ Rating
const StarRating = ({ count }) => (
  <div className="flex gap-1 text-yellow-400">
    {[...Array(count)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

// ⬅️➡️ Arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer hover:bg-teal-500 hover:text-white"
  >
    <ChevronRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer hover:bg-teal-500 hover:text-white"
  >
    <ChevronLeft size={20} />
  </div>
);

// 💬 Card
const TestimonialCard = ({ item }) => (
  <div className="p-3">
    <div className="relative bg-white border rounded-xl p-6 shadow-sm h-full">

      <div className="flex justify-between mb-3">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <StarRating count={item.rating} />
      </div>

      <p className="text-gray-600 text-sm mb-6">
        {item.text}
      </p>

      {/* Arrow shape */}
      <div className="absolute bottom-[-10px] left-10 w-5 h-5 bg-white border-l border-b rotate-45"></div>

      <div className="flex items-center gap-3 mt-6">
        <img
          src={item.image}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  </div>
);

// 🚀 Main Component
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">

        {/* FIXED className */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold capitalize">
            Our <span className="text-teal-500">Happy</span> Customer
          </h1>
          <p className="text-gray-500 mt-2">
            we know how easy it is to get overwhelmed
          </p>
        </div>

      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;