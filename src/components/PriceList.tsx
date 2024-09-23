import Title from "./ui/Title"

const PriceList = () => {
  return (
    <section id="price-list">
				<div className="container">
          <Title title="We Provide The Best Treatment In Reasonable Price" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut."/>
					<div className="row grid grid-cols-1 md:grid-cols-2 gap-y-[3rem] lg:grid-cols-3 lg:gap-x-[2rem] mt-20">
						<div className="col bg-white border border-[#ddd] p-[3rem] px-[2rem]">
							<div className="price-details text-center">
								<i className="text-[60px] text-light-blue fa-solid fa-scissors fa-rotate-270"></i>
								<h3 className="text-[24px] mt-8 font-medium">Plastic Surgery</h3>
								<p className="text-[35px] text-light-blue font-semibold">$199 <span className="text-[16px] text-light-gray font-light">/ visit</span></p>
							</div>
							<ul className="mt-8">
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-gray fa-solid fa-circle-xmark"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-gray fa-solid fa-circle-xmark"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-gray fa-solid fa-circle-xmark"></i>
								</li>
							</ul>
							<a href="#contact" className="btn w-full text-center mt-[25px] btn-primary">Book Now</a>
						</div>
						<div className="col bg-white border border-[#ddd] p-[3rem] px-[2rem]">
							<div className="price-details text-center">
								<i className="text-[60px] text-light-blue fa-solid fa-tooth"></i>
								<h3 className="text-[24px] mt-8 font-medium">Teeth Whitening</h3>
								<p className="text-[35px] text-light-blue font-semibold">$299 <span className="text-[16px] text-light-gray font-light">/ visit</span></p>
							</div>
							<ul className="mt-8">
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-gray fa-solid fa-circle-xmark"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-gray fa-solid fa-circle-xmark"></i>
								</li>
							</ul>
							<a href="#contact" className="btn w-full text-center mt-[25px] btn-primary">Book Now</a>
						</div>
						<div className="col bg-white border border-[#ddd] p-[3rem] px-[2rem]">
							<div className="price-details text-center">
								<i className="text-[60px] text-light-blue fa-solid fa-heart-pulse"></i>
								<h3 className="text-[24px] mt-8 font-medium">Heart Surgery</h3>
								<p className="text-[35px] text-light-blue font-semibold">$399 <span className="text-[16px] text-light-gray font-light">/ visit</span></p>
							</div>
							<ul className="mt-8">
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
								<li className="flex items-center justify-between my-[15px] text-light-gray">
									Lorem ipsum dolor sit.
									<i className="text-light-blue fa-solid fa-circle-check"></i>
								</li>
							</ul>
							<a href="#contact" className="btn w-full text-center mt-[25px] btn-primary">Book Now</a>
						</div>
					</div>
				</div>
			</section>
  )
}

export default PriceList