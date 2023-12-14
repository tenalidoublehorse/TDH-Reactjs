import React, { Component } from 'react';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          services: [
            {
              title: 'Phir Se Udaan',
              imageSrc: 'assets/img/banner/csr.png',
              description: ' Phir Se Udaan is an initiative by your favourite Tenali Double Horse . With a vision to empower women inside and outside the house,',
             
              link: '/#Csrgallery',
            }
          ],
        };
      }
    
      render() {
        return (
          <section className="section bg-light ">
            <div className="container">
              <div className="d-flex flex-column gap-3 justify-content-center text-center">
                <h6 className="custom-primary text-center font-2">Empowering Our Community</h6>
                {/* <h3 className="text-black font-1 lh-1 fw-semibold">Providing Quality Senior Care</h3>
                <p className="text-gray mx-auto" style={{ maxWidth: '768px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dolor felis. In ligula
                  purus, imperdiet ac est nec, tempus varius nisl. Integer et venenatis odio. Fusce enim lectus,
                  gravida ut justo sed.
                </p> */}
                <div className="row row-cols-1 row-cols-lg-3">
                  {this.state.services.map((service, index) => (
                    <div className="col" key={index}>
                      <div className="card p-3 with-border-bottom border-0 shadow rounded-3">
                        <img src={service.imageSrc} className="card-img-top rounded-3" alt="..." />
                        <div className="card-body">
                          <h5 className="font-1 fw-bold custom-primary">{service.title}</h5>
                          <p className="text-gray">{service.description}</p>
                          <div className=" csr d-flex justify-content-center">
                            <a type="button" href={service.link} className="btn post-button font-2   text-custom d-flex flex-row align-items-center gap-2">
                              Read More <i className=" bg-custom fas fa-arrow-right  mt-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
               
              </div>
            </div>
          </section>
        );
      }
    }


export default BlogPost;
