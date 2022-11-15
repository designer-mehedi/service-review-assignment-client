import React from 'react';
import { Link } from "react-router-dom";

const Blog = () => {
    return (
		<div className="max-w-screen-xl mx-auto">
			<h2 className="text-center text-3xl md:text-5xl font-bold py-10">Blog Posts</h2>
			<div className="grid md:grid-cols-2 gap-5 mb-20 px-5">
				<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<span className="">
						<img
							className="rounded-t-lg h-[320px] w-full border-b-2"
							src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png"
							alt=""
						/>
					</span>
					<div className="p-5">
						<span href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								What is JWT, and how does it work?
							</h5>
						</span>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							JSON Web Token (JWT) is an open standard (RFC 7519)
							for securely transmitting information between
							parties as JSON object. It is compact, readable and
							digitally signed using a private key/ or a public
							key pair by the Identity Provider(IdP). So the
							integrity and authenticity of the token can be
							verified by other parties involved. The purpose of
							using JWT is not to hide data but to ensure the
							authenticity of the data. JWT is signed and encoded,
							not encrypted. JWT is a token based stateless
							authentication mechanism. Since it is a client-side
							based stateless session, server doesn't have to
							completely rely on a datastore(database) to save
							session information. Basically the identity
							provider(IdP) generates a JWT certifying user
							identity and Resource server decodes and verifies
							the authenticity of the token using secret salt /
							public key.
						</p>
						<p>
							User sign-in using username and password or
							google/facebook. Authentication server verifies the
							credentials and issues a jwt signed using either a
							secret salt or a private key. User's Client uses the
							JWT to access protected resources by passing the JWT
							in HTTP Authorization header. Resource server then
							verifies the authenticity of the token using the
							secret salt/ public key.
						</p>
						<Link
							href="#"
							className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
						>
							Read more
							<svg
								aria-hidden="true"
								className="ml-2 -mr-1 w-4 h-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<span>
						<img
							className="rounded-t-lg h-[320px] w-full"
							src="https://i.ytimg.com/vi/B8KdllPwxBw/maxresdefault.jpg"
							alt=""
						/>
					</span>
					<div className="p-5">
						<span href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								What is the difference between javascript and
								NodeJS?
							</h5>
						</span>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Javascript is an open-source framework that is
							flexible, fast, and lightweight. Cross-compilation
							is possible. Interfaces, modules, and classes are
							all supported. It can be used for both frontend and
							backend development, allowing it to run on various
							platforms. It enables us to create user interfaces
							that react when the mouse has hovered over them. It
							works well with other languages. Thus it can be used
							in a variety of other applications. We could enhance
							JavaScript to allow us to write significant
							applications.
						</p>
						<p>
							Node JS is an MIT-licensed accessible framework. It
							is a lightweight framework with only the most
							essential modules. Other components may be added
							based on the demands of the application. It is a
							multi-platform framework that runs on Windows, Mac
							OS X, and Linux. The JavaScript programming language
							is used to create server-side apps. Any form of data
							in js applications was never buffered. Data is
							output in chunks by Node.js apps. The Node.js
							library's Interfaces are all reactive or
							non-blocking. Node.js host never awaits data from
							such an API. It is now crystal clear to us. The
							server moves on to the following API after calling
							one, and a Node.js notification mechanism helps the
							server receive a response from the previous API
							request. JS is a fast-execution programming library
							based on the V8 JavaScript Engine.
						</p>
						<Link
							href="#"
							className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
						>
							Read more
							<svg
								aria-hidden="true"
								className="ml-2 -mr-1 w-4 h-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<span>
						<img
							className="rounded-t-lg h-[320px] w-full"
							src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
							alt=""
						/>
					</span>
					<div className="p-5">
						<span href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Difference between SQL and NoSQL
							</h5>
						</span>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Type – SQL databases are primarily called as
							Relational Databases (RDBMS); whereas NoSQL database
							are primarily called as non-relational or
							distributed database. Language – SQL databases
							defines and manipulates data based structured query
							language (SQL). Seeing from a side this language is
							extremely powerful. SQL is one of the most versatile
							and widely-used options available which makes it a
							safe choice especially for great complex queries.
							But from other side it can be restrictive. SQL
							requires you to use predefined schemas to determine
							the structure of your data before you work with it.
							Also all of your data must follow the same
							structure. This can require significant up-front
							preparation which means that a change in the
							structure would be both difficult and disruptive to
							your whole system. A NoSQL database has dynamic
							schema for unstructured data. Data is stored in many
							ways which means it can be document-oriented,
							column-oriented, graph-based or organized as a
							KeyValue store. This flexibility means that
							documents can be created without having defined
							structure first. Also each document can have its own
							unique structure. The syntax varies from database to
							database, and you can add fields as you go.
							Scalability – In almost all situations SQL databases
							are vertically scalable. This means that you can
							increase the load on a single server by increasing
							things like RAM, CPU or SSD. But on the other hand
							NoSQL databases are horizontally scalable. This
							means that you handle more traffic by sharding, or
							adding more servers in your NoSQL database. It is
							similar to adding more floors to the same building
							versus adding more buildings to the neighborhood.
							Thus NoSQL can ultimately become larger and more
							powerful, making these databases the preferred
							choice for large or ever-changing data sets.
						</p>
						<p>
							Structure – SQL databases are table-based on the
							other hand NoSQL databases are either key-value
							pairs, document-based, graph databases or
							wide-column stores. This makes relational SQL
							databases a better option for applications that
							require multi-row transactions such as an accounting
							system or for legacy systems that were built for a
							relational structure. Property followed – SQL
							databases follow ACID properties (Atomicity,
							Consistency, Isolation and Durability) whereas the
							NoSQL database follows the Brewers CAP theorem
							(Consistency, Availability and Partition tolerance).
							Support – Great support is available for all SQL
							database from their vendors. Also a lot of
							independent consultations are there who can help you
							with SQL database for a very large scale deployments
							but for some NoSQL database you still have to rely
							on community support and only limited outside
							experts are available for setting up and deploying
							your large scale NoSQL deployments.
						</p>
						<Link
							href="#"
							className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
						>
							Read more
							<svg
								aria-hidden="true"
								className="ml-2 -mr-1 w-4 h-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<span>
						<img
							className="rounded-t-lg h-[320px] w-full border-b-2"
							src="https://i.stack.imgur.com/awRTq.png"
							alt=""
						/>
					</span>
					<div className="p-5">
						<span href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								How does NodeJS handle multiple requests at the
								same time?
							</h5>
						</span>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							NodeJS receives multiple client requests and places
							them into EventQueue. NodeJS is built with the
							concept of event-driven architecture. NodeJS has its
							own EventLoop which is an infinite loop that
							receives requests and processes them. EventLoop is
							the listener for the EventQueue. If NodeJS can
							process the request without I/O blocking then the
							event loop would itself process the request and
							sends the response back to the client by itself.
							But, it is possible to process multiple requests
							parallelly using the NodeJS cluster module or
							worker_threads module. A single instance of Node.js
							runs in a single thread. If you have a multi-core
							system then you can utilize every core. Sometimes
							developer wants to launch a cluster of NodeJS
							process to take advantage of the multi-core system.
							The cluster module allows easy creation of child
							processes that all share the same server ports.
						</p>
						<p>
							If your system has 8 CPU then 8 NodeJS instances
							will be created and every instance has its own
							independent event loop. Now NodeJS can process all
							request parallelly. They are all share same port
							(PORT 3000) but not state. The master process
							listens on a port, accepts new connections and
							distributes them across the workers in a round-robin
							fashion, with some built-in smarts to avoid
							overloading a worker process.
						</p>
						<Link
							href="#"
							className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
						>
							Read more
							<svg
								aria-hidden="true"
								className="ml-2 -mr-1 w-4 h-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;