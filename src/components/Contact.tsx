import Title from "./ui/Title"

const Contact = () => {
  return (
    <section id="contact">
				<div className="container">
          <Title title="We Are Always Ready To Help You. Book An Appointment" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut."/>
					<div className="row grid grid-cols-1 gap-y-[3rem] lg:grid-cols-2 items-center lg:gap-x-[3rem] mt-24">
						<form className="order-2 lg:order-none">
							<div className="form-control grid grid-cols-2 gap-x-[1.5rem] mb-5">
								<input className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]" type="text" name="Name" placeholder="Name" required />
								<input className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]" type="email" name="Email" placeholder="Email" required />
							</div>
							<div className="form-control grid grid-cols-2 gap-x-[1.5rem] mb-5">
								<input
									className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]"
									type="number"
									name="Phone"
									placeholder="Phone"
									required
								/>
								<select name="Department" className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]">
									<option value="1" selected>Department</option>
									<option value="2">Dental</option>
									<option value="3">Ophthalomology</option>
									<option value="4">Surgery</option>
									<option value="5">Childbirth</option>
									<option value="6">Intensive Care</option>
									<option value="7">Lab</option>
								</select>
							</div>
							<div className="form-control grid grid-cols-2 gap-x-[1.5rem] mb-5">
								<select name="doctor" className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]">
									<option value="1" selected>Doctor</option>
									<option value="2">Zyad Ali</option>
									<option value="3">Mazen Osama</option>
									<option value="4">Aisha Mostafa</option>
								</select>
								<input className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]" type="date" name="date" placeholder="date" required />
							</div>
							<textarea
								name="Message"
								cols={30}
								rows={10}
								placeholder="Write Your Message Here..."
                className="p-[15px] w-full text-light-gray outline-light-blue border border-[#ddd]"
							></textarea>
							<button type="submit" className="btn btn-primary p-[15px] pt-[15px] pb-[15px] px-[30px] border-none mt-6">
								Book An Appointment
							</button>
						</form>
						<img src="img/contact.jpg" className="justify-self-end w-full order-1 lg:order-none lg:max-w-full" alt="Contact Img" />
					</div>
				</div>
			</section>
  )
}

export default Contact