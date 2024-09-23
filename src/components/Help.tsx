import Title from "./ui/Title"

const Help = () => {
  return (
    <section id="help">
				<div className="container">
          <Title title="We Are Always To Help You & Your Family" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut."/>
					<div className="row grid grid-cols-1 gap-y-[3rem] lg:grid-cols-3 items-center lg:gap-[3rem] mt-12 text-center">
						<div className="col relative before:hidden lg:before:absolute lg:before:block lg:before:top-[40px] lg:before:right-[-75px] lg:before:w-[118px] lg:before:border-b-4 lg:before:border-dotted lg:before:border-light-blue">
							<i className="fa-solid fa-truck-medical p-[25px] text-light-blue border border-[#ddd] rounded-full text-[30px] cursor-pointer"></i>
							<h3 className="my-5">Emergency Help</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Laborum, provident?
							</p>
						</div>
						<div className="col relative before:hidden lg:before:absolute lg:before:block lg:before:top-[40px] lg:before:right-[-75px] lg:before:w-[118px] lg:before:border-b-4 lg:before:border-dotted lg:before:border-light-blue">
							<i className="fa-solid fa-heart-pulse p-[25px] text-light-blue border border-[#ddd] rounded-full text-[30px] cursor-pointer"></i>
							<h3 className="my-5">Enriched pharmecy</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Laborum, provident?
							</p>
						</div>
						<div className="col relative">
							<i className="fa-solid fa-stethoscope p-[25px] text-light-blue border border-[#ddd] rounded-full text-[30px] cursor-pointer"></i>
							<h3 className="my-5">Medical Treatments</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Laborum, provident?
							</p>
						</div>
					</div>
				</div>
		</section>
  )
}

export default Help