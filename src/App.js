import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import News from "./views/news/News";
import NewsDetail from "./views/news/NewsDetail";
import Ppid from "./views/Ppid";
import Gallery from "./views/Gallery";
import About from "./views/profile/About";
import VisionMision from "./views/profile/VisionMision";
import Structure from "./views/profile/Structure";
import JobDesc from "./views/profile/JobDesc";
import Program from "./views/profile/Program";
import Product from "./views/services/Product";
import Report from "./views/services/Report";
import SubUnit from "./views/profile/SubUnit";
import ProductDetail from "./views/services/ProductDetail";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="profile/about" element={<About />} />
				<Route path="profile/vision" element={<VisionMision />} />
				<Route path="profile/structure" element={<Structure />} />
				<Route path="profile/jobdesc" element={<JobDesc />} />
				<Route path="profile/program" element={<Program />} />
				<Route path="profile/unit" element={<SubUnit />} />
				<Route path="news" element={<News />} />
				<Route path="news/detail" element={<NewsDetail />} />
				<Route path="services/product" element={<Product />} />
				<Route
					path="services/product/detail/:slug"
					element={<ProductDetail />}
				/>
				<Route path="services/report" element={<Report />} />
				<Route path="ppid" element={<Ppid />} />
				<Route path="gallery" element={<Gallery />} />
			</Routes>
		</Router>
	);
}

export default App;
