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
                                op.type === 'dateRangePicker' && <CusDateRangePicker eventDate={op.value}/>
                            }
                            {
                                op.type !== 'dateRangePicker' && 
                                <>
                                    { op.type !== 'text' && <label className='pe-2 font-semibold'>{op.label}</label>}
                                    <input onChange={(e) => op.action(e.target.value)} type={op.type} value={op.value && op.value} checked={op.type === 'checkbox' && op.value}
                                        className={`text-black font-semibold truncate ${op.type === 'checkbox' ? '' : ' block border border-gray-500 w-full px-2 py-1 rounded-md'}`} placeholder={op.label} />
                                </>
                            }
                        </div>
                    ))
                }
                {/* <input onChange={(e) => setName(e.target.value)} className='w-full h-full border border-white text-black p-2 bg-transparent rounded-md' type="text" /> */}
                <div className='absolute right-0 top-0'>
                    {/* <button className='bg-[#ffffff60] hover:bg-[#ffffff96] p-2 m-1 rounded-md relative'>
                        <InlineIcon onClick={toggle} icon="ion:filter" color="white" width={"1.5rem"} />
                        {
                            isOpen &&
                            <div className='w-[20vw] max-h-[200px] overflow-y-auto absolute right-0 top-[37px] bg-white rounded z-20 shadow-md'>
                                {
                                    options.inputs.map((op, index) => (
                                        <div key={index} className='text-black text-start p-1 px-2 border-b '>
                                            {
                                                op.type === 'dateRangePicker' && <CusDateRangePicker eventDate={op.value}/>
                                            }
                                            {
                                                op.type !== 'dateRangePicker' && 
                                                <>
                                                    <label className='pe-2 font-semibold'>{op.label}</label>
                                                    <input onChange={(e) => op.action(e.target.value)} type={op.type} value = { op.value && op.value } checked={op.type === 'checkbox' && op.value }
                                                    className={`font-semibold truncate ${op.type === 'checkbox' ? '' : ' block border border-gray-500 w-full px-2 rounded-md'}`} />
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </button>
                    <button className='bg-[#ffffff60] hover:bg-[#ffffff96] p-2 m-1 rounded-md'>
                        <InlineIcon icon="eva:search-fill" color="white" width={"1.5rem"} />
                    </button> */}
                </div>
            </div>
            {/* <div className='w-full flex justify-center items-center text-white px-20 overflow-hidden overflow-x-auto h-[45px]'>
                {options.data.map((op, index) => op.value && (
                    <span key={index} className='px-2 py-1 text-[1rem] text-white font-semibold bg-[#ffffff53] mt-3 mx-1 rounded flex gap-1'>{op.value}
                        <InlineIcon onClick={() => op.remove()} icon='ion:close' color="white" width={"1.5rem"} className='cursor-pointer'/>
                    </span>
                ))}
            </div> */}
            {/* {
               isOpen && <div onClick={toggle} className='fixed top-0 w-screen h-screen z-10'></div>
            } */}
        </section>
    );
}