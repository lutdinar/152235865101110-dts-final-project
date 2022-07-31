import React from "react";
import { Link } from "react-router-dom";

function CardProduct(props) {
	return (
		<div
			class="col-lg-4 col-md-6 wow fadeInUp"
			data-wow-duration="2s"
			data-wow-delay="0.4s"
		>
			<Link
				to={`/services/product/detail/${props.slug}`}
				className="icon-cell"
			>
				<div class="icon-bx-wraper style-1 box-hover text-center m-b30">
					<div class="icon-bx-md radius bg-skyblue shadow-skyblue">
						<i class={props.icon + " text-white"}></i>
					</div>

					<div class="icon-content">
						<h4 class="dlab-title">{props.name}</h4>

						<div class="row m-b10 text-start">
							<div class="col-1">
								<i
									class="las la-info-circle"
									style={{
										lineHeight: "1.6",
										color: "#5e5e5e",
										fontSize: "16px",
									}}
								></i>
							</div>
							<div class="col-10">
								<p
									style={{
										lineHeight: "1.6",
										color: "#5e5e5e",
										fontSize: "16px",
									}}
								>
									{props.description}.
								</p>
							</div>
						</div>
						<div class="row text-start">
							<div class="col-1">
								<i
									class="las la-money-bill-wave-alt"
									style={{
										lineHeight: "1.6",
										color: "#5e5e5e",
										fontSize: "16px",
									}}
								></i>
							</div>
							<div class="col-10">
								<p
									style={{
										lineHeight: "1.6",
										color: "#5e5e5e",
										fontSize: "16px",
									}}
								>
									{props.price_status
										? "Rp. " + props.price
										: props.price_desc}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default CardProduct;
