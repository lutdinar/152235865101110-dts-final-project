import React, { useEffect, useState } from "react";
// import { MDBDataTableV5 } from "mdbreact";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";
import DataTable from "../../components/DataTable";

function Program(props) {
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
							<h1>Program &amp; Kegiatan</h1>
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
										Program &amp; Kegiatan
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<div
					class="content-inner"
					style={{
						backgroundImage: `url(/assets/frontend/images/background/bg1.png)`,
					}}
				>
					<div class="container">
						<div class="row align-items-center">
							<div
								class="col-xl-12 col-lg-12"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div
									class="section-head style-1 wow fadeInLeft"
									data-wow-duration="2s"
									data-wow-delay="0.2s"
								>
									<h6 class="sub-title">CARI</h6>
									<h2 class="title">
										PROGRAM &amp; KEGIATAN
									</h2>
								</div>
								<form
									class="dlab-form dzForm wow fadeInUp"
									method="POST"
									action="#"
									data-wow-duration="2s"
									data-wow-delay="0.2s"
								>
									<div class="dzFormMsg"></div>

									<div class="row">
										<div class="col-sm-4">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">
														<i class="la la-list"></i>
													</span>
												</div>
												<select
													name="dzOther[choose_service]"
													class="form-control"
												>
													<option selected value="">
														Pilih Tahun
													</option>
													<option value="-1">
														Semua Tahun
													</option>
													<option value="2019">
														2019
													</option>
													<option value="2020">
														2020
													</option>
													<option value="2021">
														2021
													</option>
													<option value="2022">
														2022
													</option>
													<option value="2023">
														2023
													</option>
													<option value="2024">
														2024
													</option>
												</select>
											</div>
										</div>

										<div class="col-sm-4">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">
														<i class="la la-list"></i>
													</span>
												</div>
												<select
													name="dzOther[choose_service]"
													class="form-control"
												>
													<option selected>
														Pilih Bidang / Unit
														Kerja
													</option>
													<option value="-1">
														Semua Bidang / Unit
														Kerja
													</option>
													<option value="bm">
														Bina Marga
													</option>
													<option value="sda">
														Sumber Daya Air
													</option>
													<option value="ck">
														Cipta Karya
													</option>
												</select>
											</div>
										</div>

										<div class="col-sm-4">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">
														<i class="la la-list"></i>
													</span>
												</div>
												<select
													name="dzOther[choose_service]"
													class="form-control"
												>
													<option selected value="">
														Pilih Kecamatan
													</option>
													<option value="-1">
														Semua Kecamatan
													</option>
													<option value="1">
														Kec. Buahdua
													</option>
													<option value="2">
														Kec. Cibugel
													</option>
													<option value="3">
														Kec. Cimalaka
													</option>
												</select>
											</div>
										</div>

										<div class="col-sm-12">
											<button
												name="submit"
												type="submit"
												value="Submit"
												class="btn btn-primary"
											>
												Cari
												<i class="fa fa-angle-right m-l10"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<section class="content">
					<div class="container">
						<div class="section-head style-3 text-center">
							<h4 class="title">Daftar Program &amp; Kegiatan</h4>
						</div>
						<div class="row">
							<div
								class="col-xl-12 wow fadeInUp"
								data-wow-duration="2s"
								data-wow-delay="0.2s"
							>
								<div class="dlab-blog blog-half m-b30">
									<div
										class="dlab-info"
										style={{ width: "100%" }}
									>
										<DataTable />
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

export default Program;
