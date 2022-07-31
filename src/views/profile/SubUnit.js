import React from "react";
import CardUptd from "../../components/CardUptd";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function SubUnit(props) {
	return (
		<div>
			<Header />

			<div class="page-content bg-white">
				<div
					className="dlab-bnr-inr style-1 bg-secondary"
					style={{
						background: `url('/assets/frontend/images/banner/bnr2.png'), var(--gradient-sec)`,
						backgroundSize: "cover",
					}}
				>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Unit Pelaksana Teknis</h1>
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
										Unit Pelaksana Teknis
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
								class="col-lg-6 m-b10 wow fadeInLeft"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="dz-media">
									<img
										src="/assets/frontend/images/about/img4.png"
										class="move-3"
										alt=""
									/>
								</div>
							</div>
							<div
								class="col-lg-6 m-b10 wow fadeInRight"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="section-head style-1">
									<h6 class="sub-title">
										UNIT PELAKSANA TEKNIS
									</h6>
									<h2 class="title">
										DINAS PEKERJAAN UMUM DAN TATA RUANG
									</h2>
								</div>
								<p>
									Unit Pelaksana Teknis Dinas Pekerjaan Umum
									dan Tata Ruang Kabupaten Sumedang merupakan
									unit kerja yang tersebar diberbagai Wilayah
									Kecamatan.
								</p>
								<p class="m-b20">
									Terdapat 11 Unit Pelaksana Teknis Dinas
									Pekerjaan Umum dan Tata Ruang Kabupaten
									Sumedang.
								</p>
								<div class="row">
									<div class="col-sm-6">
										<ul class="list-arrow primary">
											<li>
												Nulla dict posuere veliitae.
											</li>
											<li>Etiam orci magna, accumsan.</li>
											<li>
												Donec fringilla velit risusquis.
											</li>
											<li>Aliquam pulvinar tempor.</li>
										</ul>
									</div>
									<div class="col-sm-6">
										<ul class="list-arrow primary">
											<li>
												Nulla dict posuere veliitae.
											</li>
											<li>Etiam orci magna, accumsan.</li>
											<li>
												Donec fringilla velit risusquis.
											</li>
											<li>Aliquam diam tempor.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					class="content-inner-2 m-b50"
					style={{
						backgroundImage: `url(/assets/frontend/images/background/bg2.png)`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div class="container">
						<div class="row align-items-center">
							<div
								class="col-lg-6 wow fadeInLeft"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="section-head style-1">
									<h6 class="sub-title text-secondary m-b15">
										JENIS PELAYANAN
									</h6>
									<h2 class="title">UNIT PELAKSANA TEKNIS</h2>
								</div>
								<div
									class="icon-bx-wraper style-3 left box-hover m-r50 m-b30 wow fadeInRight"
									data-wow-duration="2s"
									data-wow-delay="0.4s"
								>
									<div class="icon-bx-sm radius">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="flaticon-idea"></i>
										</a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-title m-b10">
											Laboratorium Bahan Konstruksi
										</h4>
										<p>
											Unit Pelaksana Teknis yang berkaitan
											dengan Layanan Pengujian Bahan
											Konstruksi.
										</p>
									</div>
								</div>
								<div
									class="icon-bx-wraper style-3 left box-hover m-l50 m-b30 wow fadeInRight"
									data-wow-duration="2s"
									data-wow-delay="0.6s"
								>
									<div class="icon-bx-sm radius">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="flaticon-coding"></i>
										</a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-title m-b10">
											Peralatan &amp; Perbengkelan
										</h4>
										<p>
											Unit Pelaksana Teknis yang
											menyediakan Layanan Alat Berat dan
											Perbengkelan Alat Berat.
										</p>
									</div>
								</div>
								<div
									class="icon-bx-wraper style-3 left box-hover m-r50 m-b30 wow fadeInRight"
									data-wow-duration="2s"
									data-wow-delay="0.8s"
								>
									<div class="icon-bx-sm radius">
										<a
											href="javascript:void(0);"
											class="icon-cell"
										>
											<i class="flaticon-rocket"></i>
										</a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-title m-b10">
											Unit Pelaksana Teknis Wilayah
										</h4>
										<p>
											Unit Pelaksana Teknis yang tersebar
											di 9 Wilayah dengan diantaranya
											memiliki cakupan 2 s/d 3 Kecamatan.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="cf-r-img">
									<img
										src="/assets/frontend/images/about/pic3.png"
										class="move-2"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					class="content-inner"
					style={{
						backgroundImage: `url(/assets/frontend/images/background/bg1.png)`,
					}}
				>
					<div class="container">
						<div
							class="section-head style-1 wow fadeInLeft"
							data-wow-duration="2s"
							data-wow-delay="0.2s"
						>
							<h6 class="sub-title text-secondary m-b15">
								DAFTAR
							</h6>
							<h2 class="title">UNIT PELAKSANA TEKNIS</h2>
						</div>
						<div class="row">
							<CardUptd
								name="Laboratorium Bahan Konstruksi"
								address="Alamat"
							/>
							<CardUptd
								name="Peralatan &amp; Perbengkelan"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Cimalaka"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Conggeang"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Pamulihan"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Situraja"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Sumedang Kota"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Tanjungsari"
								address="Alamat"
							/>
							<CardUptd
								name="Wilayah Tanjungkerta"
								address="Alamat"
							/>
							<CardUptd name="Wilayah Tomo" address="Alamat" />
							<CardUptd name="Wilayah Wado" address="Alamat" />
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
}

export default SubUnit;
