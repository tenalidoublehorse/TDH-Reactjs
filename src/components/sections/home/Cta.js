import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <div className="fluid-container gap-section mb-5 mt-5 ">
                <div className="section text-center cta bg-cover bg-center dark-overlay dark-overlay-2 alignments " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/youtube-thumbnail.png)"}}>
                    <div className="section-title-wrap section-header text-center ">
                        {/* <h5 className="custom-primary">Order Online</h5>
                        <h2 className="title text-white">Get 10% Off Your First Order</h2> */}
                        <a href={"https://www.youtube.com/watch?v=6eZxPOOegTg"} rel="noopener noreferrer" target="_blank"><i class="fas fa-play-circle" style={{color:'white',fontSize:'90px',padding:'50px'}}/></a>
                        {/* <p className="subtitle text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p> */}
                    </div>
                    
                    
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <a href={"https://www.youtube.com/@TenaliDoubleHorse"}  target='_blank'  rel="noopener noreferrer"   className="btn-custom mt-5 ">View more</a>
                </div>
                {/* <Link to="/menu-v1" className="btn-custom shadow-none ">Order Online</Link> */}
            </div>
        );
    }
}

export default Cta;