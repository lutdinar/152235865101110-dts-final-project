import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function About(props) {
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
							<h1>Gambaran Umum</h1>
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
										Gambaran Umum
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>

			<section
				class="content-inner-2"
				style={{
					background: `url(assets/frontend/images/background/bg2.png)`,
					backgroundSize: "cover",
					backgroundPosition: "top center",
					backgroundRepeat: "no-repeat",
					// background-size: cover, background-position: top center, background-repeat: no-repeat`,
				}}
			>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div
								class="icon-bx-wraper style-7 text-justify m-b30 wow fadeIn"
								data-wow-delay="1s"
								data-wow-duration="3s"
							>
								<div class="icon-content">
									<h4 class="dlab-title">
										Dinas Pekerjaan Umum dan Tata Ruang
									</h4>
									<p>
										Dinas Pekerjaan Umum dan Tata Ruang
										(PUTR) Kabupaten Sumedang dibentuk
										berdasarkan Peraturan Daerah (PERDA)
										Kabupaten Sumedang Nomor 17 Tahun 2021
										Tentang Perubahan Atas Peraturan Daerah
										Nomor 11 Tahun 2016 Tentang Pembentukan
										dan Susunan Perangkat Daerah Kabupaten
										Sumedang.
									</p>
									<p class="m-t20">
										Dinas Pekerjaan Umum dan Tata Ruang
										terdiri dari :
									</p>
									<ul class="list-arrow primary">
										<li>Kepala Dinas</li>
										<li>Sekretariat</li>
										<li>Bidang Bina Marga</li>
										<li>Bidang Bina Konstruksi</li>
										<li>Bidang Cipta Karya</li>
										<li>Bidang Tata Ruang</li>
										<li>Bidang Sumber Daya Air</li>
										<li>
											UPTD Laboratorium Bahan Konstruksi
										</li>
										<li>
											UPTD Peralatan &amp; Perbengkelan
										</li>
										<li>9 UPTD PUTR Wilayah</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<div
								class="icon-bx-wraper style-7 text-center m-b30 wow fadeIn"
								data-wow-delay="1s"
								data-wow-duration="3s"
							>
								<div class="icon-content">
									<h4 class="dlab-title"></h4>
									<p>
										Vestibulum a efficitur ex. Ut iaculis
										dapibus iaculis. Praesent lacus magna,
										rhoncus quis magna quis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="content-inner">
				<div class="container">
					<div class="row">
						<div
							class="col-lg-6 m-b30 d-lg-block d-none wow fadeInLeft"
							data-wow-delay="1s"
							data-wow-duration="3s"
						>
							<div class="dz-media">
								<img
									src="/assets/frontend/images/about/img6.png"
									class="move-1"
									alt=""
								/>
							</div>
						</div>
						<div
							class="col-lg-6 wow fadeInRight"
							data-wow-delay="1s"
							data-wow-duration="3s"
						>
							<div class="section-head style-3">
								<h2 class="title">Why Our Agency</h2>
								<p>
									In dictum aliquam turpis lacinia iaculis.
									Fusce vel malesuada magna. Nulla vel maximus
									risus. Donec volutpat metus lacinia.
								</p>
							</div>
							<div
								class="icon-bx-wraper style-3 left box-hover m-b30 wow fadeInRight"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="icon-bx-sm radius">
									<a href="#" class="icon-cell">
										<i class="flaticon-idea"></i>
									</a>
								</div>
								<div class="icon-content">
									<h4 class="dlab-title m-b10">
										Idea &amp; Analysis Gathering
									</h4>
									<p>
										Maecenas laoreet efficitur sagittis.
										Aliquam eleifend nisl leo, sit amet
										consequat augue.
									</p>
								</div>
							</div>
							<div
								class="icon-bx-wraper style-3 left box-hover m-b30 wow fadeInRight"
								data-wow-duration="2s"
								data-wow-delay="0.6s"
							>
								<div class="icon-bx-sm radius">
									<a href="#" class="icon-cell">
										<i class="flaticon-coding"></i>
									</a>
								</div>
								<div class="icon-content">
									<h4 class="dlab-title m-b10">
										Design &amp; Developing
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
			<Footer />
		</div>
	);
}

export default About;
