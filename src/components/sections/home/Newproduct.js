import React, { Component } from 'react';
import Slider from 'react-slick';

class AppleFactsSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          id: 1,
          title: 'The Producers',
          text: 'The top apple producers around the world are China, United States, Turkey, Poland and Italy.',
          imageUrl: 'https://images.unsplash.com/photo-1458011170811-0c83ce240f99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b4e45d40741267302ef75900c03b756&auto=format&fit=crop&w=800&q=90',
        },
        {
          id: 2,
          title: 'The Size',
          text: 'Apple varieties range in size from a little larger than a cherry to as large as a grapefruit.',
          imageUrl: 'https://images.unsplash.com/photo-1506277548624-5d9498cde122?ixlib=rb-0.3.5&s=9a53092137398e7219bbfc3acb936073&auto=format&fit=crop&w=800&q=90',
        },
        {
          id: 3,
          title: 'The Time',
          text: 'Apple trees take four to five years to produce their first fruit.',
          imageUrl: 'https://images.unsplash.com/photo-1503327655231-9a047d4772b6?ixlib=rb-0.3.5&s=4164f11f73a7f46defa0da9db7e76443&auto=format&fit=crop&w=800&q=90',
        },
        // Add more slides as needed
      ],
    };
  }

  render() {
    const sliderSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    };

    return (
      <div className="slider__wrapper">
        <Slider {...sliderSettings}>
          {this.state.slides.map((slide) => (
            <div key={slide.id} className="slider__content">
              <div className="slider__text">
                <span>{slide.id}</span>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
              <figure className="slider__image">
                <img src={slide.imageUrl} alt={slide.title} className='img-responsive' />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default AppleFactsSlider;
