import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CardNews from "../../components/CardNews";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";
import axios from "axios";

function News(props) {
	const BASE_URL_API	= "http://127.0.0.1/putr/api/v1/";
	const [news, setNews] = useState([]);
	const [lastNews, setLastNews]	= useState([]);
	const [categories, setCategories]	= useState([]);

	const getNews = () => {
        const API = `https://putr-dev.sumedangkab.go.id/admin/api/v1/news`;
        axios.get(API)
            .then(function (response) {
                // handle success
				setNews(response.data.news);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
	};

	const getCategories = () => {
		const API = `https://putr-dev.sumedangkab.go.id/admin/api/v1/category`
		axios.get(API)
			.then((response) => setCategories(response.data.category))
			.catch((error) => console.log(error));
	}

    useEffect(() => {
        return () => {
            getNews();
            getCategories();
        };
    }, []);

	return (
		<div>
			<Header />
			<div class="page-content bg-white">
				<div
					class="dlab-bnr-inr style-1 bg-primary"
					style={{
						background: `url(assets/frontend/images/banner/bnr2.png), var(--gradient-sec)`,
						backgroundSize: "cover 200%",
					}}
				>
					<div class="container">
						<div class="dlab-bnr-inr-entry">
							<h1>Berita</h1>

							<nav
								aria-label="breadcrumb"
								class="breadcrumb-row style-1"
							>
								<ul class="breadcrumb">
									<li class="breadcrumb-item">
										<a href="index.html">Beranda</a>
									</li>
									<li
										class="breadcrumb-item active"
										aria-current="page"
									>
										Berita
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section class="content-inner bg-img-fix">
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-8 m-b50">
                                {news.map((newdata) => (
                                	<CardNews key={newdata.id} data={newdata} />
                                ))}
								{/*<CardNews*/}
								{/*	image="thum3.jpg"*/}
								{/*	createdBy="Admin"*/}
								{/*	tags="Infrastruktur"*/}
								{/*	slug="title-1"*/}
								{/*/>*/}

								<nav
									aria-label="Blog Pagination wow fadeInUp"
									data-wow-delay="1s"
									data-wow-duration="2s"
								>
									<ul class="pagination text-center p-t20">
										<li class="page-item">
											<a
												class="page-link prev"
												href="javascript:void(0);"
											>
												Prev
											</a>
										</li>
										<li class="page-item">
											<a
												class="page-link active"
												href="javascript:void(0);"
											>
												1
											</a>
										</li>
										<li class="page-item">
											<a
												class="page-link"
												href="javascript:void(0);"
											>
												2
											</a>
										</li>
										<li class="page-item">
											<a
												class="page-link"
												href="javascript:void(0);"
											>
												3
											</a>
										</li>
										<li class="page-item">
											<a
												class="page-link next"
												href="javascript:void(0);"
											>
												Next
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div class="col-xl-4 col-lg-4 m-b30">
								<aside class="side-bar sticky-top">
									<div
										class="widget style-1 wow fadeInRight"
										data-wow-duration="2s"
										data-wow-delay="1s"
									>
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
															class="btn btn-secondary"
														>
															<i class="la la-long-arrow-right"></i>
														</button>
													</span>
												</div>
											</form>
										</div>
									</div>
									<div
										class="widget widget_categories wow fadeInRight"
										data-wow-duration="2s"
										data-wow-delay="1s"
									>
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
									<div
										class="widget recent-posts-entry wow fadeInRight"
										data-wow-duration="2s"
										data-wow-delay="1s"
									>
										<h2 class="widget-title">
											RECENT POSTS
										</h2>
										<div class="widget-post-bx">
											<div class="widget-post clearfix">
												<div class="dlab-media">
													<a href="blog-details-2.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic1.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-2.html">
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
													<a href="blog-details-2.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic2.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-2.html">
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
													<a href="blog-details-2.html">
														<img
															src="/assets/frontend/images/blog/recent-blog/pic3.jpg"
															alt=""
														/>
													</a>
												</div>
												<div class="dlab-info">
													<h4 class="title">
														<a href="blog-details-2.html">
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

									{/*<div*/}
									{/*	class="widget widget_tag_cloud wow fadeInRight"*/}
									{/*	data-wow-duration="2s"*/}
									{/*	data-wow-delay="1s"*/}
									{/*>*/}
									{/*	<h2 class="widget-title">TAGS</h2>*/}
									{/*	<div class="tagcloud">*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Business*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			News*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Brand*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Website*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Internal*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Strategy*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Brand*/}
									{/*		</a>*/}
									{/*		<a href="javascript:void(0);">*/}
									{/*			Mission*/}
									{/*		</a>*/}
									{/*	</div>*/}
									{/*</div>*/}
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

export default News;
