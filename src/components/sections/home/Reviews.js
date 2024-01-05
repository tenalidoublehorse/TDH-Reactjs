import React from 'react';
import Slider from 'react-slick';
class Reviews extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
      return (
        <div className="demo" >
          <div className="container-fluid">
          <div className="section-title-wrap section-header text-center">
                        {/* <h5 className="custom-primary">Voices of Delight</h5> */}
                        <h2 className="title">Customer Testimonials</h2>
                        <p className="subtitle largefont">
                        Discover the experiences that define Tenali Double Horse through the words of our valued customers. Read their authentic feedback and join the chorus of satisfied voices.
                        </p>
                    </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div>
                  <Slider {...settings}>
                    <div className="testimonial ">
                      <div className="testimonial-content border-0 shadow rounded-3">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left"></i>
                        </div>
                        <p className="description">
                        Quality of urad dal is really good...I love the laddu made of urad dal..it really tasted very well...love it...And more over the CSR activity to help women is a wonderful thought by TDH hats off to team..
                        </p>
                        <h3 className="title">-Jabeen Kouser</h3>
                      </div>
                      
                      {/* <span className="post">Web Developer</span> */}
                    </div>
    
                    <div className="testimonial ">
                      <div className="testimonial-content border-0 shadow rounded-3">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left"></i>
                        </div>
                        <p className="description">
                        Quality was great and we got the goods at a reasonable price. We're glad that the taste was good. Everything's hygienic as well. Will definitely repurchase later.
                        </p>
                        <h3 className="title">-Ravi Kumar</h3>
                      </div>
                      {/* <h3 className="title">bhaskar donepudi</h3> */}
                      {/* <span className="post">Web Developer</span> */}
                    </div>
                    <div className="testimonial ">
                      <div className="testimonial-content border-0 shadow rounded-3">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left"></i>
                        </div>
                        <p className="description">
                        Very Good Products From TDH Group.Idli Rava.Sunundalu .Risika Pickles.avakaya Tamoto.gongoora.. Are Homely Made . Very Taste..
                        </p>
                        <h3 className="title">-Kammari Mahender</h3>
                      </div>
                      
                      {/* <span className="post">Web Developer</span> */}
                    </div>
                    <div className="testimonial ">
                      <div className="testimonial-content border-0 shadow rounded-3">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left"></i>
                        </div>
                        <p className="description">
                        It's good products off all rishika sunnudalu and idley ravva,  minappau and pickles also touching to mother receipy like.
                        </p>
                        <h3 className="title">-Rajgopal Akuthota</h3>
                      </div>
                  
                      {/* <span className="post">Web Developer</span> */}
                    </div>
    
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Reviews;
  