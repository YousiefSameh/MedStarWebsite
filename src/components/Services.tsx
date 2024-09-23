import Title from "./ui/Title";

const Services = () => {
	return (
		<section id="services">
			<div className="container">
        <Title title="We Offer Diiferent Services To Improve Your Health" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut."/>
				<div className="row grid grid-cols-1 md:grid-cols-2 gap-y-[3rem] lg:grid-cols-3 gap-[4rem] mt-20">
					<div className="item flex">
						<i className="text-[40px] text-light-blue mr-5 fa-solid fa-rectangle-list"></i>
						<div>
							<h3 className="text-[20px] mb-2.5">General Treatment</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt et ab dolorum doloribus voluptate quidem.
							</p>
						</div>
					</div>
					<div className="item flex">
						<i className="text-[40px] text-light-blue mr-5 fa-solid fa-ear-listen"></i>
						<div>
							<h3 className="text-[20px] mb-2.5">Ear Treatment</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt et ab dolorum doloribus voluptate quidem.
							</p>
						</div>
					</div>
					<div className="item flex">
						<i className="text-[40px] text-light-blue mr-5 fa-solid fa-tooth"></i>
						<div>
							<h3 className="text-[20px] mb-2.5">Teeth Whitening</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt et ab dolorum doloribus voluptate quidem.
							</p>
						</div>
					</div>
					<div className="item flex">
						<i className="text-[40px] text-light-blue mr-5 fa-solid fa-eye"></i>
						<div>
							<h3 className="text-[20px] mb-2.5">View Problems</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt et ab dolorum doloribus voluptate quidem.
							</p>
						</div>
					</div>
					<div className="item flex">
						<i className="text-[40px] text-light-blue mr-5 fa-solid fa-heart-pulse"></i>
						<div>
							<h3 className="text-[20px] mb-2.5">Heart Surgery</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt et ab dolorum doloribus voluptate quidem.
							</p>
						</div>
					</div>
					<div className="item flex">
						<i className="text-[40px] text-light-blue mr-5 fa-solid fa-droplet"></i>
						<div>
							<h3 className="text-[20px] mb-2.5">Blood Transfusion</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt et ab dolorum doloribus voluptate quidem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
