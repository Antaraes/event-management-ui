import React from 'react'
import { Icon } from '@iconify/react'

export default function SummaryCard({ totalEvent,totalOrganizer }) {
  return (
    <div className='flex justify-center gap-5 my-5'>
        <div className='w-[300px] h-[100px] border border-black rounded-lg flex justify-evenly'>
            <div className='w-full flex flex-col justify-center items-center'>
                <Icon icon="ic:round-event" color='black' width="90" height="90" />
            </div>
            <div className='w-full flex flex-col justify-center gap-4'>
                <div className='flex flex-col gap-1 justify-center items-start'>
                <p className='text-black text-2xl justify-start'>{totalEvent}</p>
                </div>
                <div className='flex flex-col gap-1 justify-center items-start'>
                    <p className='text-black justify-start'>Total Events</p>
                </div>
            </div>
        </div>
        <div className='w-[300px] h-[100px] border border-black rounded-lg flex justify-evenly'>
            <div className='w-full flex flex-col justify-center items-center'>
                <Icon icon="clarity:users-solid" color="black" width="90" height="90" />
            </div>
            <div className='w-full flex justify-center gap-6'>
                <div className='flex flex-col gap-1 justify-center items-start'>
                    <p className='text-black justify-start'>Normal</p>
                    <p className='text-black'>Premium</p>
                    <p className='text-black'>Blumark</p>
                </div>
                <div className='flex flex-col gap-1 justify-center items-start'>
                    <p className='text-black text-md'>{ totalOrganizer && totalOrganizer.normalCount }</p>
                    <p className='text-black text-md'>{ totalOrganizer && totalOrganizer.premiumCount }</p>
                    <p className='text-black text-md'>{ totalOrganizer && totalOrganizer.blueMarkCount }</p>
                </div>
            </div>
        </div>
        <div className='w-[300px] h-[100px] border border-black rounded-lg flex justify-evenly'>
            <div className='w-full flex flex-col justify-center items-center'>
                <Icon icon="fa6-solid:file-invoice-dollar" color="black" width="75" height="75" />
            </div>
            <div className='w-full flex justify-center gap-6'>
                <div className='flex flex-col gap-1 justify-center items-start'>
                    <p className='text-black justify-start'>Upgrade</p>
                    <p className='text-black'>Boost</p>
                </div>
                <div className='flex flex-col gap-1 justify-center items-start'>
                    <p className='text-black text-md'>1</p>
                    <p className='text-black text-md'>2</p>
                </div>
            </div>
        </div>
    </div>
  )
}
