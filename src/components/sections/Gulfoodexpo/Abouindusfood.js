import React, { Component,Link } from 'react';

const images_src = ["gulfood-1.jpg", "gulfood-2.jpg", "gulfood-3.jpg", "gulfood-4.jpg", "gulfood-5.jpg"];
const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images_src.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow_1">
      <div
        className="slideshowSlider_1"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images_src.map((img, index) => (
          <div
            className="slide_1"
            key={index}
          ><img src={ process.env.PUBLIC_URL + "/assets/img/gulfood/" + img }></img></div>
        ))}
      </div>

      { /*<div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
        </div> */ }
    </div>
  );
}

class Abouindusfood extends Component {
    render() {
        return (
            <div className="section" >
                <div className="container-fluid">
                {/* <div className="section-title-wrap section-header text-center ">
                    <h2 className="title">Indulge in Tradition and Convenience</h2>
                    <p className="subtitle">
                    Explore TDH Foods, our renowned subsidiary brand known for iconic Sunnundalu and instant mixes like dosa, idly, and vada. Elevate your culinary journey with authentic flavors and easy preparation.
                    </p>
                </div> */}
                    <div className="row ">
                        <div className='col-md-6'>
                            

                        </div>
                        <div className="col-lg-6 mb-lg-30  d-flex flex-column order-1 order-lg-2 tdh-shop aligen-items-center my-auto" >
                        <Slideshow></Slideshow>
                        </div>

                        <div className='col-md-2'></div>
                        <div className="col-lg-6 alignments d-flex flex-column order-1 order-lg-1">
                        <div className="">
                                <h2 className='title text-left' style={{fontSize:'33px'}}>Join Us at Gulfood Expo</h2>
                                { /*<h4 style={{ color: "#ea202f" }}>Join Us at Gulfood Expo</h4> style={{ textAlign: 'center' }}*/ }
                                <p className="subtitle" >
                                
Tenali Double Horse is thrilled to be participating in the Gulfood Expo 2024, the world's largest annual food and beverage trade event! We invite you to join us at our booth to explore our latest products, engage with our team, and discover exciting business opportunities.

</p>
                                {/* <a  href="https://tdhfoodproducts.com/about/" rel="noopener noreferrer" target="_blank" class="btn-custom  shadow-none ">View More</a> */}


                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abouindusfood;