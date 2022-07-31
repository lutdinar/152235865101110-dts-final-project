import React, { useEffect, useState } from "react";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function NewsDetail(props) {
	const [slug, setSlug] = useState(null);

	function setNewsBySlug() {
		setSlug(props.slug);
	}
	useEffect(() => {
		setNewsBySlug();
	}, [slug]);

	return (
		<div>
			<Header />
			<div class="page-content bg-white">
				<div
					class="dlab-bnr-inr style-1 bg-primary"
					style={{
						background: `url(/assets/frontend/images/banner/bnr2.png), var(--gradient-sec)`,
						backgroundSize: "cover, 200%",
					}}
				>
					<div class="container">
						<div class="dlab-bnr-inr-entry">
							<h1>Detail Berita</h1>

							<nav
								aria-label="breadcrumb"
								class="breadcrumb-row style-1"
							>
								<ul class="breadcrumb">
									<li class="breadcrumb-item">
										<a href="index.html">Beranda</a>
									</li>
									<li class="breadcrumb-item">Berita</li>
									<li
										class="breadcrumb-item active"
										aria-current="page"
									>
										Detail Berita
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section class="content-inner">
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-8 m-b50">
								<div class="dlab-blog blog-single style-3">
									<div class="dlab-media rounded-sm">
										<img
											src="/assets/frontend/images/blog/default/thum1.jpg"
											alt=""
										/>
									</div>
									<div class="dlab-info">
										<div class="dlab-meta">
											<ul class="border-0 pt-0">
												<li class="post-date">
													<i class="flaticon-clock m-r10"></i>
													7 March, 2020
												</li>
												<li class="post-author">
													<i class="flaticon-user m-r10"></i>
													By
													<a href="javascript:void(0);">
														Johne Doe
													</a>
												</li>
											</ul>
										</div>
										<h4 class="dlab-title">
											Quisque sem tortor, convallis in
											arcu eu, accumsan finibus massa
											donec et sapien risus.
										</h4>
										<div class="dlab-post-text">
											<p>
												Sed auctor magna lacus, in
												placerat nisl sollicitudin ut.
												Morbi feugiat ante velit, eget
												convallis arcu iaculis vel.
												Fusce in rhoncus quam. Integer
												dolor arcu, ullamcorper sed
												auctor vitae, porttitor quis
												erat. Donec sit amet semper
												massa.
											</p>
											<blockquote class="wp-block-quote is-style-default">
												<p>
													Use this static Page to test
													the Theme’s handling of the
													Blog Posts Index page. If
													the site is set to display a
													static Page on the Front
													Page, and this Page is.
												</p>
												<cite>WordPress Community</cite>
											</blockquote>
											<p>
												In cursus urna vitae erat
												tempus, vitae mollis augue
												dignissim. Vivamus at libero
												augue. Vestibulum ipsum turpis,
												faucibus at sodales vel,
												ultricies vitae metus. Cras a
												mattis massa. Aenean sed
												vulputate magna. Nam
												sollicitudin ut libero vel
												faucibus.
											</p>
											<img
												class="alignright rounded-md"
												width="370"
												src="/assets/frontend/images/blog/pic1.jpg"
												alt=""
											/>
											<p>
												Pellentesque quis molestie
												lacus. Sed et pellentesque nibh.
												Pellentesque pretium pretium
												neque, vel fermentum nisl ornare
												non. Aliquam interdum rutrum
												magna quis.
											</p>
											<p>
												Donec pretium, quam a aliquet
												pretium, dolor magna malesuada
												libero, non rhoncus quam lectus
												at lectus. Mauris id consequat
												est, ut aliquet lorem. Maecenas
												mi sem, aliquam et semper et,
												sagittis non magna. Vivamus et
												maximus nulla. Morbi tincidunt
												ex ac diam imperdiet, ut pretium
												justo porttitor. Class aptent
												taciti sociosqu ad litora
											</p>
											<p>
												Nullam est metus, dignissim
												semper magna at, semper viverra
												odio. Nam in lorem neque. Proin
												sagittis iaculis interdum.
												Suspendisse molestie porta enim
												at finibus.
											</p>
										</div>
										<div class="dlab-meta meta-bottom border-top">
											<div class="post-tags">
												<strong>Tags:</strong>
												<a href="javascript:void(0);">
													Child
												</a>
												,
												<a href="javascript:void(0);">
													Eduction
												</a>
												,
												<a href="javascript:void(0);">
													Money
												</a>
												,
												<a href="javascript:void(0);">
													Resturent
												</a>
											</div>
											<div class="dlab-social-icon primary-light">
												<ul>
													<li>
														<a
															class="fab fa-facebook-f"
															href="javascript:void(0);"
														></a>
													</li>
													<li>
														<a
															class="fab fa-instagram"
															href="javascript:void(0);"
														></a>
													</li>
													<li>
														<a
															class="fab fa-twitter"
															href="javascript:void(0);"
														></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-lg-4 m-b30">
								<aside class="side-bar sticky-top">
									<div class="widget style-1">
										<div class="search-bx style-1">
											<form role="search" method="post">
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<i class="la la-search"></i>
														</span>
													</div>
													<input
														name="text"
														class="form-control"
														placeholder="Search"
														type="text"
													/>
													<span class="input-group-btn">
														<button
															type="submit"
															class="btn btn-primary gradient"
														>
															<i class="la la-long-arrow-right"></i>
														</button>
													</span>
												</div>
											</form>
										</div>
									</div>
									<div class="widget widget_categories">
										<h2 class="widget-title">Category</h2>
										<ul>
											<li class="cat-item cat-item-26">
												<a href="#">Audio</a> (3)
											</li>
											<li class="cat-item cat-item-36">
												<a href="#">Beauty</a> (4)
											</li>
											<li class="cat-item cat-item-43">
												<a href="#n">Fashion</a> (3)
											</li>
											<li class="cat-item cat-item-27">
												<a href="#">Images</a> (1)
											</li>
											<li class="cat-item cat-item-40">
												<a href="#">Lifestyle</a> (3)
											</li>
										</ul>
									</div>
									<div class="widget recent-posts-entry style-1">
										<h2 class="widget-title">
											Recent Posts
										</h2>
										<div class="widget-post-bx">
											<div class="widget-post clearfix">
												<div class="dlab-media">
													<a href="blog-details-3.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic1.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-3.html">
															Fusce mollis felis
															quis tristique
														</a>
													</h4>
													<div class="dlab-meta">
														<ul>
															<li class="post-date">
																7 March, 2020
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="widget-post clearfix">
												<div class="dlab-media">
													<a href="blog-details-3.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic2.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-3.html">
															Fusce mollis felis
															quis tristique
														</a>
													</h4>
													<div class="dlab-meta">
														<ul>
															<li class="post-date">
																7 March, 2020
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="widget-post clearfix">
												<div class="dlab-media">
													<a href="blog-details-3.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic3.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-3.html">
															Fusce mollis felis
															quis tristique
														</a>
													</h4>
													<div class="dlab-meta">
														<ul>
															<li class="post-date">
																7 March, 2020
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="widget-post clearfix">
												<div class="dlab-media">
													<a href="blog-details-3.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic3.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-3.html">
															Fusce mollis felis
															quis tristique
														</a>
													</h4>
													<div class="dlab-meta">
														<ul>
															<li class="post-date">
																7 March, 2020
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="widget widget widget_categories">
										<h2 class="widget-title">Archives</h2>
										<ul>
											<li>
												<a href="javascript:void(0);">
													January
												</a>
												(3)
											</li>
											<li>
												<a href="javascript:void(0);">
													Fabruary
												</a>
												(4)
											</li>
											<li>
												<a href="javascript:void(0);">
													March
												</a>
												(4)
											</li>
											<li>
												<a href="javascript:void(0);">
													April
												</a>
												(3)
											</li>
											<li>
												<a href="javascript:void(0);">
													May
												</a>
												(4)
											</li>
											<li>
												<a href="javascript:void(0);">
													Jun
												</a>
												(1)
											</li>
											<li>
												<a href="javascript:void(0);">
													July
												</a>
												(4)
											</li>
										</ul>
									</div>
									<div class="widget widget_tag_cloud style-1">
										<h2 class="widget-title">Tags</h2>
										<div class="tagcloud">
											<a href="javascript:void(0);">
												Business
											</a>
											<a href="javascript:void(0);">
												News
											</a>
											<a href="javascript:void(0);">
												Brand
											</a>
											<a href="javascript:void(0);">
												Website
											</a>
											<a href="javascript:void(0);">
												Internal
											</a>
											<a href="javascript:void(0);">
												Strategy
											</a>
											<a href="javascript:void(0);">
												Brand
											</a>
											<a href="javascript:void(0);">
												Mission
											</a>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default NewsDetail;
