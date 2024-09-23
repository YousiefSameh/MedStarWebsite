const Header = () => {
  return (
    <header id="home" className="top-0 w-full bg-white shadow-md z-50">
			<div className="navbar fixed top-0 w-full bg-white shadow-md z-50">
				<nav className="flex flex-col md:flex-row items-center justify-between max-w-width-section mx-auto py-[10px] px-0 lg:py-2.5 min-h-[80px] lg:px-8">
					<a href="./index.html"
						><img src="img/logo.png" className="logo w-[150px] lg:w-[250px]" alt="MedStar Hospital"
					/></a>
					<ul className="links flex items-center">
						<li><a href="#home" className="text-dark-gray font-medium transition-all duration-transition-speed ease-in-out mx-[5px] text-[14px] md:text-base lg:mx-[15px] hover:text-light-blue">Home</a></li>
						<li><a href="#about" className="text-dark-gray font-medium transition-all duration-transition-speed ease-in-out mx-[5px] text-[14px] md:text-base lg:mx-[15px] hover:text-light-blue">About</a></li>
						<li><a href="#services" className="text-dark-gray font-medium transition-all duration-transition-speed ease-in-out mx-[5px] text-[14px] md:text-base lg:mx-[15px] hover:text-light-blue">Services</a></li>
						<li><a href="#doctors" className="text-dark-gray font-medium transition-all duration-transition-speed ease-in-out mx-[5px] text-[14px] md:text-base lg:mx-[15px] hover:text-light-blue">Doctors</a></li>
						<li><a href="#blogs" className="text-dark-gray font-medium transition-all duration-transition-speed ease-in-out mx-[5px] text-[14px] md:text-base lg:mx-[15px] hover:text-light-blue">Blogs</a></li>
						<li><a href="#contact" className="text-dark-gray font-medium transition-all duration-transition-speed ease-in-out mx-[5px] text-[14px] md:text-base lg:mx-[15px] hover:text-light-blue">Contact</a></li>
					</ul>
				</nav>
			</div>
			<div className="home-content min-h-[90vh] bg-[url('../img/bg-home.jpg')] bg-no-repeat bg-center bg-cover flex items-center mt-16">
				<div className="col w-width-section mx-auto px-8">
					<small className="font-medium text-[14px] tracking-[1px] flex items-end"
						><img src="img/section-img.png" className="align-bottom mr-2" alt="section-img" /> WE GIVE YOU THE
						BEST!</small>
					<h1 className="text-[32px] lg:text-[40px] max-w-[600px] leading-[1.4] font-bold">
						We Provide You
						<span className="text-light-blue"> Medical</span> Services That You Can
						<span className="text-light-blue"> Trust!</span>
					</h1>
					<p className="my-[10px] mb-[30px] max-w-[500px] leading-[1.6]">
						Need Professional Help? Our Support Staff Will Answer Your
						Questions. Visit Us Now Or Make An Appointment!
					</p>
					<a href="#" className="btn btn-primary mr-4 mb-[10px] lg:mb-0">Get Appointment</a>
					<a href="#contact" className="btn btn-secondary">Contact Now</a>
				</div>
			</div>
		</header>
  );
}

export default Header