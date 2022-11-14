import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import ServiceDetails from "../pages/Services/ServiceDetails";

import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
				element: <Home />,
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
				element: (
					<PrivateRoute>
						<ServiceDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://service-review-assignment-server.vercel.app/service-page/${params.id}`
					),
			},
			{
				path: "/reviews",
				element: (
					<PrivateRoute>
						<MyReview />
					</PrivateRoute>
				),
			},
			{
				path: "/add-service",
				element: <AddService />,
			},
			{
				path: "/blog",
				element: <Blog/>
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
		],
	},
]);