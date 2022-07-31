import React from "react";
import { Link } from "react-router-dom";

function CardNews(props) {
	return (
		// <div
		// 	class="dlab-blog style-1 bg-white m-b50 wow fadeInUp"
		// 	data-wow-delay="1s"
		// 	data-wow-duration="3s"
		// >
		// 	<div class="dlab-media dlab-img-effect zoom post-video">
		// 		<Link to={`/news/detail?slug=${props.slug}`}>
		// 			<img
		// 				src={`assets/frontend/images/blog/default/${props.image}`}
		// 				alt=""
		// 			/>
		// 		</Link>
		// 	</div>
		// 	<div class="dlab-info">
		// 		<h4 class="dlab-title">
		// 			<Link to={`/news/detail?slug=${props.slug}`}>
		// 				Fusce sem ligula, imperdiet sed nisi sit amet, euismod
		// 				posuere dolor. Vestibulum in ante ut tortor eleifend
		// 			</Link>
		// 		</h4>
		// 		<p class="m-b0">
		// 			Sed auctor magna lacus, in placerat nisl sollicitudin ut.
		// 			Morbi feugiat ante velit, eget convallis arcu iaculis vel.
		// 			Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed
		// 			auctor vitae, porttitor quis erat. Donec sit amet semper
		// 			massa.
		// 		</p>
		// 		<div class="dlab-meta meta-bottom">
		// 			<ul>
		// 				<li class="post-date">
		// 					<i class="flaticon-clock m-r10"></i>7 March, 2020
		// 				</li>
		// 				<li class="post-author">
		// 					<i class="flaticon-user m-r10"></i>
		// 					By
		// 					<a href="javascript:void(0);">{props.createdBy}</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>
		<div
			class="card-container col-lg-12 col-md-12 wow fadeInUp"
			data-wow-duration="2s"
			data-wow-delay="0.2s"
		>
			<div class="dlab-blog style-2 m-b50">
				<div class="dlab-media rounded-md dlab-img-effect zoom">
					<Link to={`/news/detail?slug=${props.slug}`}>
						<img
							src={`assets/frontend/images/blog/default/${props.image}`}
							alt=""
						/>
					</Link>
				</div>
				<div class="dlab-info">
					<h4 class="dlab-title">
						<Link to={`/news/detail?slug=${props.slug}`}>
							Maecenas maximus augue eget libero dictum, vitae
							tempus erat pretium.
						</Link>
					</h4>
					<p class="m-b20">
						Nunc convallis sagittis dui eu dictum. Cras sodales id
						ipsum ac aliquam. Phasellus justo quam, sagittis vel sem
						congue, vehicula tempus elit.
					</p>
					<div class="dlab-meta mb-0">
						<ul>
							<li class="post-date">25 March 2022</li>
							<li class="post-author">
								<i class="las la-user-circle"></i> By{" "}
								<a href="javascript:void(0);">
									{props.createdBy}
								</a>
							</li>
							<li class="post-comment">
								<i class="las la-tags"></i>
								<a href="javascript:void(0);">{props.tags}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardNews;
