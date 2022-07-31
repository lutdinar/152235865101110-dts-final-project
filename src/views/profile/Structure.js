import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function Structure(props) {
	return (
		<div>
			<Header />
			<div className="page-content bg-white">
				<div
					className="dlab-bnr-inr style-1 bg-secondary"
					style={{
						background: `url('/assets/frontend/images/banner/bnr2.png'), var(--gradient-sec)`,
						backgroundSize: "cover",
					}}
				>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Struktur Organisasi</h1>
							<nav
								aria-label="breadcrumb"
								className="breadcrumb-row style-1"
							>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">Profil</li>
									<li
										className="breadcrumb-item active"
										aria-current="page"
									>
										Struktur Organisasi
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section
					class="content-inner-3 m-b80 wow fadeIn"
					data-wow-duration="2s"
					data-wow-delay="0.2s"
				>
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="video-bx style-1 overlay-black-light dlab-img-effect zoom zoom-slow">
									<img
										src="/assets/frontend/images/video/pic1.jpg"
										alt="Struktur Organisasi Dinas PUTR Kabupaten Sumedang"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Structure;
