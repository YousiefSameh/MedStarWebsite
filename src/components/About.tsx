import Title from "./ui/Title"

const About = () => {
  return (
    <section id="about">
				<div className="container">
          <Title title="We Offer Different Services To Improve Your Health" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut."/>
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[3rem] items-center lg:gap-[4rem] mt-16">
						<div className="col">
							<h3 className="text-[25px] font-semibold">Who We Are</h3>
							<hr className="w-[60px] h-[3px] bg-light-blue border-none my-2.5"/>
							<p className="text-[16px] my-[25px]">
								We take health care personally at MedStar hospital. Because
								excellence in Health care is about more than just medicine,
								technology, tests and treatments.
							</p>
							<p className="text-[16px] my-[25px]">
								It is about really caring for people with dignity and respect.
								Thats what we do. We Are dedicated to providing the best care to
								meet the need people for our community, for our patients -- for
								you.
							</p>
							<div className="list grid grid-cols-2">
								<ul>
									<li className="mb-1.5 text-light-gray">
										<i className="fa-solid fa-circle-play text-light-blue mr-1.5"></i> Lorem ipsum dolor
										sit.
									</li>
									<li className="mb-1.5 text-light-gray">
										<i className="fa-solid fa-circle-play text-light-blue mr-1.5"></i> Lorem ipsum dolor
										sit.
									</li>
									<li className="mb-1.5 text-light-gray">
										<i className="fa-solid fa-circle-play text-light-blue mr-1.5"></i> Lorem ipsum dolor
										sit.
									</li>
								</ul>
								<ul>
									<li className="mb-1.5 text-light-gray">
										<i className="fa-solid fa-circle-play text-light-blue mr-1.5"></i> Lorem ipsum dolor
										sit.
									</li>
									<li className="mb-1.5 text-light-gray">
										<i className="fa-solid fa-circle-play text-light-blue mr-1.5"></i> Lorem ipsum dolor
										sit.
									</li>
									<li className="mb-1.5 text-light-gray">
										<i className="fa-solid fa-circle-play text-light-blue mr-1.5"></i> Lorem ipsum dolor
										sit.
									</li>
								</ul>
							</div>
						</div>
						<img src="img/about-img.jpeg" className="w-full" alt="about-img" />
					</div>
				</div>
			</section>
  )
}

export default About