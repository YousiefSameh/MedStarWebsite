import Title from "./ui/Title"

const Blogs = () => {
  return (
    <section id="blogs">
				<div className="container">
					<Title title="Keep Up With Our Most Recent Medical News" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut."/>
					<div className="row grid grid-cols-1 md:grid-cols-2 gap-y-[3rem] lg:grid-cols-3 mt-12 lg:gap-x-8">
						<div className="col shadow-md">
							<img src="img/blog-1.jpeg" className="w-full" alt="Blog 1" />
							<div className="col-content p-8 relative before:absolute before:w-0 before:h-[2px] before:bg-light-blue before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
								<p className="date inline-block p-[5px] px-[15px] rounded-[5px] bg-light-blue text-white">22 Aug, 2023</p>
								<h3 className="my-[10px] font-medium text-xl">We Have Announced Our New Product</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
									exercitationem eius adipisci praesentium deserunt quaerat
									ipsum quod quisquam rem nam.
								</p>
							</div>
						</div>
						<div className="col shadow-md">
							<img src="img/blog-2.jpeg" className="w-full" alt="Blog 2" />
							<div className="col-content p-8 relative before:absolute before:w-0 before:h-[2px] before:bg-light-blue before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
								<p className="date inline-block p-[5px] px-[15px] rounded-[5px] bg-light-blue text-white">30 Dec, 2023</p>
								<h3 className="my-[10px] font-medium text-xl">Top Five Ways For Solving Teeth Problems</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
									exercitationem eius adipisci praesentium deserunt quaerat
									ipsum quod quisquam rem nam.
								</p>
							</div>
						</div>
						<div className="col shadow-md">
							<img src="img/blog-3.jpg" className="w-full" alt="Blog 3" />
							<div className="col-content p-8 relative before:absolute before:w-0 before:h-[2px] before:bg-light-blue before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
								<p className="date inline-block p-[5px] px-[15px] rounded-[5px] bg-light-blue text-white">1 Jan, 2024</p>
								<h3 className="my-[10px] font-medium text-xl">We Provide Highly Business Solution</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
									exercitationem eius adipisci praesentium deserunt quaerat
									ipsum quod quisquam rem nam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Blogs