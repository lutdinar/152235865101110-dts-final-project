import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../templates/frontend/Footer";
import Header from "../../templates/frontend/Header";

function ProductDetail(props) {
	const [searchParams, setSearchParams] = useSearchParams();
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
					<div class="container m-t30">
						<div class="dlab-bnr-inr-entry">
							<h1>Produk Layanan Detail</h1>

							<nav aria-label="breadcrumb" class="breadcrumb-row">
								<ul class="breadcrumb">
									<li class="breadcrumb-item">
										<a href="index.html">Produk</a>
									</li>
									<li class="breadcrumb-item">
										{/* {searchParams.get("slug")} */}
									</li>
									<li
										class="breadcrumb-item active"
										aria-current="page"
									>
										Detail
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ProductDetail;
