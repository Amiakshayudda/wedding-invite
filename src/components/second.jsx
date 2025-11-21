import React from "react";
import { GiSelfLove, GiHeadbandKnot } from 'react-icons/gi'
import { Link } from "react-router-dom";
import second_img from '../images/057A2871.jpg'
import { IoLogoInstagram } from "react-icons/io";


const Second = () => {
    return (<>
        <div className="second-fullscreen-image flex justify-center">
            <a href="https://instagram.com/amiakshay" target="_blank" rel="noopener noreferrer"
                className="instagram-badge">
                <IoLogoInstagram />
                <span>amiakshay</span>
            </a>
            {/* <img src="https://antphotography.in/wp-content/uploads/2019/08/DSC1755-Edit.jpg"></img> */}
            <div className="second-page-div text-yellow flex flex-col items-center">
                <div className="w-full flex flex-col items-center justify-center pt-4">
                    <span style={{fontSize:'14px', textAlign:'center'}} className="heading mb-4">
                        We invite you to celebrate our wedding
                    </span>
                    <span style={{fontSize:'40px', textAlign:'center'}} className="heading flex items-center justify-center mb-4">
                        <span className="mr-4">Saloni</span><span className="mr-4"><GiSelfLove /></span><span className="">Nikhil</span>
                    </span>
                    {/* <span style={{fontSize:'18px', textAlign:'center'}} className="heading">
                        December 7, 2023
                    </span> */}
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                    <div className="w-3/5 p-2 pt-0 flex items-center justify-center">
                        <Link to={'/third'} className="w-full">
                            <button className="heading w-full pt-2 pb-2 rounded-lg shadow-lg bg-yellow border-yellow text-black">
                                {/* Click to know more... */}
                                When and where ?? 
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Second;