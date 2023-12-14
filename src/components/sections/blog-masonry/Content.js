import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from '../../../api/axios';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import Masonry from 'react-masonry-component';

function Content() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
            debugger;
                const response = await axios.get('api/blog/');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                debugger;
                console.error('Error fetching blog post data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, {});

    const handleClick = (event) => {
        const paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        setLoading(true);

        setTimeout(() => {
            setCurrentPage(Number(event.target.getAttribute('data-page')));
            setLoading(false);
        }, 2000);
    };

    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

    const renderitems = currentitems.map((item, i) => (
        <div key={i} className="col-lg-4 masonry-item">
            <article className="post smbg2 px-4 py-3 blog-post">
                <h3 className="post-title">
                    <Link to={`/blog-single/${item.id}`}>{item.title}</Link>
                </h3>
                <div className="post-meta">
                    <span> <i className="far fa-calendar" /> <Link to={`/blog-single/${item.id}`}>{item.postdate}</Link> </span>
                    <span> <i className="far fa-user" /> <Link to={`/blog-single/${item.id}`}>{item.name}</Link> </span>
                </div>
                <div className="post-thumbnail">
                    <Link to={`/blog-single/${item.id}`}>
                        <img src={process.env.PUBLIC_URL +'http://127.0.0.1:8000'+item.masonryimage} alt={item.title} />
                    </Link>
                </div>
                <div className="post-desc">
                    <p>{item.shortdesc}</p>
                </div>
                <Link to={`/blog-single/${item.id}`} className="read-more1 btn-custom shadow-none">Read More</Link>
            </article>
        </div>
    ));

    const pageNumbers = Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => i + 1);

    const renderPagination = pageNumbers.map((number) => {
        const activeCondition = currentPage === number ? 'active' : '';

        return (
            <li key={number} className={classNames('page-item', { active: activeCondition })}>
                <Link
                    className="page-link"
                    to="#"
                    data-page={number}
                    onClick={handleClick}
                >
                    {number}
                </Link>
            </li>
        );
    });

    const imagesLoadedOptions = {
        itemSelector: '.masonry-item',
        percentPosition: true,
        resize: true,
        fitWidth: true,
    };

    return (
        <div className="section section-padding pagination-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Masonry className="row masonry" imagesLoadedOptions={imagesLoadedOptions}>
                            {loading ? (
                                <div className="col-12">
                                    <Loader />
                                </div>
                            ) : (
                                renderitems
                            )}
                        </Masonry>
                        {pageNumbers.length > 1 && (
                            <ul className="pagination mb-0">
                                {currentPage > 1 && (
                                    <li className="page-item">
                                        <Link
                                            className="page-link"
                                            to="#"
                                            data-page={currentPage - 1}
                                            onClick={handleClick}
                                        >
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </Link>
                                    </li>
                                )}
                                {renderPagination}
                                {currentPage < pageNumbers.length && (
                                    <li className="page-item">
                                        <Link
                                            className="page-link"
                                            to="#"
                                            data-page={currentPage + 1}
                                            onClick={handleClick}
                                        >
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
