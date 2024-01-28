import Skeloton from '@/components/skeloton';
import React from 'react';

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeloton className='col-span-6 row-span-6 h-[860px]'/>
      <Skeloton className='col-span-3 row-span-6'/>
      <Skeloton className='col-span-3 row-span-6'/>
    </div>
  )
}
