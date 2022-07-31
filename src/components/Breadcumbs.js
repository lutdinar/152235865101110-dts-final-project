import React from "react";

function Breadcumbs(props) {
	return (
		<div
			class="dlab-bnr-inr style-1 bg-primary"
			style={{
				backgroundImage: `url(/assets/frontend/images/banner/bnr2.png), var(--gradient-sec)`,
				backgroundSize: "cover, 200%",
			}}
		>
			<div class="container">
				<div class="dlab-bnr-inr-entry">
					<h1>{props.title}</h1>

					<nav aria-label="breadcrumb" class="breadcrumb-row style-1">
						<ul class="breadcrumb">
							<li class="breadcrumb-item">
								<a href={props.urlFirstSegment}>
									{props.firstSegment}
								</a>
							</li>
							<li
								class="breadcrumb-item active"
								aria-current="page"
							>
								{props.secondSegment}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Breadcumbs;
