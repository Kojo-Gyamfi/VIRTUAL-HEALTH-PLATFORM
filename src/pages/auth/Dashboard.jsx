import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Dashboard = () => {
    return (
        <div>
            <Navbar />

            <section className='py-20 items-center justify-center md:bg-[url("./src/assets/search-bg.png")] md:bg-no-repeat md:bg-bottom md:bg-[length:100%_auto]'
                style={{
                    backgroundColor: "#f9f9f9",
                    minHeight: "400px",
                    paddingBottom: "20px",
                    backgroundBlendMode: "darken"
                }}>
                <div>
                    <div className='items-center justify-center mx-auto text-center'>
                        <h1 className='md:text-[45px] text-4xl mb-3 mx-4 md:mx-5 font-extrabold font-weight-900 text-[#272b41]'>
                            Search Doctor, Make an Appointment
                        </h1>
                        <p className='font-semibold text-[#757575] md:text-[20px] text-[16px] mx-5'>
                            Discover the best doctors, clinic & hospital the city nearest to you.
                        </p>
                    </div>
                    <div className="md:flex lg:flex-row justify-center items-center mx-10 md:mx-25 lg:mx-50 mt-10 gap-3">
                        <div>
                            <input
                                type="text"
                                placeholder="Search Locations"
                                className=" w-full px-4 py-3 border mb-4 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#074250] focus:border-[#074250] sm:text-sm"
                            />
                        </div>

                        <div className='flex-grow'>
                            <input
                                type="text"
                                placeholder="Search for doctors, clinics, or hospitals"
                                className="w-full px-4 mb-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#074250] focus:border-[#074250] sm:text-sm"
                            />
                        </div>

                        <div>
                            <button className="w-full md:flex bg-[#074250] text-white px-4 py-3 mb-4 rounded-md shadow-sm hover:bg-[#062f3c] transition-colors duration-300 hover:cursor-pointer">
                                Search
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* clinicals and specialities */}
            <section className='py-10'>
                <div className='md:px-20'>
                    <h2 className='text-center text-[30px] md:text-[36px] font-bold mb-5 mx-4'>Clinic and Specialities</h2>
                    <p className='text-center text-[16px] text-[#757575] mx-18 lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mx-10 md:mx-8 md:px-18 lg:px-30 mt-10'>
                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Urology
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Neurology
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Orthopedic
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Cardiologist
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Dentist
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Dermatologist
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Pediatrics
                    </button>

                    <button className='py-3 bg-[#074250] text-white rounded-md shadow-md cursor-pointer text-[10px] md:text-[16px] font-semibold hover:bg-[#062f3c] transition-colors duration-300'>
                        Gynecologist
                    </button>

                </div>
            </section>

            {/* Featured Doctors  */}
            <section className='py-15'>
                <div>
                    <h2 className='text-center text-3xl font-bold mb-8'>Featured Doctors</h2>
                    <p className='text-[16px] mx-10 mb-5 text-[#757575] leading-[26px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    <p className='text-[16px] mx-10 mb-10 text-[#757575] leading-[26px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illum numquam neque a reprehenderit aliquid quia, consequuntur mollitia beatae soluta, quasi, id ea quisquam asperiores nobis et inventore laboriosam. Dolore?</p>


                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 '>
                        {/* Example doctor card */}

                        <div className='border p-4 rounded-lg shadow-md'>
                            <img src="../src/assets/doctors/doctor-01.jpg" alt="Doctor-Image"
                                className='mb-5 rounded-[5px]' />
                            <h3 className='text-xl font-semibold'>Dr. Rebecca Kudabakim</h3>
                            <p className='text-gray-600 text-[14px] mt-3'>MDS - Periodontology and Oral Implantology, BDS</p>
                            <p className='text-gray-500 text-[13px] mt-3'>New York, USA</p>
                            <p className='text-gray-500 text-[13px]'>Experience: 10 years</p>
                            <p className='text-gray-500 text-[13px]'>Rating: 4.5/5 </p>
                            <div className='flex  '>
                                <button className='mt-4 bg-none text-[13px] text-[#074250] mr-3 px-4 py-1 rounded border-2 border-[#074250] hover:bg-[#062f3c] hover:text-white transition duration-300 ease-in-out cursor-pointer'>Book Now</button>
                                <button className='mt-4 bg-[#074250] text-[13px] text-white px-6 py-1 rounded hover:bg-[#062f3c] transition duration-300 ease-in-out cursor-pointer'>View Profile</button>
                            </div>
                        </div>

                        <div className='border p-4 rounded-lg shadow-md'>
                            <img src="../src/assets/doctors/doctor-02.jpg" alt="Doctor-Image"
                                className='mb-5 rounded-[5px]' />
                            <h3 className='text-xl font-semibold'>Dr. Gyamfi Kwadwo</h3>
                            <p className='text-gray-600 text-[14px] mt-3'>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                            <p className='text-gray-500 text-[13px] mt-3'>New York, USA</p>
                            <p className='text-gray-500 text-[13px]'>Experience: 15 years</p>
                            <p className='text-gray-500 text-[13px] mb-5'>Rating: 4.7/5 </p>
                            <div className='flex  '>
                                <button className='mt-4 bg-none text-[13px] text-[#074250] mr-3 px-4 py-1 rounded border-2 border-[#074250] hover:bg-[#062f3c] hover:text-white transition duration-300 ease-in-out cursor-pointer'>Book Now</button>
                                <button className='mt-4 bg-[#074250] text-[13px] text-white px-6 py-1 rounded hover:bg-[#062f3c] transition duration-300 ease-in-out cursor-pointer'>View Profile</button>
                            </div>
                        </div>

                        <div className='border p-4 rounded-lg shadow-md'>
                            <img src="../src/assets/doctors/doctor-04.jpg" alt="Doctor-Image"
                                className='mb-5 rounded-[5px]' />
                            <h3 className='text-xl font-semibold'>Dr. Mary Aikens</h3>
                            <p className='text-gray-600 text-[14px] mt-3'>MBBS, MD - General Medicine, DNB - Cardiology</p>
                            <p className='text-gray-500 text-[13px] mt-3'>New York, USA</p>
                            <p className='text-gray-500 text-[13px]'>Experience: 9 years</p>
                            <p className='text-gray-500 text-[13px]'>Rating: 4.4/5 </p>
                            <div className='flex  '>
                                <button className='mt-4 bg-none text-[13px] text-[#074250] mr-3 px-4 py-1 rounded border-2 border-[#074250] hover:bg-[#062f3c] hover:text-white transition duration-300 ease-in-out cursor-pointer'>Book Now</button>
                                <button className='mt-4 bg-[#074250] text-[13px] text-white px-6 py-1 rounded hover:bg-[#062f3c] transition duration-300 ease-in-out cursor-pointer'>View Profile</button>
                            </div>
                        </div>

                        <div className='border p-4 rounded-lg shadow-md'>
                            <img src="../src/assets/doctors/doctor-08.jpg" alt="Doctor-Image"
                                className='mb-5 rounded-[5px]' />
                            <h3 className='text-xl font-semibold'>Dr. Nicholas Deon</h3>
                            <p className='text-gray-600 text-[14px] mt-3'>MBBS, MD - Dermatology , Venereology &amp; Lepros</p>
                            <p className='text-gray-500 text-[13px] mt-3'>New York, USA</p>
                            <p className='text-gray-500 text-[13px]'>Experience: 11 years</p>
                            <p className='text-gray-500 text-[13px]'>Rating: 4.6/5 </p>
                            <div className='flex  '>
                                <button className='mt-4 bg-none text-[13px] text-[#074250] mr-3 px-4 py-1 rounded border-2 border-[#074250] hover:bg-[#062f3c] hover:text-white transition duration-300 ease-in-out cursor-pointer'>Book Now</button>
                                <button className='mt-4 bg-[#074250] text-[13px] text-white px-6 py-1 rounded hover:bg-[#062f3c] transition duration-300 ease-in-out cursor-pointer'>View Profile</button>
                            </div>
                        </div>

                        <div className='border p-4 rounded-lg shadow-md'>
                            <img src="../src/assets/doctors/doctor-03.jpg" alt="Doctor-Image"
                                className='mb-5 rounded-[5px]' />
                            <h3 className='text-xl font-semibold'>Dr. Jacklyn Appiah</h3>
                            <p className='text-gray-600 text-[14px] mt-3'>MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                            <p className='text-gray-500 text-[13px] mt-3'>New York, USA</p>
                            <p className='text-gray-500 text-[13px]'>Experience: 10 years</p>
                            <p className='text-gray-500 text-[13px]'>Rating: 4.5/5 </p>
                            <div className='flex  '>
                                <button className='mt-4 bg-none text-[13px] text-[#074250] mr-3 px-4 py-1 rounded border-2 border-[#074250] hover:bg-[#062f3c] hover:text-white transition duration-300 ease-in-out cursor-pointer'>Book Now</button>
                                <button className='mt-4 bg-[#074250] text-[13px] text-white px-6 py-1 rounded hover:bg-[#062f3c] transition duration-300 ease-in-out cursor-pointer'>View Profile</button>
                            </div>
                        </div>

                        <div className='border p-4 rounded-lg shadow-md'>
                            <img src="../src/assets/doctors/doctor-09.jpg" alt="Doctor-Image"
                                className='mb-5 rounded-[5px]' />
                            <h3 className='text-xl font-semibold'>Dr. Bright Amegah</h3>
                            <p className='text-gray-600 text-[14px] mt-3'>MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                            <p className='text-gray-500 text-[13px] mt-3'>New York, USA</p>
                            <p className='text-gray-500 text-[13px]'>Experience: 11 years</p>
                            <p className='text-gray-500 text-[13px]'>Rating: 4.6/5 </p>
                            <div className='flex  '>
                                <button className='mt-4 bg-none text-[13px] text-[#074250] mr-3 px-4 py-1 rounded border-2 border-[#074250] hover:bg-[#062f3c] hover:text-white transition duration-300 ease-in-out cursor-pointer'>Book Now</button>
                                <button className='mt-4 bg-[#074250] text-[13px] text-white px-6 py-1 rounded hover:bg-[#062f3c] transition duration-300 ease-in-out cursor-pointer'>View Profile</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div>
                <section className='py-10 bg-gray-100'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold mb-5'>Why Choose Our Hospitals?</h2>
                        <p className='text-gray-600 text-[16px] mx-10 mb-8'>
                            Our hospitals are equipped with state-of-the-art facilities and staffed by highly qualified professionals to ensure the best care for you and your loved ones.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10'>
                        <div className='p-6 bg-white rounded-lg shadow-md'>
                            <h3 className='text-xl font-semibold mb-3'>Advanced Technology</h3>
                            <p className='text-gray-600 text-[14px]'>
                                We use cutting-edge medical equipment to provide accurate diagnoses and effective treatments.
                            </p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow-md'>
                            <h3 className='text-xl font-semibold mb-3'>Expert Doctors</h3>
                            <p className='text-gray-600 text-[14px]'>
                                Our team of experienced doctors is dedicated to delivering personalized and compassionate care.
                            </p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow-md'>
                            <h3 className='text-xl font-semibold mb-3'>24/7 Emergency Services</h3>
                            <p className='text-gray-600 text-[14px]'>
                                We are always ready to handle emergencies with our round-the-clock services.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Testimonials Section */}
            <section className='py-10 bg-[#f9f9f9]'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-5'>What Our Patients Say</h2>
                    <p className='text-gray-600 text-[16px] mx-10 mb-8'>
                        Hear from our satisfied patients about their experiences with our services.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10'>
                    <div className='p-6 bg-white rounded-lg shadow-md'>
                        <p className='text-gray-600 text-[14px] italic mb-4'>
                            "The doctors and staff were incredibly professional and caring. I felt at ease throughout my treatment."
                        </p>
                        <h3 className='text-lg font-semibold'>- Sarah Johnson</h3>
                    </div>
                    <div className='p-6 bg-white rounded-lg shadow-md'>
                        <p className='text-gray-600 text-[14px] italic mb-4'>
                            "State-of-the-art facilities and expert care. I couldn't have asked for a better experience."
                        </p>
                        <h3 className='text-lg font-semibold'>- Michael Brown</h3>
                    </div>
                    <div className='p-6 bg-white rounded-lg shadow-md'>
                        <p className='text-gray-600 text-[14px] italic mb-4'>
                            "The emergency services were quick and efficient. They saved my life!"
                        </p>
                        <h3 className='text-lg font-semibold'>- Emily Davis</h3>
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription Section */}
            <section className='py-10 bg-[#074250] text-white'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-5'>Stay Updated</h2>
                    <p className='text-[16px] mx-10 mb-8'>
                        Subscribe to our newsletter to receive the latest updates and health tips.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center mx-10 gap-4'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ffffff] focus:border-[#ffffff] sm:text-sm"
                    />
                    <button className="bg-[#ffffff] text-[#074250] px-6 py-3 rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-300">
                        Subscribe
                    </button>
                </div>
            </section>

            {/* this is the footer section */}
            <Footer />

        </div >
    )
}

export default Dashboard
