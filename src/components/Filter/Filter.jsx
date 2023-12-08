import React, { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import CusDateRangePicker from '../forms/CusDateRangePicker';
export default function Filter({ setName,options }) {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const select = (value) => {
        setSelected(value);
    }

    return (
        <section className='w-full mx-auto flex flex-col items-center'>
            <div className='w-full lg:flex justify-evenly items-center relative mt-5'>
                {
                    options.inputs.map((op, index) => (
                        <div key={index} className='text-white text-start p-1 px-2'>
                            {
                                op.type === 'dateRangePicker' && <CusDateRangePicker eventDate={op.value} action={(value) => op.action(value)} disabled={op.disabled} />
                            }
                            {
                                op.type !== 'dateRangePicker' && 
                                <>
                                    { op.type !== 'text' && <label className='text-md lg:text-[0.9rem] pe-2 font-semibold'>{op.label}</label>}
                                    <input onChange={(e) => op.action(e.target.value)} type={op.type} value={op.value && op.value} checked={op.type === 'checkbox' && op.value}
                                        className={`text-black text-md lg:text-[0.9rem] font-semibold truncate ${op.type === 'checkbox' ? '' : ' block border border-gray-500 w-full px-2 py-1 rounded-md'}`} placeholder={op.label} />
                                </>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
}