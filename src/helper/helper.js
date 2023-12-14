import React from 'react';

function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i className="fa fa-star" key={i}></i>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating ; i++) {
            stars[i] = <i className="fa fa-star active" key={i}></i>;
        }
    }
    return stars;
}
export { Rating };
