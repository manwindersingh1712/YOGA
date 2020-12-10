import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../utils/css/slider.css";
import React from "react";
import Slider from "react-slick";

const photos = [
  {
    name: "Photo 1",
    url:
      "https://www.fitnessindiashow.com/wp-content/uploads/2019/11/wallpaper-of-yoga-poses-hd.jpg",
  },
  {
    name: "Photo 2",
    url:
      "https://c1.wallpaperflare.com/preview/678/319/733/people-woman-yoga-meditation.jpg",
  },
  {
    name: "Photo 3",
    url:
      "https://i.pinimg.com/originals/05/38/9c/05389c508a40f5dbe1de8d68d3f6722f.jpg",
  },
];

class SliderClass extends React.Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      className: "slides",
    };

    return (
      <div>
        <Slider {...settings}>
          {photos.map((p) => {
            return (
              <div className="slider_img">
                <img src={p.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SliderClass;
