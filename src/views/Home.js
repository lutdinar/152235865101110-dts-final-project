import React from "react";

import Header from "../templates/frontend/Header";
import Footer from "../templates/frontend/Footer";
import CardNews from "../components/CardNews";

const Home = () => {
	return (
		<div>
			<Header />
			<div className="page-content bg-white">
				{/* SLIDER */}
				<div
					className="banner-three bg-primary p-t20"
					style={{
						background: `url('assets/frontend/images/background/bg5.png'), var(--gradient-sec)`,
					}}
				>
					<div className="container banner-inner">
						<div className="row align-items-center">
							<div className="col-xl-8 col-lg-7 col-md-7">
								<div className="banner-content text-white">
									<h6
										data-wow-delay="0.5s"
										data-wow-duration="3s"
										className="wow fadeInUp sub-title text-yellow"
									>
										Selamat datang di website
									</h6>
									<h1
										data-wow-delay="1s"
										data-wow-duration="3s"
										className="wow fadeInUp m-b15"
									>
										Dinas Pekerjaan Umum dan Tata Ruang
									</h1>
									<p
										data-wow-delay="1.5s"
										data-wow-duration="3s"
										className="wow fadeInUp m-b30"
									>
										Kabupaten Sumedang
										<br />
										Jalan R.A. Kartini no. 13, Kec. Sumedang
										Selatan
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-lg-5 col-md-5">
								{/* <div
									className="dz-media wow fadeIn"
									data-wow-delay="1s"
									data-wow-duration="3s"
								>
									<img
										src="/assets/images/kadis_putr-2.png"
										className="move-1"
										alt="Dinas PUTR Kabupaten Sumedang"
									/>
								</div> */}
								<div
									class="dlab-team style-1 wow fadeIn"
									data-wow-delay="1s"
									data-wow-duration="3s"
								>
									<div class="dlab-media dlab-img-effect zoom zoom-slow">
										<a href="javascript:void(0);">
											<img
												src="/assets/images/kadis_putr-2.png"
												alt="Dinas PUTR Kabupaten Sumedang"
												style={{ borderRadius: "8%" }}
											/>
										</a>
									</div>
									<div class="dlab-content">
										<div class="clearfix">
											<h4 class="dlab-name">
												Ir. Deni Rifdriana, MM.
											</h4>
											<span class="dlab-position">
												Kepala Dinas PUTR Kabupaten
												Sumedang
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* END SLIDER */}

				{/* TARGET 2023 SECTION */}
				<section
					className="content-inner about-wraper-1"
					style={{
						background: `url(assets/frontend/images/background/bg17.png)`,
						backgroundSize: "contain",
						backgroundPosition: "center right",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="container">
						<div className="row align-items-center">
							<div
								className="col-lg-6 m-b30 wow fadeInLeft"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div className="dz-media left">
									<img
										src="assets/images/art_people_putr.PNG"
										alt="Dinas PUTR Kabupaten Sumedang"
									/>
								</div>
							</div>
							<div
								className="col-lg-6 m-b30 wow fadeInRight"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div className="section-head style-1">
									<h6 className="sub-title text-secondary m-b15 text-uppercase">
										Capain Kinerja
									</h6>
									<h2 className="title m-b20">Tahun 2023</h2>
									<p>
										Dinas Pekerjaan Umum dan Tata Ruang
										memiliki target yang ingin dicapai pada
										Tahun 2023 sesuai dengan Rencana
										Pembangunan Jangka Menengah Daerah
										(RPJMD) Kabupaten Sumedang.
									</p>
								</div>
								<ul className="list-check primary m-b30">
									<li>
										Persentase Tingkat Kondisi Jalan
										Kabupaten Mantap pada 91%.
									</li>
									<li>
										Get a view of events and trends. Be
										updated on our recent news.
									</li>
									<li>
										Finally, it all comes down to people.
										Creating a winning team.
									</li>
									<li>
										Get a view of events and trends. Be
										updated on our recent news.
									</li>
								</ul>
								{/* <a
									href="about-us-1.html"
									className="btn btn-secondary rounded-xl gradient"
								>
									Learn More
								</a> */}
							</div>
						</div>
					</div>
				</section>

				{/* IKU SECTION */}
				<section className="video-wraper-1">
					<div className="video-inner bg-gray">
						<div className="container">
							<div className="row align-items-center">
								<div
									className="col-lg-6 wow fadeInLeft d-lg-block d-none"
									data-wow-duration="2s"
									data-wow-delay="0.2s"
								>
									<div className="section-head style-3 mb-4">
										<h2 className="title">
											Indikator Kinerja Utama
										</h2>
									</div>
									<p>
										Terdapat 4 Indikator Kinerja Utama pada
										Dinas Pekerjaan Umum dan Tata Ruang
										Tahun 2021.
									</p>
									<ul className="list-check primary style-1 m-b30">
										<li className="font-15 font-w600 m-b0">
											Persentase Tingkat Kondisi Jalan
											Kabupaten Mantap.
										</li>
										<li className="font-15 font-w600 m-b0">
											Rasio Jaringan Irigasi.
										</li>
										<li className="font-15 font-w600 m-b0">
											Persentase Kesesuaian Peruntukkan
											Lahan dengan Tata Ruang.
										</li>
										<li className="font-15 font-w600 m-b0">
											Persentase Tersedianya Usaha Jasa
											Konstruksi yang Terstandarisasi.
										</li>
									</ul>
								</div>
								<div
									className="col-lg-6 wow fadeInRight"
									data-wow-duration="2s"
									data-wow-delay="0.4s"
								>
									<div className="video-bx style-2">
										<img
											// src="assets/frontend/images/video/pic2.jpg"
											alt=""
										/>
										<iframe
											class="mx-auto d-block"
											src="https://www.google.com/maps/embed?pb=!4v1655134441600!6m8!1m7!1sgeqtF-jz8OpidnFM1_DaSQ!2m2!1d-6.859286053308462!2d107.9227237399339!3f357.8154781335915!4f-4.9579296837939495!5f0.7820865974627469"
											width={"100%"}
											height={450}
											style={{ border: 0 }}
											allowfullscreen=""
											loading="lazy"
											referrerpolicy="no-referrer-when-downgrade"
											title="Kantor Dinas Pekerjaan Umum dan Tata Ruang Kabupaten Sumedang"
										></iframe>
										{/* <img
											src="assets/images/kadis_putr-2.png"
											alt=""
											style={{
												height: "450px",
												width: "85%",
											}}
										/> */}

										<a
											href="https://www.youtube.com/watch?v=JcvhR2aPI04"
											className="popup-youtube"
										>
											<i className="flaticon-play"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* COUNTER INFO SECTION */}
				<section class="counter-wraper bg-white half-bg">
					<div class="container">
						<div class="row counter-inner">
							<div
								class="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="icon-bx-wraper style-4 text-center m-b30">
									<div class="icon-bx-sm radius bg-green m-b20">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="las la-landmark"></i>
										</a>
									</div>
									<div class="icon-content">
										<span class="title">Unit Kerja</span>
										<h2 class="counter-title m-b0 text-secondary">
											<span class="counter">6</span>
										</h2>
									</div>
								</div>
							</div>
							<div
								class="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="icon-bx-wraper style-4 text-center m-b30">
									<div class="icon-bx-sm radius bg-yellow m-b20">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="las la-map-marked-alt"></i>
										</a>
									</div>
									<div class="icon-content">
										<span class="title">UPTD</span>
										<h2 class="counter-title m-b0 text-secondary">
											<span class="counter">11</span>
										</h2>
									</div>
								</div>
							</div>
							<div
								class="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div class="icon-bx-wraper style-4 text-center m-b30">
									<div class="icon-bx-sm radius bg-blue m-b20">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="las la-tools"></i>
										</a>
									</div>
									<div class="icon-content">
										<span class="title">
											Pelayanan Publik
										</span>
										<h2 class="counter-title m-b0 text-secondary">
											<span class="counter">17</span>
										</h2>
									</div>
								</div>
							</div>
							<div
								class="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.8s"
							>
								<div class="icon-bx-wraper style-4 text-center m-b30">
									<div class="icon-bx-sm radius bg-red m-b20">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="las la-user-friends"></i>
										</a>
									</div>
									<div class="icon-content">
										<span class="title">Pegawai</span>
										<h2 class="counter-title m-b0 text-secondary">
											<span class="counter">207</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SAKIP & IKU SECTION */}
				<section
					className="content-inner-2 m-t40 m-b40"
					style={{
						background: `url(/frontend/images/background/bg2.png)`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="container">
						<div className="inner-body">
							<div className="row">
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="bottom-content">
										<div className="text-head">
											<h5>capaian kinerja</h5>
										</div>
										<div className="text-content">
											<p>
												Capaian Kinerja Dinas Pekerjaan
												Umum dan Tata Ruang Kabupaten
												Sumedang Tahun 2021.
											</p>
										</div>
										<ul className="stats player-stats">
											<li>
												<i className="flaticon-startup"></i>
												<h6>SAKIP</h6>
												<span className="counter">
													76,083
												</span>
											</li>
											<li>
												<i className="flaticon-line-chart"></i>
												<h6>INDIKATOR UTAMA</h6>
												<span className="counter">
													5
												</span>
											</li>
											<li>
												<i className="flaticon-chart"></i>
												<h6>PROGRAM</h6>
												<span className="counter">
													354
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="top-content">
										<div className="progress-bx overflow-hidden mb-3">
											<div className="progress-info">
												<span className="title">
													Persentase Tingkat Kondisi
													Jalan Kabupaten Mantap
												</span>
												<span className="progress-value">
													83,213%
												</span>
											</div>
											<div className="progress mb-3">
												<div
													className="progress-bar wow fadeInLeft"
													data-wow-duration="2s"
													data-wow-delay="0.6s"
													style={{ width: "83.213%" }}
												></div>
											</div>
										</div>
										<div className="progress-bx overflow-hidden mb-3">
											<div className="progress-info">
												<span className="title">
													Rasio Jaringan Irigasi
												</span>
												<span className="progress-value">
													67,02%
												</span>
											</div>
											<div className="progress mb-3">
												<div
													className="progress-bar wow fadeInLeft"
													data-wow-duration="2s"
													data-wow-delay="0.6s"
													style={{ width: "67.02%" }}
												></div>
											</div>
										</div>
										<div className="progress-bx overflow-hidden mb-3">
											<div className="progress-info">
												<span className="title">
													Persentase Kesesuaian
													Peruntukkan Lahan dengan
													Tata Ruang
												</span>
												<span className="progress-value">
													75,3%
												</span>
											</div>
											<div className="progress mb-3">
												<div
													className="progress-bar wow fadeInLeft"
													data-wow-duration="2s"
													data-wow-delay="0.6s"
													style={{ width: "75.3%" }}
												></div>
											</div>
										</div>
										<div className="progress-bx overflow-hidden">
											<div className="progress-info">
												<span className="title">
													Persentase Tersedianya Usaha
													Jasa Konstruksi yang
													Terstandarisasi
												</span>
												<span className="progress-value">
													61,34%
												</span>
											</div>
											<div className="progress mb-3">
												<div
													className="progress-bar wow fadeInLeft"
													data-wow-duration="2s"
													data-wow-delay="0.6s"
													style={{ width: "61.34%" }}
												></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					class="content-inner-2"
					style={{
						backgroundImage: `url(/assets/frontend/images/background/bg17.png)`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div class="container">
						{/* <div class="section-head style-1 text-center">
							<h6 class="sub-title text-primary m-b15">
								Testimonial
							</h6>
							<h2 class="title"></h2>
						</div> */}
						<div class="row">
							<div class="col-md-12">
								<div class="testimonials-wraper-2">
									<div class="swiper-container testimonial-thumbs">
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<div class="testimonial-pic">
													<img
														src="/assets/images/bupati.jpeg"
														alt=""
													/>
													<div class="shape-bx"></div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-pic">
													<img
														src="/assets/images/wakil_bupati.jpg"
														alt=""
													/>
													<div class="shape-bx"></div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-pic">
													<img
														src="/assets/images/sekretaris_daerah.jpg"
														alt=""
													/>
													<div class="shape-bx"></div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-pic">
													<img
														src="/assets/images/kadis_putr-2.png"
														alt=""
													/>
													<div class="shape-bx"></div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-pic">
													<img
														src="/assets/images/sekretaris_putr.jpg"
														alt=""
													/>
													<div class="shape-bx"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="swiper-container testimonial-content">
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<div class="testimonial-4 quote-left">
													<div class="testimonial-text">
														<strong class="testimonial-name">
															Dr. H. Dony Ahmad
															Munir, S.T., M.M.
														</strong>
														<span class="testimonial-position text-secondary m-b20">
															Bupati
														</span>
														<p>
															Jika kita selaku ASN
															mempermudah urusan
															rakyat, maka Allah
															akan
															mempermudahurusan
															kita. Apabila kita
															sebagai ASN
															mengatasi keculitan
															rakyat, maka Allah
															akan mengatasi
															kesulitan kita.
														</p>
													</div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-4 quote-left">
													<div class="testimonial-text">
														<strong class="testimonial-name">
															H. Erwan Setiawan,
															SE.
														</strong>
														<span class="testimonial-position text-secondary m-b20">
															Wakil Bupati
														</span>
														<p>
															Setiap ASN harus
															disiplin waktu, ASN
															juga harus
															berhati-hati dalam
															masalah hukum. Ikuti
															Aturan dan berikan
															contoh yang baik
															kepada masyarakat.
														</p>
													</div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-4 quote-left">
													<div class="testimonial-text">
														<strong class="testimonial-name">
															Drs. Herman
															Suryatman, M.Si
														</strong>
														<span class="testimonial-position text-secondary m-b20">
															Sekretaris Daerah
														</span>
														<p>Innovate or Die.</p>
													</div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-4 quote-left">
													<div class="testimonial-text">
														<strong class="testimonial-name">
															Ir. Deni Rifdriana,
															M.M
														</strong>
														<span class="testimonial-position text-secondary m-b20">
															Kepala Dinas PUTR
														</span>
														<p>
															Peningkatan
															Infrastruktur di
															Wilayah Kabupaten
															Sumedang untuk
															meningkatkan
															Kesejahteraan &amp;
															Perekonomian
															masyarakat.
														</p>
													</div>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="testimonial-4 quote-left">
													<div class="testimonial-text">
														<strong class="testimonial-name">
															R. Sonny Nurgahara,
															S.T., S.Sos., M.Si.
														</strong>
														<span class="testimonial-position text-secondary m-b20">
															Sekretaris Dinas
															PUTR
														</span>
														<p>
															Suatu hari kelak
															namamu yang akan
															dicatat oleh anak
															dan cucu sebagai
															pahlawan Pembangunan
															di Kabupaten
															Sumedang.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="swiper-pagination"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* BIDANG / UNIT KERJA SECTION */}
				<section className="content-inner bg-white">
					<div className="container">
						<div className="section-head style-3 text-center">
							<h2 className="title">Unit Kerja</h2>
						</div>
						<div className="row">
							<div
								className="col-lg-4 col-md-6 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div className="icon-bx-wraper style-5 box-hover text-center m-b30 active">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="flaticon-office"></i>
										</span>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b15">
											Sekretariat
										</h4>
										<p className="m-b20">
											Mauris ut felis malesuada eros
											varius tristique a at orci. Nulla
											vulputate, leo sit amet rhoncus
											suscipit, enim ex venenatis ipsum,
											et porttitor.
										</p>
										<a
											href="services-details-3.html"
											className="btn btn-outline-primary"
										>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div className="icon-bx-wraper style-5 box-hover text-center m-b30">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="flaticon-coding"></i>
										</span>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b15">
											Bidang Bina Marga
										</h4>
										<p className="m-b20">
											Mauris ut felis malesuada eros
											varius tristique a at orci. Nulla
											vulputate, leo sit amet rhoncus
											suscipit, enim ex venenatis ipsum,
											et porttitor.
										</p>
										<a
											href="services-details-3.html"
											className="btn btn-outline-primary"
										>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 wow fadeInUp offset-lg-0 offset-md-3"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div className="icon-bx-wraper style-5 box-hover text-center m-b30">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="flaticon-laptop"></i>
										</span>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b15">
											Bidang Sumber Daya Air
										</h4>
										<p className="m-b20">
											Mauris ut felis malesuada eros
											varius tristique a at orci. Nulla
											vulputate, leo sit amet rhoncus
											suscipit, enim ex venenatis ipsum,
											et porttitor.
										</p>
										<a
											href="services-details-3.html"
											className="btn btn-outline-primary"
										>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 wow fadeInUp offset-lg-0 offset-md-3"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div className="icon-bx-wraper style-5 box-hover text-center m-b30">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="flaticon-laptop"></i>
										</span>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b15">
											Bidang Cipta Karya
										</h4>
										<p className="m-b20">
											Mauris ut felis malesuada eros
											varius tristique a at orci. Nulla
											vulputate, leo sit amet rhoncus
											suscipit, enim ex venenatis ipsum,
											et porttitor.
										</p>
										<a
											href="services-details-3.html"
											className="btn btn-outline-primary"
										>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 wow fadeInUp offset-lg-0 offset-md-3"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div className="icon-bx-wraper style-5 box-hover text-center m-b30">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="flaticon-laptop"></i>
										</span>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b15">
											Bidang Tata Ruang
										</h4>
										<p className="m-b20">
											Mauris ut felis malesuada eros
											varius tristique a at orci. Nulla
											vulputate, leo sit amet rhoncus
											suscipit, enim ex venenatis ipsum,
											et porttitor.
										</p>
										<a
											href="services-details-3.html"
											className="btn btn-outline-primary"
										>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 wow fadeInUp offset-lg-0 offset-md-3"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div className="icon-bx-wraper style-5 box-hover text-center m-b30">
									<div className="icon-bx">
										<span className="icon-cell">
											<i className="flaticon-laptop"></i>
										</span>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b15">
											Bidang Bina Konstruksi
										</h4>
										<p className="m-b20">
											Mauris ut felis malesuada eros
											varius tristique a at orci. Nulla
											vulputate, leo sit amet rhoncus
											suscipit, enim ex venenatis ipsum,
											et porttitor.
										</p>
										<a
											href="services-details-3.html"
											className="btn btn-outline-primary"
										>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* BERITA SECTION */}
				<section class="content-inner-2 bgl-primary">
					<div class="container">
						<div class="section-head style-1 text-center">
							<h6 class="sub-title">KABAR</h6>
							<h2 class="title">BERITA TERBARU</h2>
						</div>
						<div class="blog-carousel1 owl-carousel owl-theme owl-btn-1 owl-btn-center-lr owl-dots-none owl-btn-primary">
							<div
								class="item wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="dlab-blog style-1 bg-white">
									<div class="dlab-media">
										<a href="blog-details-2.html">
											<img
												src="assets/frontend/images/blog/blog-grid-1/pic1.jpg"
												alt=""
											/>
										</a>
									</div>
									<div class="dlab-info">
										<h5 class="dlab-title">
											<a href="blog-details-2.html">
												Praesent ut lobortis purus
												hasellus accumsan.
											</a>
										</h5>
										<p class="m-b0">
											Pellentesque vel nibh gravida erat
											interdum lacinia vel in lectus. Sed
											fermentum pulvinar.
										</p>
										<div class="dlab-meta meta-bottom">
											<ul>
												<li class="post-date">
													<i class="flaticon-clock m-r10"></i>
													7 March, 2020
												</li>
												<li class="post-comment">
													<a href="javascript:void(0);">
														<i class="flaticon-speech-bubble"></i>
														<span>15</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div
								class="item wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="dlab-blog style-1 bg-white">
									<div class="dlab-media">
										<a href="blog-details-2.html">
											<img
												src="assets/frontend/images/blog/blog-grid-1/pic2.jpg"
												alt=""
											/>
										</a>
									</div>
									<div class="dlab-info">
										<h5 class="dlab-title">
											<a href="blog-details-2.html">
												Donec feugiat mollis nisi in
												dignissim. Morbi lectus.
											</a>
										</h5>
										<p class="m-b0">
											Pellentesque vel nibh gravida erat
											interdum lacinia vel in lectus. Sed
											fermentum pulvinar.
										</p>
										<div class="dlab-meta meta-bottom">
											<ul>
												<li class="post-date">
													<i class="flaticon-clock m-r10"></i>
													7 March, 2020
												</li>
												<li class="post-comment">
													<a href="javascript:void(0);">
														<i class="flaticon-speech-bubble"></i>
														<span>15</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div
								class="item wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div class="dlab-blog style-1 bg-white">
									<div class="dlab-media">
										<a href="blog-details-2.html">
											<img
												src="assets/frontend/images/blog/blog-grid-1/pic3.jpg"
												alt=""
											/>
										</a>
									</div>
									<div class="dlab-info">
										<h5 class="dlab-title">
											<a href="blog-details-2.html">
												Quisque sem tortor, convallis in
												arcu finibus.
											</a>
										</h5>
										<p class="m-b0">
											Pellentesque vel nibh gravida erat
											interdum lacinia vel in lectus. Sed
											fermentum pulvinar.
										</p>
										<div class="dlab-meta meta-bottom">
											<ul>
												<li class="post-date">
													<i class="flaticon-clock m-r10"></i>
													7 March, 2020
												</li>
												<li class="post-comment">
													<a href="javascript:void(0);">
														<i class="flaticon-speech-bubble"></i>
														<span>15</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* INSTAGRAM SECTION */}
				<section className="content-inner streams">
					<div className="container">
						<div className="section-head style-1">
							<h6 class="sub-title text-uppercase">Ikuti</h6>
							<h2 className="title text-uppercase">
								Instagram Kami
							</h2>
						</div>
						<div className="row lightgallery">
							<div className="card-container col-lg-4 col-md-12 col-sm-12 branding  wow fadeInUp">
								<div class="dlab-box dlab-overlay-box style-1 m-b30">
									<div class="dlab-media dlab-img-overlay1 primary">
										<img
											src="assets/frontend/images/projects/pic1.jpg"
											alt=""
										/>
										<span
											data-exthumbimage="assets/frontend/images/projects/pic1.jpg"
											data-src="assets/frontend/images/projects/pic1.jpg"
											class="lightimg"
											title="Design"
										>
											<i class="la la-plus"></i>
										</span>
									</div>
									<div class="dlab-info">
										<h4 class="title">
											<a href="services-details-2.html">
												Web Development
											</a>
										</h4>
										<ul class="tags-list">
											<li>
												<a href="#">Brand</a>
											</li>
											<li>
												<a href="#">Website</a>
											</li>
										</ul>
										<a
											href="services-details-2.html"
											class="btn btn-light icon-btn"
										>
											<i class="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="card-container col-lg-4 col-md-12 col-sm-12 branding wow fadeInUp">
								<div class="dlab-box dlab-overlay-box style-1 m-b30">
									<div class="dlab-media dlab-img-overlay1 primary">
										<img
											src="assets/frontend/images/projects/pic1.jpg"
											alt=""
										/>
										<span
											data-exthumbimage="assets/frontend/images/projects/pic1.jpg"
											data-src="assets/frontend/images/projects/pic1.jpg"
											class="lightimg"
											title="Design"
										>
											<i class="la la-plus"></i>
										</span>
									</div>
									<div class="dlab-info">
										<h4 class="title">
											<a href="services-details-2.html">
												Web Development
											</a>
										</h4>
										<ul class="tags-list">
											<li>
												<a href="#">Brand</a>
											</li>
											<li>
												<a href="#">Website</a>
											</li>
										</ul>
										<a
											href="services-details-2.html"
											class="btn btn-light icon-btn"
										>
											<i class="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="card-container col-lg-4 col-md-12 col-sm-12 branding wow fadeInUp">
								<div class="dlab-box dlab-overlay-box style-1 m-b30">
									<div class="dlab-media dlab-img-overlay1 primary">
										<img
											src="assets/frontend/images/projects/pic1.jpg"
											alt=""
										/>
										<span
											data-exthumbimage="assets/frontend/images/projects/pic1.jpg"
											data-src="assets/frontend/images/projects/pic1.jpg"
											class="lightimg"
											title="Design"
										>
											<i class="la la-plus"></i>
										</span>
									</div>
									<div class="dlab-info">
										<h4 class="title">
											<a href="services-details-2.html">
												Web Development
											</a>
										</h4>
										<ul class="tags-list">
											<li>
												<a href="#">Brand</a>
											</li>
											<li>
												<a href="#">Website</a>
											</li>
										</ul>
										<a
											href="services-details-2.html"
											class="btn btn-light icon-btn"
										>
											<i class="fa fa-angle-right"></i>
										</a>
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
};

export default Home;
