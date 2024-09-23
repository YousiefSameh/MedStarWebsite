const Newsletter = () => {
  return (
    <section id="newsletter" className="py-[5rem] bg-bg-newsletter">
				<div className="container">
					<div className="row grid grid-cols-1 gap-y-[3rem] lg:grid-cols-2 lg:gap-x-[3rem]">
						<div className="col">
							<h2 className="mb-[10px] text-2xl">Sign Up For Newsletter</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Placeat, reprehenderit?
							</p>
						</div>
						<form className="grid grid-cols-[2fr_1fr] items-center justify-center gap-x-[2rem]">
							<input
								type="email"
								name="Email"
								placeholder="Your Email Addres"
                className="w-full p-[15px] border-none outline-light-blue"
							/>
							<button type="submit" className="btn btn-primary w-full p-[15px] border-none outline-light-blue">Subscribe</button>
						</form>
					</div>
				</div>
    </section>
  )
}

export default Newsletter