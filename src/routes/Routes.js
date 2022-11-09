import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Services/ServiceDetails";

import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/services",
				element: <Services />,
				loader: () => fetch("http://localhost:5000/service-page"),
			},
			{
				path: "/service/:id",
				element: <ServiceDetails />,
				loader: ({ params }) =>
					fetch(
						`http://localhost:5000/service-page/${params.id}`
					),
			},
		],
	},
]);