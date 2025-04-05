import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import StatesComponent from '../../../../common/StatesComponent';
import LgaComponents from '../../../../common/LgaComponents';
import TownComponent from '../../../../common/TownComponent';

const InformationForm = ({ view }) => {

    const [saving, setSaving] = useState(false);
    const [residential_state_id, setResidential_state_id] = useState();
    const [state_of_origin_id, setState_of_origin_id] = useState();
    const [residential_lga_id, setResidential_lga_id] = useState();
    const [town_unit_id, setTown_unit_id] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-extralight capitalize py-2 border-b border-gray-300 dark:border-gray-700 mb-4'>
            {view.replace("_", " ")}
            </h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <h2 className='w-full text-[#ffaa00] uppercase'>core identity</h2>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='NIN'
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Title'
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Surname'
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='First name'
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Middle name'
                    />
                    <input 
                        type='date'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Date of birth'
                    />
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Gender</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="male">male</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="female">female</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="other">other</option>
                    </select>
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Marital status</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="single">single</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="married">married</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="divorced">divorced</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="widowed">widowed</option>
                    </select>
                </div>

                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <h2 className='w-full text-[#ffaa00] uppercase'>contact & location</h2>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Phone number'
                    />
                    <StatesComponent setState={setResidential_state_id} placeholder='Select Residential state' />
                    <LgaComponents state_id={residential_state_id} setLga={setResidential_lga_id} placeholder='Select Residential LGA' />
                    <TownComponent lga_id={residential_lga_id} setTown={setTown_unit_id} placeholder='Select Town unit' />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Residential address'
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Residential city'
                    />
                    <StatesComponent setState={setState_of_origin_id} placeholder='Select State of origin' />
                </div>

                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <h2 className='w-full text-[#ffaa00] uppercase'>other information</h2>
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Any health challenge?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="no">no</option>
                    </select>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='If yes, detail of health challenge'
                    />
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Any disability?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="no">no</option>
                    </select>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='If yes, detail of disability'
                    />
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                    >
                        <option  className='dark:bg-gray-800 dark:text-white'value="">Been incarcerated?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option  className='dark:bg-gray-800 dark:text-white'value="no">no</option>
                    </select>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='If yes, detail of incarceration'
                    />
                </div>
                <div className='pt-4'>
                    <button
                        className={`flex justify-center px-4 py-2 rounded-md bg-[#ffaa00] hover:bg-[#7a5b1e] text-black`}
                    >
                        {
                            saving ? 
                                <AiOutlineLoading3Quarters size={24} className='animate-spin' /> : 'Save and next'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InformationForm