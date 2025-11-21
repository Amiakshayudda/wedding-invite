import React from "react";
import { GiSelfLove, GiHeadbandKnot } from 'react-icons/gi'
import { Link } from "react-router-dom";
// import { GiHeadbandKnot } from 'react-icons/lu'
import home_img from '../images/057A3872.jpg'
import { IoLogoInstagram } from "react-icons/io";


const Home = () => {
    return (<>
        <div className="fullscreen-image flex justify-center">
            <a href="https://instagram.com/amiakshay" target="_blank" rel="noopener noreferrer"
                className="instagram-badge">
                <IoLogoInstagram />
                <span>amiakshay</span>
            </a>
            {/* <img src="https://antphotography.in/wp-content/uploads/2019/08/DSC1755-Edit.jpg"></img> */}
            <div className="home-div text-pink rounded-lg flex flex-col items-center">
                <div className="w-full flex flex-col items-center justify-center pt-4">
                    <span style={{fontSize:'18px', textAlign:'center'}} className="heading">
                        WE ARE GETTING MARRIED...<GiSelfLove />
                    </span>
                    {/* <span style={{fontSize:'35px', textAlign:'center'}} className="heading flex items-center justify-center">
                        <span className="mr-4">Ajay</span><span className="mr-4"><GiSelfLove /></span><span className="">Pooja</span>
                    </span>
                    <span style={{fontSize:'12px', textAlign:'center'}} className="heading">
                        Save the date
                    </span>
                    <span style={{fontSize:'15px', textAlign:'center'}} className="heading mb-4">
                        December 7, 2023
                    </span> */}
                    <hr className="w-full line-colr"></hr>
                    {/* <span style={{fontSize:'20px', textAlign:'center'}} className="heading mb-2">
                        Choose your side..
                    </span> */}
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                    <div className="w-full p-2 pt-0 flex items-center justify-center">
                        <Link to={'/second'} className="w-full">
                            <button className="heading w-full pt-2 pb-2 rounded-lg shadow-lg bg-pink border-pink text-white">
                                {/* Click to know more... */}
                                Excited to grace the occasion?? 
                            </button>
                        </Link>
                    </div>
                    {/* <div className="w-full p-2 pt-0 flex items-center justify-center">
                        <Link to={'/story'} className="w-full">
                            <button className="heading w-full pt-2 pb-2 rounded-lg shadow-lg bg-pink border-pink text-white">
                                Click to know more...
                                Excited to grace the occassion?? 
                            </button>
                        </Link>
                    </div> */}
                    {/* <div className="w-1/2 p-2 pt-0 flex items-center justify-center">
                        <Link to={'/groom'} className="w-full">
                            <button className="heading w-full pt-2 pb-2 rounded-lg shadow-lg border-pink bg-pink text-white">
                                Groom
                            </button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    </>)
}

export default Home;