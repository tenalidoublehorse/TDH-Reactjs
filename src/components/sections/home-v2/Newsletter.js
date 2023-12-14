import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <section className="section bg-center bg-cover dark-overlay" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/Tenali-Double-Horse-NewsLetter.png)" }}>
                <div className="container">
                    <div className="ct-newsletter">
                        <div className="section-title-wrap section-header">
                            <h2 className="title">Join Our Newsletter</h2>
                            <p className="subtitle">
                            At Tenali Double Horse we're creating a world where accessibility of quality and health in return for trust is a norm.
        </p>
                        </div>
                        <form method="post">
                            <input type="email" className="form-control" placeholder="Enter your email address" />
                            <button type="submit" className="btn-custom primary" name="button"> Submit <i className="far fa-paper-plane" /> </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Newsletter;