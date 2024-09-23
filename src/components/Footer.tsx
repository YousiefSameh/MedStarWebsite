const Footer = () => {
  return (
    <footer id="footer">
			<div className="footer-top bg-light-blue py-[6rem]">
				<div className="container">
					<div className="row grid grid-cols-1 md:grid-cols-2 gap-y-[3rem] lg:grid-cols-[1.5fr_1fr_1.5fr_1.5fr] lg:gap-x-[3rem]">
						<div className="col-1">
							<h2 className="text-white text-[22px]">About Us</h2>
							<hr className="w-[50px] h-[2px] border-none bg-white my-[10px] mb-[2rem]"/>
							<p className="text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellat quibusdam quae aut accusamus, nobis magni, nulla, vel
								numquam velit explicabo esse doloremque odio id quisquam.
							</p>
							<div className="social mt-[30px] flex gap-1">
								<a className="text-white text-[14px] w-[35px] h-[35px] flex items-center justify-center border border-white rounded-full mr-[10px] transition-all duration-300 ease-in-out hover:bg-white hover:text-light-blue" href="#" aria-label="Visit Facebook"><i className="fa-brands fa-facebook-f"></i></a>
								<a className="text-white text-[14px] w-[35px] h-[35px] flex items-center justify-center border border-white rounded-full mr-[10px] transition-all duration-300 ease-in-out hover:bg-white hover:text-light-blue" href="#" aria-label="Visit Google"><i className="fa-brands fa-google-plus-g"></i></a>
								<a className="text-white text-[14px] w-[35px] h-[35px] flex items-center justify-center border border-white rounded-full mr-[10px] transition-all duration-300 ease-in-out hover:bg-white hover:text-light-blue" href="#" aria-label="Visit Twitter"><i className="fa-brands fa-twitter"></i></a>
								<a className="text-white text-[14px] w-[35px] h-[35px] flex items-center justify-center border border-white rounded-full mr-[10px] transition-all duration-300 ease-in-out hover:bg-white hover:text-light-blue" href="#" aria-label="Visit Vimeo"><i className="fa-brands fa-vimeo-v"></i></a>
								<a className="text-white text-[14px] w-[35px] h-[35px] flex items-center justify-center border border-white rounded-full mr-[10px] transition-all duration-300 ease-in-out hover:bg-white hover:text-light-blue" href="#" aria-label="Visit Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
							</div>
						</div>
						<div className="col-2">
							<h2 className="text-white text-[22px]">Quick Links</h2>
							<hr className="w-[50px] h-[2px] border-none bg-white my-[10px] mb-[2rem]"/>
							<ul>
								<li className="text-white my-[10px] transition-all duration-300 ease-in-out hover:translate-x-[10px]">
									<a className="text-white" href="#home"><i className="mr-[5px] fa-solid fa-caret-right"></i> Home</a>
								</li>
								<li className="text-white my-[10px] transition-all duration-300 ease-in-out hover:translate-x-[10px]">
									<a className="text-white" href="#about"><i className="mr-[5px] fa-solid fa-caret-right"></i> About</a>
								</li>
								<li className="text-white my-[10px] transition-all duration-300 ease-in-out hover:translate-x-[10px]">
									<a className="text-white" href="#services"><i className="mr-[5px] fa-solid fa-caret-right"></i> Services</a>
								</li>
								<li className="text-white my-[10px] transition-all duration-300 ease-in-out hover:translate-x-[10px]">
									<a className="text-white" href="#doctors"><i className="mr-[5px] fa-solid fa-caret-right"></i> Doctors</a>
								</li>
								<li className="text-white my-[10px] transition-all duration-300 ease-in-out hover:translate-x-[10px]">
									<a className="text-white" href="#blogs"><i className="mr-[5px] fa-solid fa-caret-right"></i> Blogs</a>
								</li>
								<li className="text-white my-[10px] transition-all duration-300 ease-in-out hover:translate-x-[10px]">
									<a className="text-white" href="#Contact"><i className="mr-[5px] fa-solid fa-caret-right"></i> Contact</a>
								</li>
							</ul>
						</div>
						<div className="col-3">
							<h2 className="text-white text-[22px]">Open Hours</h2>
							<hr className="w-[50px] h-[2px] border-none bg-white my-[10px] mb-[2rem]"/>
							<p className="text-white mb-5">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Assumenda laborum explicabo maiores obcaecati quis amet.
							</p>
							<ul>
								<li className="text-white my-[10px]">Monday - Thursday 8.00 - 20.00</li>
								<li className="text-white my-[10px]">Saturday 9.00 - 18.30</li>
								<li className="text-white my-[10px]">Friday 9.00 - 15.00</li>
							</ul>
						</div>
						<div className="col-4 relative">
							<h2 className="text-white text-[22px]">Newsletter</h2>
							<hr className="w-[50px] h-[2px] border-none bg-white my-[10px] mb-[2rem]"/>
							<p className="text-white mb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
								laborum quae. Itaque, cum? Quaerat obcaecati, voluptatem
								sapiente sequi velit cupiditate.
							</p>
							<form>
								<input type="email" name="Email" placeholder="Email" className="placeholder:text-white p-[15px] w-full bg-transparent text-white border border-white rounded-[5px] outline-none" />
								<button type="submit" aria-label="Send Mail" className="absolute p-[16px] right-0 border-none rounded-tr-[5px] rounded-br-[5px]">
									<i className="fa-solid fa-paper-plane text-light-blue text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-dark-gray"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright py-[2rem] text-center bg-light-blue-hover text-white">
				<p className="text-white">
					&copy; All Right Reserved 2024 | Made By
					<a className="text-white font-semibold" target="_blank" href="https://yousiefsamehportofolio.web.app">Yousief Sameh</a>
				</p>
			</div>
		</footer>
  )
}

export default Footer