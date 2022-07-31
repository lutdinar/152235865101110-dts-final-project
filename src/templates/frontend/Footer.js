import React from "react";
import { Link } from "react-router-dom";
import SliderApp from "../../components/SliderApp";

export default function Footer() {
	return (
		<div>
			{/* <SliderApp /> */}
			<footer
				className="site-footer style-2"
				id="footer"
				style={{
					background: `url('/assets/frontend/images/background/bg4.png'), var(--gradient-sec)`,
					backgroundSize: "cover",
				}}
			>
				<div className="container">
					<div
						class="dlab-subscribe style-1 wow fadeInUp"
						data-wow-duration="2s"
						data-wow-delay="0.2s"
					>
						<div class="row align-items-center">
							<div class="col-lg-6">
								<h2 class="title">
									Informasi tentang Infrastruktur
								</h2>
							</div>
							<div class="col-lg-6">
								<form class="dzSubscribe">
									<div class="dzSubscribeMsg"></div>
									<div class="form-group">
										<div class="input-group">
											<a
												href="https://play.google.com/store/apps/details?id=com.sipitung"
												target="_blank"
											>
												<img src="/assets/images/playstore.png" />
											</a>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div
								className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div className="widget widget_about">
									<div className="footer-logo">
										<Link to="/">
											<img
												src="/assets/images/logo_header.png"
												alt=""
											/>
										</Link>
									</div>
									<p>
										Dinas Pekerjaan Umum dan Tata Ruang
										Kabupaten Sumedang.
										<br />
										Jalan R.A. Kartini No. 13, Regol Wetan,
										Kec. Sumedang Selatan, Kabupaten
										Sumedang
									</p>
									<div className="dlab-social-icon">
										<ul>
											<li>
												<a
													className="fab fa-facebook-f"
													href="https://www.facebook.com/dinaspuprsumedang"
													target="_blank"
												></a>
											</li>
											<li>
												<a
													className="fab fa-instagram"
													href="https://www.instagram.com/dinas.putr.kabupaten.sumedang"
													target="_blank"
												></a>
											</li>
											<li>
												<a
													className="fab fa-youtube"
													href="https://www.youtube.com/channel/UC9F4VZvOnU3ro8y7jXB6MuQ"
													target="_blank"
												></a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div
								className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div className="widget widget_services style-1">
									<h5 className="footer-title">Lihat Juga</h5>
									<ul>
										<li>
											<a href="/">Beranda</a>
										</li>
										<li>
											<Link to="/profile/jobdesc">
												Tugas Pokok &amp; Fungsi
											</Link>
										</li>
										<li>
											<Link to="/news">Berita</Link>
										</li>
										<li>
											<Link to="/services/report">
												Pengaduan Publik
											</Link>
										</li>
										<li>
											<Link to="/docs">
												Dokumen Publik
											</Link>
										</li>
										<li>
											<Link to="/gallery">Galeri</Link>
										</li>
									</ul>
								</div>
							</div>

							<div
								className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div className="widget widget_services style-3">
									<h5 className="footer-title">Pelayanan</h5>
									<ul>
										<li>
											<Link to="/services/product">
												Peralatan
											</Link>
										</li>
										<li>
											<Link to="/services/product">
												Laboratorium Bahan Konstruksi
											</Link>
										</li>
										<li>
											<Link to="/services/product">
												Peil Banjir
											</Link>
										</li>
										<li>
											<Link to="/services/product">
												Informasi Ruang
											</Link>
										</li>
										<li>
											<Link to="/services/product">
												URCTL
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div
								className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="0.8s"
							>
								<div className="widget widget_services style-1">
									<h5 className="footer-title">
										Link Terkait
									</h5>
									<ul>
										<li>
											<a
												href="https://sumedangkab.go.id/"
												target="_blank"
											>
												Pemerintah Daerah Kabupaten
												Sumedang
											</a>
										</li>
										<li>
											<a href="https://tahu.sumedangkab.go.id/">
												Tahu Sumedang
											</a>
										</li>
										<li>
											<a
												href="https://e-office.sumedangkab.go.id/"
												target="_blank"
											>
												E-Office
											</a>
										</li>
										<li>
											<a
												href="https://sipitung.sumedangkab.go.id/"
												target="_blank"
											>
												SIPITUNG
											</a>
										</li>
										<li>
											<a
												href="https://urctl.sumedangkab.go.id/"
												target="_blank"
											>
												URCTL
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div
								className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="1.0s"
							>
								<div className="widget widget_getintuch">
									<h5 className="footer-title">
										Kontak Kami
									</h5>
									<ul>
										<li>
											<i className="fa fa-phone gradient"></i>
											<span>
												+62 (261) 201240
												<br />
												+62812-2414-6370
											</span>
										</li>
										<li>
											<i className="fa fa-envelope gradient"></i>
											<span>
												info@sumedangkab.go.id <br />
												dinas_pupr@sumedangkab.go.id
											</span>
										</li>
										<li>
											<i className="fas fa-map-marker-alt gradient"></i>
											<span>
												Jalan R.A. Kartini No. 13, Regol
												Wetan, Kec. Sumedang Selatan,
												Kab. Sumedang, Jawa Barat 45311
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-12 text-center">
								<span className="copyright-text">
									Copyright © 2022{" "}
									<a
										href="https://www.instagram.com/lutdinar"
										target="_blank"
										className="text-white"
										title="Lut Dinar Fadila, ST"
									>
										Lut Dinar Fadila
									</a>
									. All rights reserved &amp; Powered by{" "}
									<a
										href="https://reactjs.org"
										target="_blank"
										title="React"
									>
										<i class="lab la-react"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
