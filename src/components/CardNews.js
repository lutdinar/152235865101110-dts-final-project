import React from "react";
import { Link } from "react-router-dom";

function CardNews({data}) {
	return (
		<div
			class="card-container col-lg-12 col-md-12 wow fadeInUp"
			data-wow-duration="2s"
			data-wow-delay="0.2s"
		>
			<div class="dlab-blog style-2 m-b50">
				<div class="dlab-media rounded-md dlab-img-effect zoom">
					<Link to={`/news/detail?slug=${data.slug}`}>
						<img
							src={`https://putr-dev.sumedangkab.go.id/admin/data/uploads/images/${data.banner}`}
							alt={data.title}
							style={{ height: '350px' }}
						/>
					</Link>
				</div>
				<div class="dlab-info">
					<h4 class="dlab-title">
						<Link to={`/news/detail?slug=${data.slug}`}>
							{data.title}
						</Link>
					</h4>
					{/*<p class="m-b20">*/}
					{/*	Nunc convallis sagittis dui eu dictum. Cras sodales id*/}
					{/*	ipsum ac aliquam. Phasellus justo quam, sagittis vel sem*/}
					{/*	congue, vehicula tempus elit.*/}
					{/*</p>*/}
					<div class="dlab-meta mb-0">
						<ul>
							<li class="post-date">{data.date_post}</li>
							<li class="post-author">
								<i class="las la-user-circle"></i> By{" "}
								<a href="javascript:void(0);">
									Admin
								</a>
							</li>
							<li class="post-comment">
								{/*<i class="las la-tags"></i>*/}
								{/*<a href="javascript:void(0);">{props.tags}</a>*/}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardNews;
