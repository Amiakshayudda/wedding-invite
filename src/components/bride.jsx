import React from "react";
import { GiSelfLove, GiHeadbandKnot, GiRose } from 'react-icons/gi'
// import { GiHeadbandKnot } from 'react-icons/lu'


const Bride = () => {
    return (<>
        <div className="fullscreen-div heading text-pink">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="mb-2 pl-6 pr-6">
                        <span style={{fontSize:'30px'}} className="flex items-center">
                            <span className="mr-2">Our</span><span className="mr-2"><GiRose /></span><span className="mr-2">Story</span>
                        </span>
                    </div>
                    <div className="pl-6 pr-6" style={{textAlign:'center'}}>
                        afcgvhbjn fcgvyhbjunk  tfgyhbujni ftgyhbujni  tfgyhbujni ftgyhbujniftgyvbhjn gyvbhjnkm
                    </div>
                </div>
                <div className="flex flex-col rounded-xl pl-4 pr-4 mt-4 ml-4 mr-4 mb-4" style={{ border: '2px solid pink' }}>
                    <div className="flex flex-row pt-4">
                        <div className="w-3/5 pl-6 flex items-center underline" style={{fontSize:'20px'}}>
                            Ajay Udda
                        </div>
                        <div style={{ border: '2px solid pink', borderRadius: '60px', height: '100px', width: '100px', overflow:'hidden' }}>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
                        </div>
                    </div>
                    <div className="border border-pink pt-4 pb-6" style={{textAlign:'center'}}>
                        <span>first person story first person story first person story first person story
                            first person story first person story first person story first person story first person story
                            first person story first person story first person story first person story first person story
                            first person story first person story first person story first person story first person story
                        </span>
                    </div>
                </div>
                <div className="pl-4 pr-4 w-5/6 rounded-xl" style={{ border: '2px solid pink', overflow:'hidden', height:'300px'}}>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                <div className="flex flex-col rounded-xl pl-4 pr-4 mt-4 ml-4 mr-4 mb-4" style={{ border: '2px solid pink' }}>
                    <div className="flex flex-row pt-4">
                        <div style={{ border: '2px solid pink', borderRadius: '60px', height: '100px', width: '100px', overflow:'hidden' }}>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
                        </div>
                        <div className="w-3/5 pl-6 flex items-center underline" style={{fontSize:'20px'}}>
                            Pooja Kaunchi
                        </div>
                    </div>
                    <div className="border border-pink pt-4 pb-6" style={{textAlign:'center'}}>
                        <span>first person story first person story first person story first person story
                            first person story first person story first person story first person story first person story
                            first person story first person story first person story first person story first person story
                            first person story first person story first person story first person story first person story
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Bride;