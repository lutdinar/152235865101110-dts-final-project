import React from "react";
import Header from "../templates/frontend/Header";
import Footer from "../templates/frontend/Footer";

const Error404 = () => {
    return (
        <div>
            <Header />
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-primary-dark"
                     style={{backgroundImage: `url(/assets/frontend/images/banner/bnr1.jpg)`}}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1>404</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Beranda</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">404</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error404;