const Info = () => {
  return (
    <section id="info">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[3rem] lg:grid-cols-4">
          <div className="flex flex-col md:flex-row text-center lg:text-left items-center justify-center cursor-pointer">
            <i className="fa-solid fa-house-chimney text-[30px] p-[30px] mr-0 mb-[10px] border-2 border-white rounded-full md:mr-5 md:mb-0 hover:bg-white hover:text-light-blue"></i>
            <div>
              <span className="text-[30px] font-semibold">3468</span>
              <p className="text-white">Hospital Rooms</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center lg:text-left items-center justify-center cursor-pointer">
            <i className="fa-solid fa-user text-[30px] p-[30px] mr-0 mb-[10px] border-2 border-white rounded-full md:mr-5 md:mb-0 hover:bg-white hover:text-light-blue"></i>
            <div>
              <span className="text-[30px] font-semibold">557</span>
              <p className="text-white">Specialist Doctors</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center lg:text-left items-center justify-center cursor-pointer">
            <i className="fa-regular fa-face-smile-beam text-[30px] p-[30px] mr-0 mb-[10px] border-2 border-white rounded-full md:mr-5 md:mb-0 hover:bg-white hover:text-light-blue"></i>
            <div>
              <span className="text-[30px] font-semibold">4379</span>
              <p className="text-white">Happy Patients</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center lg:text-left items-center justify-center cursor-pointer">
            <i className="fa-solid fa-table-list text-[30px] p-[30px] mr-0 mb-[10px] border-2 border-white rounded-full md:mr-5 md:mb-0 hover:bg-white hover:text-light-blue"></i>
            <div>
              <span className="text-[30px] font-semibold">32</span>
              <p className="text-white">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info