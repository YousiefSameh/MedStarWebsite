import Title from "./ui/Title"

const Doctors = () => {
  return (
    <section id="doctors">
				<div className="container">
          <Title title="Meet Our Experience Doctors" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,ut."/>
					<div className="row grid grid-cols-1 md:grid-cols-2 gap-y-[3rem] lg:grid-cols-3 mt-12 lg:gap-x-12 text-center">
						<div className="item bg-white">
							<img src="img/doctor-1.jpg" className="w-full h-[300px]" alt="Dr. Zyad Ali" />
							<div className="items-details py-8">
								<h3 className="text-[22px]">Dr. Zyad Ali</h3>
								<p className="my-[10px] mb-[20px] text-light-blue font-medium">Surgeon</p>
								<a href="#" className="btn btn-primary rounded-[20px]">details</a>
							</div>
						</div>
						<div className="item bg-white">
							<img src="img/doctor-2.jpg" className="w-full h-[300px]" alt="Dr. Mazen Osama" />
							<div className="items-details py-8">
								<h3 className="text-[22px]">Dr. Mazen Osama</h3>
								<p className="my-[10px] mb-[20px] text-light-blue font-medium">Ophthalomology</p>
								<a href="#" className="btn btn-primary rounded-[20px]">details</a>
							</div>
						</div>
						<div className="item bg-white">
							<img src="img/doctor-3.avif" className="w-full h-[300px]" alt="Dr. Aysha Mostafa" />
							<div className="items-details py-8">
								<h3 className="text-[22px]">Dr. Aisha Mostafa</h3>
								<p className="my-[10px] mb-[20px] text-light-blue font-medium">Dentist</p>
								<a href="#" className="btn btn-primary rounded-[20px]">details</a>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Doctors