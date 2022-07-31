import React from "react";
import Breadcumbs from "../components/Breadcumbs";
import Footer from "../templates/frontend/Footer";
import Header from "../templates/frontend/Header";

const Ppid = () => {
	return (
		<div>
			<Header />

			<div class="page-content bg-white">
				{/* PPID HEADER SECTION */}
				<Breadcumbs
					urlFirstSegment="/"
					firstSegment="Beranda"
					secondSegment="PPID"
					title="Pejabat Pengelola Informasi &amp; Dokumentasi"
				/>

				{/* DESKRIPSI PPID SECTION */}
				<section class="content-inner">
					<div class="container">
						<div class="row align-items-center">
							<div
								class="col-lg-6 wow fadeIn"
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
													Apa itu PPID / Pejabat
													Pengelola Informasi dan
													Dokumentasi ?
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
													Donec suscipit porta lorem
													eget condimentum. Morbi
													vitae mauris in leo
													venenatis varius. Aliquam
													nunc enim, egestas ac dui
													in, aliquam vulputate erat.
													Curabitur porttitor ante ut
													odio vestibulum, et iaculis
													arcu scelerisque.
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
													Visi PPID Dinas PUTR
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
												<p class="m-b0">
													Donec suscipit porta lorem
													eget condimentum. Morbi
													vitae mauris in leo
													venenatis varius. Aliquam
													nunc enim, egestas ac dui
													in, aliquam vulputate erat.
													Curabitur porttitor ante ut
													odio vestibulum, et iaculis
													arcu scelerisque.
												</p>
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
													Misi PPID Dinas PUTR
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
													Donec suscipit porta lorem
													eget condimentum. Morbi
													vitae mauris in leo
													venenatis varius. Aliquam
													nunc enim, egestas ac dui
													in, aliquam vulputate erat.
													Curabitur porttitor ante ut
													odio vestibulum, et iaculis
													arcu scelerisque.
												</p>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header" id="faqFour">
											<h5 class="dlab-title">
												<a
													href="javascript:void(0);"
													class="collapsed"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFour"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Tugas Pokok &amp; Fungsi
													PPID Dinas PUTR
													<span class="toggle-close"></span>
												</a>
											</h5>
										</div>
										<div
											id="collapseFour"
											class="collapse"
											aria-labelledby="faqFour"
											data-bs-parent="#accordionFaq"
										>
											<div class="card-body">
												<p class="m-b0">
													Donec suscipit porta lorem
													eget condimentum. Morbi
													vitae mauris in leo
													venenatis varius. Aliquam
													nunc enim, egestas ac dui
													in, aliquam vulputate erat.
													Curabitur porttitor ante ut
													odio vestibulum, et iaculis
													arcu scelerisque.
												</p>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header" id="faqFive">
											<h5 class="dlab-title">
												<a
													href="javascript:void(0);"
													class="collapsed"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFive"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Struktur Organisasi PPID
													Dinas PUTR
													<span class="toggle-close"></span>
												</a>
											</h5>
										</div>
										<div
											id="collapseFive"
											class="collapse"
											aria-labelledby="faqFive"
											data-bs-parent="#accordionFaq"
										>
											<div class="card-body">
												<p class="m-b0">
													Donec suscipit porta lorem
													eget condimentum. Morbi
													vitae mauris in leo
													venenatis varius. Aliquam
													nunc enim, egestas ac dui
													in, aliquam vulputate erat.
													Curabitur porttitor ante ut
													odio vestibulum, et iaculis
													arcu scelerisque.
												</p>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header" id="faqSix">
											<h5 class="dlab-title">
												<a
													href="javascript:void(0);"
													class="collapsed"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSix"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Maklumat PPID Dinas PUTR
													<span class="toggle-close"></span>
												</a>
											</h5>
										</div>
										<div
											id="collapseSix"
											class="collapse"
											aria-labelledby="faqSix"
											data-bs-parent="#accordionFaq"
										>
											<div class="card-body">
												<p class="m-b0">
													Donec suscipit porta lorem
													eget condimentum. Morbi
													vitae mauris in leo
													venenatis varius. Aliquam
													nunc enim, egestas ac dui
													in, aliquam vulputate erat.
													Curabitur porttitor ante ut
													odio vestibulum, et iaculis
													arcu scelerisque.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="col-lg-4 col-md-6 mx-auto d-block wow fadeIn"
								data-wow-duration="2s"
								data-wow-delay="0.4s"
							>
								<div class="dlab-team style-1">
									<div class="dlab-media dlab-img-effect zoom zoom-slow">
										<a href="javascript:void(0);">
											<img
												src="/assets/images/kadis_putr-2.png"
												alt="Dinas PUTR Kabupaten Sumedang"
											/>
										</a>
									</div>
									<div class="dlab-content">
										<div class="clearfix">
											<h4 class="dlab-name">
												<a href="javascript:void(0);">
													Ir. Deni Rifdriana, MM.
												</a>
											</h4>
											<span class="dlab-position">
												Kepala Dinas
											</span>
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
};

export default Ppid;
