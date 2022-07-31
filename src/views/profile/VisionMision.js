import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";
// import $ from "jquery";

function VisionMision(props) {
	useEffect(() => {}, []);

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
							<h1>Visi &amp; Misi</h1>
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
										Visi &amp; Misi
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section class="content-inner">
					<div class="container">
						<div class="row">
							<div class="col-xl-4 col-lg-4 m-b30">
								<aside class="side-bar sticky-top">
									<div
										class="widget_contact"
										style={{
											backgroundImage: `url(https://sumedangkab.go.id/data/images/header/header_2.JPEG)`,
										}}
									>
										<div class="widget-content">
											<img
												src="/assets/frontend/images/question.png"
												width="80"
												alt=""
											/>
											<h4>Anda perlu bantuan?</h4>
											<div class="phone-number">
												<a href="#">+62 (261) 201240</a>
											</div>
											<div class="email">
												<a href="#">
													dinas_pupr@sumedangkab.go.id
												</a>
											</div>
											<div class="link-btn">
												<NavLink
													to="/services/report"
													className="btn btn-primary gradient"
												>
													Hubungi Kami
												</NavLink>
											</div>
										</div>
									</div>
								</aside>
							</div>
							<div class="col-xl-8 col-lg-8">
								<div class="row">
									<div
										class="card-container col-lg-12 wow fadeInUp"
										data-wow-duration="2s"
										data-wow-delay="0.2s"
									>
										<div class="dlab-blog style-2 m-b50">
											<div class="dlab-info">
												<p
													class="m-b0"
													style={{ fontSize: "18px" }}
												>
													"Terwujudnya Masyarakat
													Sumedang yang Sejahtera,
													Agamis, Maju, Profesional
													dan Kreatif (SIMPATI) pada
													tahun 2023" - Bupati
													Sumedang
												</p>
												<div class="dlab-meta mb-0">
													<ul>
														<li
															class="post-date"
															style={{
																fontSize:
																	"18px",
																fontWeight:
																	"bold",
															}}
														>
															VISI
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div
										class="card-container col-lg-12 wow fadeInUp"
										data-wow-duration="2s"
										data-wow-delay="0.2s"
									>
										<div class="dlab-blog style-2 m-b50">
											<div class="dlab-info">
												<p
													class="m-b0"
													style={{ fontSize: "18px" }}
												>
													"Mengembangkan wilayah
													ekonomi didukung dengan
													peningkatan infrastruktur
													dan daya dukung lingkungan
													serta penguatan budaya dan
													kearifan lokal"
												</p>
												<div class="dlab-meta mb-0">
													<ul>
														<li
															class="post-date"
															style={{
																fontSize:
																	"18px",
																fontWeight:
																	"bold",
															}}
														>
															MISI
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
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

export default VisionMision;
