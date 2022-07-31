import React from "react";

function CardUptd(props) {
	return (
		<div
			class="col-xl-4 col-md-6 wow fadeInUp"
			data-wow-duration="2s"
			data-wow-delay="0.1s"
		>
			<div class="dlab-team style-1 m-b30">
				<div class="dlab-media dlab-img-effect zoom zoom-slow">
					<a href="javascript:void(0);">
						<img
							src="/assets/frontend/images/team/pic1.jpg"
							alt=""
						/>
					</a>
				</div>
				<div class="dlab-content">
					<div class="clearfix">
						<h4 class="dlab-name">
							<a href="javascript:void(0);">{props.name}</a>
						</h4>
						<span class="dlab-position">
							{props.address ? props.address : "-"}
						</span>
					</div>
					<ul class="dlab-social-icon primary-light">
						<li>
							<a
								href="javascript:void(0);"
								class="fa fa-phone-alt"
							></a>
						</li>
						<li>
							<a
								href="javascript:void(0);"
								class="fab fa-instagram"
							></a>
						</li>
						<li>
							<a
								href="javascript:void(0);"
								class="fa fa-map-marker"
							></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CardUptd;
