import React from "react";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";
import "./../../App.css";

function Report(props) {
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
							<h1>Pengaduan Publik</h1>

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
										Pengaduan Publik
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section
					class="content-inner"
					style={{
						backgroundImage: `url(/assets/frontend/images/background/bg13.png)`,
						backgroundRepeat: "no-repeat",
					}}
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-6 col-md-12">
								<div class="dlab-team style-3 mb-5"></div>
								<div class="about-media">
									<div class="dz-content">
										<div class="row media-portion">
											<div class="col-md-12">
												<div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
													<div class="icon-bx-sm bg-white">
														<a
															href="https://www.google.com/maps/dir/?api=1&destination=-6.8592903,107.922649&travelmode=driving&dir_action=navigate"
															target="_blank"
															class="icon-cell text-secondary"
														>
															<i class="las la-map-marker"></i>
														</a>
													</div>
													<div class="icon-content">
														<h5 class="dlab-title m-b10">
															Alamat :
														</h5>
														<p>
															Jalan R.A. Kartini
															no. 13, Regol Wetan,
															Kec. Sumedang
															Selatan, Kabupaten
															Sumedang
														</p>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
													<div class="icon-bx-sm bg-white">
														<a
															href="javascript:void(0);"
															class="icon-cell text-secondary"
														>
															<i class="las la-phone"></i>
														</a>
													</div>
													<div class="icon-content">
														<h5 class="dlab-title m-b10">
															Telepon :
														</h5>
														<p>
															+62 (261) 201240
															<br />
															+62812-2414-6370
														</p>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
													<div class="icon-bx-sm bg-white">
														<a
															href="https://www.instagram.com/dinas.putr.kabupaten.sumedang"
															target="_blank"
															class="icon-cell text-secondary"
														>
															<i class="lab la-instagram"></i>
														</a>
													</div>
													<div class="icon-content">
														<h5 class="dlab-title m-b10">
															Instagram :
														</h5>
														<p>
															@dinas.putr.kabupaten.sumedang
														</p>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
													<div class="icon-bx-sm bg-white">
														<a
															href="mailto:dinas_pupr@sumedangkab.go.id"
															class="icon-cell text-secondary"
														>
															<i class="las la-envelope"></i>
														</a>
													</div>
													<div class="icon-content">
														<h5 class="dlab-title m-b10">
															Email :
														</h5>
														<p>
															info@sumedangkab.go.id
															<br />
															dinas_pupr@sumedangkab.go.id
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-6 col-md-12">
								<div class="section-head style-1">
									<h6 class="sub-title text-secondary m-b15">
										SAMPAIKAN
									</h6>
									<h3 class="title m-b20">Pesan Anda</h3>
									<p class="text m-b20">
										Silahkan sampaikan Pengaduan Anda
										terkait Pelayanan Kami di Dinas
										Pekerjaan Umum dan Tata Ruang Kabupaten
										Sumedang.
									</p>
									<p class="text m-b50">
										Anda dapat menyampaikan kritik dan saran
										untuk meningkatkan Pelayanan Publik
										Kami.
									</p>
								</div>
								<div class="details-tabs">
									<ul
										class="nav nav-tabs secondary m-b40"
										id="myTab"
										role="tablist"
									>
										<li
											class="nav-item"
											role="presentation"
										>
											<button
												class="nav-link active"
												id="Skills-tab"
												data-bs-toggle="tab"
												data-bs-target="#Skills"
												type="button"
												role="tab"
												aria-controls="Skills"
												aria-selected="true"
											>
												Aturan
											</button>
										</li>

										<li
											class="nav-item"
											role="presentation"
										>
											<button
												class="nav-link"
												id="Send-message-tab"
												data-bs-toggle="tab"
												data-bs-target="#Send-message"
												type="button"
												role="tab"
												aria-controls="Send-message"
												aria-selected="false"
											>
												Pesan
											</button>
										</li>
									</ul>
									<div class="tab-content" id="myTabContent">
										<div
											class="tab-pane fade show active"
											id="Skills"
											role="tabpanel"
											aria-labelledby="Skills-tab"
										>
											<div class="wpb_wrapper">
												<ul class="list-check primary m-b30">
													<li>
														We support programs that
														create advancement
														opportunities for
														people.
													</li>
													<li>
														Get a view of events and
														trends. Be updated on
														our recent news.
													</li>
													<li>
														Finally, it all comes
														down to people. Creating
														a winning team.
													</li>
													<li>
														Get a view of events and
														trends. Be updated on
														our recent news.
													</li>
													<li>
														We support programs that
														create advancement
														opportunities for
														people.
													</li>
													<li>
														Get a view of events and
														trends. Be updated on
														our recent news.
													</li>
												</ul>
											</div>
										</div>

										<div
											class="tab-pane fade"
											id="Send-message"
											role="tabpanel"
											aria-labelledby="Send-message-tab"
										>
											<form
												class="dlab-form style-1 dzForm"
												method="POST"
												action="#"
											>
												<div class="dzFormMsg"></div>
												<input
													type="hidden"
													class="form-control"
													name="dzToDo"
													value="Contact"
												/>
												<input
													type="hidden"
													class="form-control"
													name="reCaptchaEnable"
													value="0"
												/>
												<div class="row sp10">
													<div class="col-sm-6">
														<div class="input-group">
															<input
																name="dzName"
																type="text"
																required
																class="form-control"
																placeholder="Full Name"
															/>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="input-group">
															<input
																name="dzEmail"
																type="text"
																required
																class="form-control"
																placeholder="Email Address"
															/>
														</div>
													</div>
													<div class="col-sm-12">
														<div class="input-group">
															<input
																name="dzPhoneNumber"
																type="text"
																required
																class="form-control"
																placeholder="Phone No."
															/>
														</div>
													</div>
													<div class="col-sm-12">
														<div class="input-group">
															<textarea
																class="form-control"
																required
																placeholder="Message"
															></textarea>
														</div>
													</div>
													<div class="col-sm-12">
														<button
															type="submit"
															class="btn gradient gradient-sec btn-block btn-secondary"
														>
															Submit Now
														</button>
													</div>
												</div>
											</form>
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

export default Report;
