import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="site-header header mo-left header-transparent">
			<div className="sticky-header main-bar-wraper navbar-expand-lg">
				<div className="main-bar clearfix ">
					<div className="container clearfix">
						<div className="logo-header  logo-white">
							<NavLink to="/">
								<img
									className="logo-3"
									src="/assets/images/logo_header.png"
									alt="Dinas PUTR Kabupaten Sumedang"
								/>
							</NavLink>
						</div>

						<button
							className="navbar-toggler collapsed navicon justify-content-end"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span></span>
							<span></span>
							<span></span>
						</button>

						<div className="extra-nav">
							<div className="extra-cell">
								<a
									href="https://lapor.go.id/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/assets/images/logo-lapor.png"
										alt="SP4N LAPOR!"
										width={125}
										style={{ margin: 0, padding: 0 }}
									/>
								</a>
							</div>
						</div>
						<div
							className="header-nav navbar-collapse collapse justify-content-end"
							id="navbarNavDropdown"
						>
							<div className="logo-header">
								<a href="/">
									<img
										src="/assets/images/logo_header_white.png"
										alt=""
									/>
								</a>
							</div>
							<ul className="nav navbar-nav navbar">
								<li className="active">
									<a href="/">
										<span>Beranda</span>
									</a>
									{/* <NavLink to="/">Beranda</NavLink> */}
								</li>
								<li className="active">
									<a href="javascript:void(0);">
										<span>Profil</span>
										<i className="fa fa-chevron-down"></i>
									</a>
									<ul className="sub-menu">
										<li>
											<NavLink to="/profile/about">
												Gambaran Umum
											</NavLink>
											{/* <a href="/profile/about">
												Gambaran Umum
											</a> */}
										</li>
										<li>
											<NavLink to="/profile/vision">
												Visi &amp; Misi
											</NavLink>
											{/* <a href="/profile/vision">
												Visi &amp; Misi
											</a> */}
										</li>
										<li>
											<NavLink to="/profile/structure">
												Struktur Organisasi
											</NavLink>
											{/* <a href="/profile/structure">
												Struktur Organisasi
											</a> */}
										</li>
										<li>
											<NavLink to="/profile/jobdesc">
												Tugas Pokok &amp; Fungsi
											</NavLink>
										</li>
										<li>
											<NavLink to="/profile/program">
												Program &amp; Kegiatan
											</NavLink>
										</li>
										<li>
											<NavLink to="/profile/unit">
												Unit Pelaksana Teknis (UPT)
											</NavLink>
										</li>
									</ul>
								</li>
								<li>
									<NavLink to="/news">Berita</NavLink>
								</li>
								<li>
									<a href="javascript:void(0);">
										<span>Pelayanan Publik</span>
										<i className="fa fa-chevron-down"></i>
									</a>
									<ul className="sub-menu">
										<li>
											<NavLink to="/services/product">
												Produk Layanan
											</NavLink>
										</li>
										<li>
											<NavLink to="/services/report">
												Pengaduan Publik
											</NavLink>
										</li>
										<li>
											<a
												href="https://sumedangkab.go.id/survey_kepuasan/skpd/6"
												target="_blank"
											>
												Survey Kepuasan Masyarakat (SKM)
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="javascript:void(0);">
										<span>Publikasi</span>
										<i className="fa fa-chevron-down"></i>
									</a>
									<ul className="sub-menu">
										<li>
											<a href="#">
												Regulasi
												<i className="fa fa-angle-right"></i>
											</a>
											<ul className="sub-menu">
												<li>
													<a href="#">Pusat</a>
												</li>
												<li>
													<a href="#">Daerah</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="contact-us-2.html">
												Dokumen Publik
											</a>
										</li>
									</ul>
								</li>
								<li>
									<NavLink to="/ppid">
										<span>PPID</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/gallery">
										<span>Galeri</span>
									</NavLink>
								</li>
							</ul>
							<div className="dlab-social-icon">
								<ul>
									<li>
										<a
											className="fab fa-facebook-f"
											href="https://www.facebook.com/dinaspuprsumedang"
											target="_blank"
											rel="noopener noreferrer"
										></a>
									</li>
									<li>
										<a
											className="fab fa-youtube"
											href="https://www.youtube.com/channel/UC9F4VZvOnU3ro8y7jXB6MuQ"
											target="_blank"
											rel="noopener noreferrer"
										></a>
									</li>
									<li>
										<a
											className="fab fa-instagram"
											href="https://www.instagram.com/dinas.putr.kabupaten.sumedang"
											target="_blank"
											rel="noopener noreferrer"
										></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
