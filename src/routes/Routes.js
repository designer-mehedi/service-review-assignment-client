import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import ServiceDetails from "../pages/Services/ServiceDetails";

import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";

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
				path: "/home",
				element: <Home/>
			},
			{
				path: "/services",
				element: <Services />,
				loader: () =>
					fetch(
						"https://service-review-assignment-server.vercel.app/service-page"
					),
			},
			{
				path: "/services/:id",
				element: <ServiceDetails />,
				loader: ({ params }) =>
					fetch(
						`https://service-review-assignment-server.vercel.app/service-page/${params.id}`
					),
			},
			{
				path: "/reviews",
				element: <MyReview/>
			},
			{
				path: "/login",
				element: <Login/>
			},
			{
				path: "/signup",
				element: <SignUp/>
			}
		],
	},
]);