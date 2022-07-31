import React from "react";
import CardProduct from "../../components/CardProduct";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function Product(props) {
	return (
		<div>
			<Header />
			<div class="page-content bg-white">
				<div
					class="dlab-bnr-inr overlay-gradient-dark text-center"
					style={{
						backgroundImage: `url(https://sumedangkab.go.id/data/images/header/header_2.JPEG)`,
					}}
				>
					<div class="container">
						<div class="dlab-bnr-inr-entry p-t50">
							<h1>Produk Layanan</h1>

							<nav
								aria-label="breadcrumb"
								class="breadcrumb-row style-1"
							>
								<ul class="breadcrumb">
									<li class="breadcrumb-item">
										<a href="/">Pelayanan Publik</a>
									</li>
									<li
										class="breadcrumb-item active"
										aria-current="page"
									>
										Produk Layanan
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
								class="col-xl-6 col-lg-7 wow fadeInLeft"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="section-head style-1">
									<h6 class="sub-title">TAHAPAN</h6>
									<h3 class="title">PELAYANAN PUBLIK</h3>
								</div>
								<div class="section-wraper-one">
									<div class="icon-bx-wraper style-2 left m-b30">
										<div class="icon-bx-md radius bg-white text-red">
											<a
												href="javascript:void(0);"
												class="icon-cell"
											>
												<i class="flaticon-paper-plane"></i>
											</a>
										</div>
										<div class="icon-content">
											<h4 class="dlab-title">
												Permohonan
											</h4>
											<p>
												Pemohon mengajukan permohonan
												kepada Dinas Pekerjaan Umum dan
												Tata Ruang (PUTR) Kabupaten
												Sumedang sesuai dengan formulir
												masing-masing layanan yang telah
												disediakan.
											</p>
										</div>
									</div>
									<div class="icon-bx-wraper style-2 left m-b30">
										<div class="icon-bx-md radius bg-white text-yellow">
											<a
												href="javascript:void(0);"
												class="icon-cell"
											>
												<i class="flaticon-sketch"></i>
											</a>
										</div>
										<div class="icon-content">
											<h4 class="dlab-title">
												Verifikasi & Proses
											</h4>
											<p>
												Dinas Pekerjaan Umum dan Tata
												Ruang (PUTR) Kabupaten Sumedang
												akan melakukan pemeriksaan
												persyaratan yang telah diajukan
												oleh Pemohon dan akan segera di
												proses.
											</p>
										</div>
									</div>
									<div class="icon-bx-wraper style-2 left m-b30">
										<div class="icon-bx-md radius bg-white text-green">
											<a
												href="javascript:void(0);"
												class="icon-cell"
											>
												<i class="flaticon-check"></i>
											</a>
										</div>
										<div class="icon-content">
											<h4 class="dlab-title">Selesai</h4>
											<p>
												Pemohon menerima layanan dari
												Dinas Pekerjaan Umum dan Tata
												Ruang (PUTR) Kabupaten Sumedang
												sesuai layanan yang didaftarkan.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								class="col-xl-6 col-lg-5 m-b30 wow fadeInRight"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="dlab-media cf-r-img">
									<img
										src="/assets/images/art_people_putr.PNG"
										class="move-2"
										alt="Dinas PUTR Kabupaten Sumedang"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					class="content m-b80"
					style={{
						background: `url(/assets/frontend/images/background/bg1.png)`,
					}}
				>
					<div class="container">
						<div class="row">
							<div
								class="col-lg-10 m-auto wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="dlab-accordion" id="accordionFaq">
									<div class="card">
										<div class="card-header" id="faqOne">
											<h5 class="dlab-title">
												<a
													href="javascript:void(0);"
													data-bs-toggle="collapse"
													data-bs-target="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Maklumat Pelayanan
													<span class="toggle-close"></span>
												</a>
											</h5>
										</div>
										<div
											id="collapseOne"
											class="collapse show"
											aria-labelledby="faqOne"
											data-bs-parent="#accordionFaq"
										>
											<div class="card-body">
												<p class="m-b0">
													Kami segenap jajaran Dinas
													Pekerjaan Umum dan Tata
													Ruang Kabupaten Sumedang
													bersungguh-sungguh
													memberikan pelayanan prima
													sesuai Standar Pelayanan
													pada seluruh jenis pelayanan
													di Dinas Pekerjaan Umum dan
													Tata Ruang Kabupaten
													Sumedang dengan berkomitmen
													pada Standar Pelayanan yang
													telah ditetapkan.
													<br />
													<br />
													Apabila kami tidak menepati
													maklumat pelayanan ini, kami
													siap diberi sanksi sesuai
													dengan Peraturan yang
													berlaku.
												</p>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header" id="faqTwo">
											<h5 class="dlab-title">
												<a
													href="javascript:void(0);"
													class="collapsed"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Visi dan Misi Pelayanan
													<span class="toggle-close"></span>
												</a>
											</h5>
										</div>
										<div
											id="collapseTwo"
											class="collapse"
											aria-labelledby="faqTwo"
											data-bs-parent="#accordionFaq"
										>
											<div class="card-body">
												<h5 class="m-b0">Visi</h5>
												<ul class="list-check primary m-b30">
													<li>
														Cepat, Transparan,
														Akuntabel dan
														Profesional
													</li>
												</ul>

												<h5 class="m-b0">Misi</h5>
												<ul class="list-check primary m-b30">
													<li>
														Mengutamakan pelayanan
														kepada masyarakat
														pengguna dan manfaat
														infrastruktur sebagai
														kemudahan akses dalam
														operasional dan
														mobilitas aktivitas.
													</li>
													<li>
														Memiliki tanggungjawab
														sosial yang tinggi dalam
														menangani pekerjaan umum
														dan penataan ruang
														(infrastruktur jalan,
														jembatan, irigasi, jasa
														konstruksi dan tata
														ruang, penyediaan alat
														berat / kendaraan dan
														penyediaan laboratorium
														bahan konstruksi.
													</li>
													<li>
														Meningkatkan
														profesionalisme dalam
														bidang Pekerjaan Umum
														dan Penataan Ruang
														Kabupaten Sumedang.
													</li>
													<li>
														Mendorong peran aktif
														masyarakat dalam
														pembangunan
														infrastruktur.
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header" id="faqThree">
											<h5 class="dlab-title">
												<a
													href="javascript:void(0);"
													class="collapsed"
													data-bs-toggle="collapse"
													data-bs-target="#collapseThree"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Janji dan Moto Pelayanan
													<span class="toggle-close"></span>
												</a>
											</h5>
										</div>
										<div
											id="collapseThree"
											class="collapse"
											aria-labelledby="faqThree"
											data-bs-parent="#accordionFaq"
										>
											<div class="card-body">
												<p class="m-b0">
													Membangun untuk Sarana
													Infrastruktur Kabupaten.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					class="content"
					style={{ background: `url(images/background/bg1.png)` }}
				>
					<div class="container">
						<div class="row">
							<div class="section-head style-1">
								<h3 class="title text-center">
									PRODUK LAYANAN
								</h3>
							</div>
							<CardProduct
								icon="las la-truck-monster"
								name="Alat Berat"
								description="Layanan sewa alat berat oleh Unit
											Pelaksana Teknis Dinas PUTR
											Peralatan dan Perbengkelan"
								price_status={false}
								price_desc="Lihat Detail"
								slug="alat-berat"
							/>
							<CardProduct
								icon="las la-wrench"
								name="Laboratorium Bahan Konstruksi"
								description="Layanan pengujian bahan konstruksi
							oleh Unit Pelaksana Teknis Dinas
							PUTR Laboratorium Bahan Konstruksi"
								price_status={false}
								price_desc="Lihat Detail"
								slug="laboratorium-bahan-konstruksi"
							/>

							<CardProduct
								icon="las la-map-marked"
								name="Informasi Ruang"
								description="Layanan informasi tata ruang oleh
								Bidang Tata Ruang Dinas"
								price_status={true}
								price="-"
								slug="informasi-ruang"
							/>

							<CardProduct
								icon="las la-water"
								name="Peil Banjir"
								description="Layanan rekomendasi teknis
								peil banjir oleh Bidang
								Sumber Daya Air Dinas PUTR"
								price_status={true}
								price="-"
								slug="peil-banjir"
							/>

							<CardProduct
								icon="las la-road"
								name="Unit Reaksi Cepat Tambal Lubang (URCTL)"
								description="Layanan tambal lubang pada Ruas Jalan Kabupaten dengan kerusakan ringan"
								price_status={true}
								price="-"
								slug="unit-reaksi-cepat-tambal-lubang"
							/>

							<CardProduct
								icon="las la-hard-hat"
								name="Unit Siaga Banjir"
								description="Layanan siaga banjir oleh Bidang Sumber Daya Air"
								price_status={true}
								price="-"
								slug="unit-siaga-banjir"
							/>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
}

export default Product;
