import { Earth, MailOpen, MapPinned, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
     return (
          <div>
               <footer className="bg-[#328de8]">
                    <div className="mx-auto container space-y-6 px-4 py-9  sm:px-6  lg:px-8">
                         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                              <div>
                                   <div className="">
                                        <Image src={"https://i.ibb.co.com/fQJ7Gx9/Property-1-White.png"} width={190} height={100} alt='image'></Image>
                                   </div>

                                   <p className="mt-4 max-w-xs text-white">
                                        We understand every funeral is different because every person isunique and each family situation is different.</p>
                                   <div className='flex gap-4 pt-9 '>
                                        <div className='flex gap-2 btn btn-outline text-white'>
                                             <Image src={"https://i.ibb.co.com/HdsMcbR/Vector.png"} width={30} height={0} alt='image' ></Image>
                                             <div>
                                                  <p className='text-xs '>Download on the</p>
                                                  <h1 className='text-xl'>App Store</h1>
                                             </div>
                                        </div>
                                        <div className='flex gap-2 btn btn-outline text-white'>
                                             <Image src={"https://i.ibb.co.com/SxxnHvf/logos-google-play-icon.png"} width={30} height={0} alt='image' ></Image>
                                             <div>
                                                  <p className='text-xs uppercase'>Get IT ON</p>
                                                  <h1 className='text-xl'>Google Play</h1>
                                             </div>
                                        </div>

                                   </div>

                              </div>

                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                                   <div>
                                        <p className="font-semibold text-xl text-white">Quick Links</p>

                                        <ul className="mt-6 space-y-4 text-lg">
                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> About Us </a>
                                             </li>

                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Services </a>
                                             </li>

                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Contact Us </a>
                                             </li>

                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75">Blog</a>
                                             </li>

                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Pricing </a>
                                             </li>
                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Team</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <div>
                                        <p className="font-semibold text-white text-xl">Services</p>

                                        <ul className="mt-6 space-y-4 text-lg">
                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Individual Stories </a>
                                             </li>

                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Veteran Stories </a>
                                             </li>

                                             <li>
                                                  <a href="#" className="text-white transition hover:opacity-75"> Pets Stories </a>
                                             </li>
                                        </ul>
                                   </div>

                                   <div>
                                        <p className="font-semibold text-white text-xl">Contact Info</p>

                                        <ul className="mt-6 space-y-4 text-sm">
                                             <li>
                                                  <a href="#" className="text-white transition text-lg hover:opacity-75 flex items-center gap-1"> <Phone /> (303) 274-8750</a>
                                             </li>
                                             <li>
                                                  <a href="#" className="text-white transition text-lg hover:opacity-75 flex items-center gap-1"> <MailOpen />  memorial_moment@gmail.com</a>
                                             </li>
                                             <li>
                                                  <a href="#" className="text-white transition text-lg hover:opacity-75 flex items-center gap-1"> <MapPinned /> 13005 Greenville Avenue California, TX 70240</a>
                                             </li>
                                             <li>
                                                  <a href="#" className="text-white transition text-lg hover:opacity-75 flex items-center gap-1"> <Earth /> Map & Directions</a>
                                             </li>

                                             
                                        </ul>
                                   </div>

                                   
                              </div>
                         </div>
                      <div className="divider"></div>
                        <div className='flex gap-32'>
                        <p className=" text-white">Privacy Policy / Terms & Conditions</p>
                        <p className=" text-white">&copy; 2022. Company Name. All rights reserved.</p>
                        </div>
                    </div>
               </footer>

          </div>
     );
};

export default Footer;