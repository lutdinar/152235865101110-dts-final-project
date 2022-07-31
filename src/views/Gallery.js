import React from "react";
import Breadcumbs from "../components/Breadcumbs";
import Footer from "../templates/frontend/Footer";
import Header from "../templates/frontend/Header";

const Gallery = () => {
	return (
		<div>
			<Header />
			<div class="page-content bg-white">
				<Breadcumbs
					urlFirstSegment="/"
					firstSegment="Beranda"
					secondSegment="Galeri"
					title="Galeri"
				/>

				<section class="content-inner">
					<div class="container">
						<div class="section-head style-1 text-center">
							<h6 class="sub-title text-primary m-b15">Album</h6>
							<h2 class="title">Foto &amp; Video</h2>
						</div>
						<div class="clearfix">
							<div class="row lightgallery">
								<div class="card-container col-lg-7 col-md-6 col-sm-6 web_design wow fadeInUp">
									<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
										<div class="dlab-media dlab-img-overlay1">
											<img
												src="/assets/frontend/images/projects/project-2/pic1.jpg"
												alt=""
											/>
											<span
												data-exthumbimage="/assets/frontend/images/projects/project-2/pic1.jpg"
												data-src="/assets/frontend/images/projects/project-2/pic1.jpg"
												class="lightimg"
												title="Design"
											>
												<i class="la la-plus"></i>
											</span>
										</div>
										<div class="dlab-info">
											<h5 class="title">
												<a href="services-details-1.html">
													Software Landing
												</a>
											</h5>
											<p class="post-author">
												By{" "}
												<a href="services-details-1.html">
													Jhone Doe
												</a>
											</p>
										</div>
									</div>
								</div>
								<div class="card-container col-lg-5 col-md-6 col-sm-6 web_development wow fadeInUp">
									<div class="dlab-box dlab-overlay-box style-2 m-b30  overlay-shine">
										<div class="dlab-media dlab-img-overlay1">
											<img
												src="/assets/frontend/images/projects/project-2/pic2.jpg"
												alt=""
											/>
											<span
												data-exthumbimage="/assets/frontend/images/projects/project-2/pic2.jpg"
												data-src="/assets/frontend/images/projects/project-2/pic2.jpg"
												class="lightimg"
												title="Design"
											>
												<i class="la la-plus"></i>
											</span>
										</div>
										<div class="dlab-info">
											<h5 class="title">
												<a href="services-details-1.html">
													Software Landing
												</a>
											</h5>
											<p class="post-author">
												By{" "}
												<a href="services-details-1.html">
													Jhone Doe
												</a>
											</p>
										</div>
									</div>
								</div>

								<div class="col-lg-7 col-md-6 col-sm-6">
									<div class="row">
										<div class="card-container col-lg-6 col-md-12 col-sm-12 branding wow fadeInUp">
											<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
												<div class="dlab-media dlab-img-overlay1">
													<img
														src="/assets/frontend/images/projects/project-2/pic3.jpg"
														alt=""
													/>
													<span
														data-exthumbimage="/assets/frontend/images/projects/project-2/pic3.jpg"
														data-src="/assets/frontend/images/projects/project-2/pic3.jpg"
														class="lightimg"
														title="Design"
													>
														<i class="la la-plus"></i>
													</span>
												</div>
												<div class="dlab-info">
													<h5 class="title">
														<a href="services-details-1.html">
															Software Landing
														</a>
													</h5>
													<p class="post-author">
														By{" "}
														<a href="services-details-1.html">
															Jhone Doe
														</a>
													</p>
												</div>
											</div>
										</div>
										<div class="card-container col-lg-6 col-md-12 col-sm-12 branding wow fadeInUp">
											<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
												<div class="dlab-media dlab-img-overlay1">
													<img
														src="/assets/frontend/images/projects/project-2/pic4.jpg"
														alt=""
													/>
													<span
														data-exthumbimage="/assets/frontend/images/projects/project-2/pic4.jpg"
														data-src="/assets/frontend/images/projects/project-2/pic4.jpg"
														class="lightimg"
														title="Design"
													>
														<i class="la la-plus"></i>
													</span>
												</div>
												<div class="dlab-info">
													<h5 class="title">
														<a href="services-details-1.html">
															Software Landing
														</a>
													</h5>
													<p class="post-author">
														By{" "}
														<a href="services-details-1.html">
															Jhone Doe
														</a>
													</p>
												</div>
											</div>
										</div>
										<div class="card-container col-lg-12 col-md-12 col-sm-12 web_development wow fadeInUp">
											<div class="dlab-box dlab-overlay-box style-2 m-b30  overlay-shine">
												<div class="dlab-media dlab-img-overlay1">
													<img
														src="/assets/frontend/images/projects/project-2/pic5.jpg"
														alt=""
													/>
													<span
														data-exthumbimage="/assets/frontend/images/projects/project-2/pic5.jpg"
														data-src="/assets/frontend/images/projects/project-2/pic5.jpg"
														class="lightimg"
														title="Design"
													>
														<i class="la la-plus"></i>
													</span>
												</div>
												<div class="dlab-info">
													<h5 class="title">
														<a href="services-details-1.html">
															Software Landing
														</a>
													</h5>
													<p class="post-author">
														By{" "}
														<a href="services-details-1.html">
															Jhone Doe
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-container col-lg-5 col-md-6 col-sm-6 seo wow fadeInUp">
									<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
										<div class="dlab-media dlab-img-overlay1">
											<img
												src="/assets/frontend/images/projects/project-2/pic6.jpg"
												alt=""
											/>
											<span
												data-exthumbimage="/assets/frontend/images/projects/project-2/pic6.jpg"
												data-src="/assets/frontend/images/projects/project-2/pic6.jpg"
												class="lightimg"
												title="Design"
											>
												<i class="la la-plus"></i>
											</span>
										</div>
										<div class="dlab-info">
											<h5 class="title">
												<a href="services-details-1.html">
													Software Landing
												</a>
											</h5>
											<p class="post-author">
												By{" "}
												<a href="services-details-1.html">
													Jhone Doe
												</a>
											</p>
										</div>
									</div>
								</div>

								<div class="card-container col-lg-7 col-md-6 col-sm-6 web_design wow fadeInUp">
									<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
										<div class="dlab-media dlab-img-overlay1">
											<img
												src="/assets/frontend/images/projects/project-2/pic1.jpg"
												alt=""
											/>
											<span
												data-exthumbimage="/assets/frontend/images/projects/project-2/pic1.jpg"
												data-src="/assets/frontend/images/projects/project-2/pic1.jpg"
												class="lightimg"
												title="Design"
											>
												<i class="la la-plus"></i>
											</span>
										</div>
										<div class="dlab-info">
											<h5 class="title">
												<a href="services-details-1.html">
													Software Landing
												</a>
											</h5>
											<p class="post-author">
												By{" "}
												<a href="services-details-1.html">
													Jhone Doe
												</a>
											</p>
										</div>
									</div>
								</div>
								<div class="card-container col-lg-5 col-md-6 col-sm-6 web_development wow fadeInUp">
									<div class="dlab-box dlab-overlay-box style-2 m-b30  overlay-shine">
										<div class="dlab-media dlab-img-overlay1">
											<img
												src="/assets/frontend/images/projects/project-2/pic2.jpg"
												alt=""
											/>
											<span
												data-exthumbimage="/assets/frontend/images/projects/project-2/pic2.jpg"
												data-src="/assets/frontend/images/projects/project-2/pic2.jpg"
												class="lightimg"
												title="Design"
											>
												<i class="la la-plus"></i>
											</span>
										</div>
										<div class="dlab-info">
											<h5 class="title">
												<a href="services-details-1.html">
													Software Landing
												</a>
											</h5>
											<p class="post-author">
												By{" "}
												<a href="services-details-1.html">
													Jhone Doe
												</a>
											</p>
										</div>
									</div>
								</div>

								<div class="col-lg-7 col-md-6 col-sm-6">
									<div class="row">
										<div class="card-container col-lg-6 col-md-12 col-sm-12 branding wow fadeInUp">
											<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
												<div class="dlab-media dlab-img-overlay1">
													<img
														src="/assets/frontend/images/projects/project-2/pic3.jpg"
														alt=""
													/>
													<span
														data-exthumbimage="/assets/frontend/images/projects/project-2/pic3.jpg"
														data-src="/assets/frontend/images/projects/project-2/pic3.jpg"
														class="lightimg"
														title="Design"
													>
														<i class="la la-plus"></i>
													</span>
												</div>
												<div class="dlab-info">
													<h5 class="title">
														<a href="services-details-1.html">
															Software Landing
														</a>
													</h5>
													<p class="post-author">
														By{" "}
														<a href="services-details-1.html">
															Jhone Doe
														</a>
													</p>
												</div>
											</div>
										</div>
										<div class="card-container col-lg-6 col-md-12 col-sm-12 branding wow fadeInUp">
											<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
												<div class="dlab-media dlab-img-overlay1">
													<img
														src="/assets/frontend/images/projects/project-2/pic4.jpg"
														alt=""
													/>
													<span
														data-exthumbimage="/assets/frontend/images/projects/project-2/pic4.jpg"
														data-src="/assets/frontend/images/projects/project-2/pic4.jpg"
														class="lightimg"
														title="Design"
													>
														<i class="la la-plus"></i>
													</span>
												</div>
												<div class="dlab-info">
													<h5 class="title">
														<a href="services-details-1.html">
															Software Landing
														</a>
													</h5>
													<p class="post-author">
														By{" "}
														<a href="services-details-1.html">
															Jhone Doe
														</a>
													</p>
												</div>
											</div>
										</div>
										<div class="card-container col-lg-12 col-md-12 col-sm-12 web_development wow fadeInUp">
											<div class="dlab-box dlab-overlay-box style-2 m-b30  overlay-shine">
												<div class="dlab-media dlab-img-overlay1">
													<img
														src="/assets/frontend/images/projects/project-2/pic5.jpg"
														alt=""
													/>
													<span
														data-exthumbimage="/assets/frontend/images/projects/project-2/pic5.jpg"
														data-src="/assets/frontend/images/projects/project-2/pic5.jpg"
														class="lightimg"
														title="Design"
													>
														<i class="la la-plus"></i>
													</span>
												</div>
												<div class="dlab-info">
													<h5 class="title">
														<a href="services-details-1.html">
															Software Landing
														</a>
													</h5>
													<p class="post-author">
														By{" "}
														<a href="services-details-1.html">
															Jhone Doe
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-container col-lg-5 col-md-6 col-sm-6 seo wow fadeInUp">
									<div class="dlab-box dlab-overlay-box style-2 m-b30 overlay-shine">
										<div class="dlab-media dlab-img-overlay1">
											<img
												src="/assets/frontend/images/projects/project-2/pic6.jpg"
												alt=""
											/>
											<span
												data-exthumbimage="/assets/frontend/images/projects/project-2/pic6.jpg"
												data-src="/assets/frontend/images/projects/project-2/pic6.jpg"
												class="lightimg"
												title="Design"
											>
												<i class="la la-plus"></i>
											</span>
										</div>
										<div class="dlab-info">
											<h5 class="title">
												<a href="services-details-1.html">
													Software Landing
												</a>
											</h5>
											<p class="post-author">
												By{" "}
												<a href="services-details-1.html">
													Jhone Doe
												</a>
											</p>
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

export default Gallery;
