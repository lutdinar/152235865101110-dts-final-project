import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function JobDesc(props) {
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
							<h1>Tugas Pokok &amp; Fungsi</h1>
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
										Tugas Pokok &amp; Fungsi
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section class="content-inner">
					<div class="container">
						<div class="row align-items-center">
							<div
								class="col-lg-6 wow fadeInLeft"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="section-head style-1">
									<h6 class="sub-title">
										TUGAS POKOK &amp; FUNGSI
									</h6>
									<h3 class="title m-b15">
										DINAS PUTR KABUPATEN SUMEDANG
									</h3>
									<p>
										Dinas Pekerjaan Umum dan Tata Ruang
										(PUTR) Kabupaten Sumedang memiliki Tugas
										Pokok &amp; Fungsi untuk membantu Bupati
										Sumedang dalam urusan Pekerjaan Umum dan
										Tata Ruang di Wilayah Kabupaten
										Sumedang.
									</p>
								</div>
								<div class="row">
									<div class="col-lg-12 col-md-6">
										<div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
											<div class="icon-bx-sm bg-white">
												<a
													href="javascript:void(0);"
													class="icon-cell text-primary"
												>
													{/* <i class="flaticon-chat"></i> */}
													<i class="las la-file-alt"></i>
												</a>
											</div>
											<div class="icon-content">
												<h4 class="dlab-title m-b10">
													Peraturan
												</h4>
												<p>
													Quisque efficitur consequat
													turpis, eget consequat risus
													vulputate eunc ligula.
												</p>
											</div>
										</div>
									</div>
									<div class="col-lg-12 col-md-6">
										<div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
											<div class="icon-bx-sm bg-white">
												<a
													href="javascript:void(0);"
													class="icon-cell text-primary"
												>
													{/* <i class="flaticon-bullhorn"></i> */}
													<i class="las la-file-alt"></i>
												</a>
											</div>
											<div class="icon-content">
												<h4 class="dlab-title m-b10">
													Peraturan
												</h4>
												<p>
													Quisque efficitur consequat
													turpis, eget consequat risus
													vulputate eunc ligula.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="col-lg-6 m-b30 wow fadeInRight"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="video-bx style-3">
									<img
										src="/assets/frontend/images/video/pic3.jpg"
										alt=""
									/>
									<div class="video-btn">
										<a
											href="https://www.youtube.com/watch?v=0S6pHex-KCo"
											class="popup-youtube"
										>
											<i class="flaticon-play"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="content m-b50">
					<div class="container">
						<div class="row">
							<div
								class="col-lg-12 wow fadeInLeft"
								data-wow-delay="1s"
								data-wow-duration="3s"
							>
								<div
									class="icon-bx-wraper style-3 left box-hover m-b30 wow fadeInLeft"
									data-wow-duration="2s"
									data-wow-delay="0.4s"
								>
									<div class="icon-content">
										<h4 class="dlab-title m-b10">
											Tugas Pokok
										</h4>
										<p>
											Maecenas laoreet efficitur sagittis.
											Aliquam eleifend nisl leo, sit amet
											consequat augue.
										</p>
									</div>
								</div>
							</div>

							<div
								class="col-lg-12 wow fadeInRight"
								data-wow-delay="1s"
								data-wow-duration="3s"
							>
								<div
									class="icon-bx-wraper style-3 left box-hover m-b30 wow fadeInRight"
									data-wow-duration="2s"
									data-wow-delay="0.4s"
								>
									<div class="icon-content">
										<h4 class="dlab-title m-b10">
											Lingkup Kewenangan
										</h4>
										<p>
											Maecenas laoreet efficitur sagittis.
											Aliquam eleifend nisl leo, sit amet
											consequat augue.
										</p>
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

export default JobDesc;
