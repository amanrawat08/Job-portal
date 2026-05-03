import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer hover:bg-teal-500 hover:text-white"
  >
    <ChevronRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer hover:bg-teal-500 hover:text-white"
  >
    <ChevronLeft size={20} />
  </div>
);

function Blog_Section() {
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
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <section className="my-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">
            From the <span className="text-[#5bb807]">blog</span>
          </h1>
          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            To choose your trending job dream & to make future bright.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="px-2">
                <article className="h-full flex flex-col justify-between border p-5 rounded-md bg-white shadow-sm hover:shadow-md transition">
                  
                  {/* Top */}
                  <div>
                    <div className="flex items-center gap-x-3 text-xs text-gray-500">
                      <time>Mar 16, 2020</time>
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        Marketing
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-gray-900 hover:text-[#5bb807] cursor-pointer">
                      Boost your conversion rate
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                      Illo sint voluptas. Error voluptates culpa eligendi.
                      Hic vel totam vitae illo.
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center gap-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5"
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Michael Foster
                      </p>
                      <p className="text-xs text-gray-500">
                        Co-Founder / CTO
                      </p>
                    </div>
                  </div>

                </article>
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Blog_Section;