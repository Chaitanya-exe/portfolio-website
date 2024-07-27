import React from 'react';
import Image from 'next/image';
import { icons } from '@/constants';
const Icons = () => {
  return (
    <div className="flex flex-row gap-[60px] justify-center">
        {icons.map((brand)=>(
            <a href={brand.url}>
                <Image 
                    src={brand.img}
                    width={30}
                    height={30}
                />
            </a>
        ))}
    </div>
  )
}

export default Icons