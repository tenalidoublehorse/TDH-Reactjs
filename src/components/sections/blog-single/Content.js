import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlog } from '../../../helper/Bloghelper';
import $ from 'jquery';
import 'magnific-popup';
import Relatedblog from '../../layouts/Relatedblog';
import axios from '../../../api/axios';

function Content(props) {
    const [item, setItem] = useState({});
    const { blogId } = props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                debugger;
                const response = await axios.get(`api/blogsingle/${blogId}`); 
                setItem(response.data);
            } catch (error) {
                debugger;
                console.error('Error fetching blog post data:', error);
            }
        };

        fetchData();
    },[blogId]);

    useEffect(() => {
        function popup() {
            $('.gallery-thumb').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
            });
        }
        popup();
    }, []);
     let x = item;
     

    return (
        <div className="post-single">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="post-content-wrapper">
                            <div className="about-author-content">
                                                <h5>
                                                    <Link to="#" title={item.title}>
                                                        {item.title}
                                                    </Link>
                                                </h5>
                                                {/* <p>{item.author.aboutauthor}</p> */}
                            </div>
                            <img
                                                src={process.env.PUBLIC_URL + 'http://127.0.0.1:8000' + item.image} // Remove the 'http://127.0.0.1:8000' part
                                                alt={item.name}
                            />
                                <div
                                    className="post-content"
                                    dangerouslySetInnerHTML={{ __html: item.longdescription }}
                                />
                                <div className="section">
                                    
                                </div>
                                <Relatedblog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
