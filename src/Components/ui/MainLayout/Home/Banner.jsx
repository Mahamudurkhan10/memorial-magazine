import Image from 'next/image';
import React from 'react';

const Banner = () => {
     return (
          <div className='bg-cover bg-center bg-no-repeat' style={{backgroundImage:"url('https://i.ibb.co.com/Zc8KDR2/Rectangle-3.png')"}}>
               <div className='h-[800px]  container mx-auto flex items-center ' >
                <div className='flex-1 space-y-4 text-white'>
                   <h1 className='text-3xl' >Welcome to Memorial Moments Magazine</h1>
                    <h1 className='text-6xl w-2/3'>Unforgettable Moments, Endless Love</h1>
                    <p className='text-lg'> We understand every funeral is different because every person isunique and each family situation is different. </p>
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
                <div>
                    <Image src={"https://i.ibb.co.com/Qjmt9RH/Group-672.png"} height={400} width={400} alt='image'/>
                </div>
               </div>
          </div>
     );
};

export default Banner;