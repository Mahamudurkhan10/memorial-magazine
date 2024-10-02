import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
     const navItems = <div className='flex gap-16 text-xl  text-white'>
          <Link href={'/'} ><li>Home</li></Link>
          <Link href={'/'} ><li>About Us</li></Link>
          <Link href={'/'} ><li>Services</li></Link>
          <Link href={'/'} ><li>Stories</li></Link>
          <Link href={'/'} ><li>Pricing</li></Link>
          <Link href={'/'} ><li>Blog</li></Link>
     </div>
     return (
          <div className='container mx-auto'>
               <div className="navbar fixed z-10 container  ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                  
                                {navItems}
                                
                              </ul>
                         </div>
                         <a className=""> <Image src={"https://i.ibb.co.com/fQJ7Gx9/Property-1-White.png"} width={160} height={20} alt='image'></Image> </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                             
                            {navItems}
                             
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <button className='btn btn-outline text-white px-8'> Contact Us <MoveRight/>  </button>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;