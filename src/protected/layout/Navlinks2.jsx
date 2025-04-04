import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TbLayoutDashboardFilled, TbLogs, TbReportAnalytics } from 'react-icons/tb';
import { MdOutlineAppRegistration, MdOutlineHomeRepairService, MdOutlineRateReview } from 'react-icons/md';
import { FaUserShield } from 'react-icons/fa';
import { HiUser, HiUsers } from 'react-icons/hi';
import { RiOrganizationChart } from 'react-icons/ri';

const Navlinks2 = () => {

    const locatn = useLocation();

    const navlinks = [
        {
            id: 1,
            title: "Dashboard",
            url: "/dashboard",
            icon: <TbLayoutDashboardFilled size={17} />
        },
        {
            id: 2,
            title: "Personnel",
            url: "/personnel",
            icon: <FaUserShield size={17} />
        },
        {
            id: 3,
            title: "Users",
            url: "/users",
            icon: <HiUsers size={17} />
        },
        {
            id: 4,
            title: "Organisational units",
            url: "/organisational-units",
            icon: <RiOrganizationChart size={17} />
        },
        {
            id: 5,
            title: "Reports",
            url: "/reports",
            icon: <TbReportAnalytics size={17} />
        },
        {
            id: 6,
            title: "Audit logs",
            url: "/audit-logs",
            icon: <TbLogs size={17} />
        },
    ]

    return (
        <ul className='w-full mt-2 space-y-1'>
            {
                (navlinks !== null) && navlinks.map(nav => {
                    return (
                        <li key={nav.id} className={`px-3 py-1.5 md:py-2.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${nav.url === locatn.pathname && 'bg-gray-200 dark:bg-gray-700'}`}>
                            <Link to={nav.url} key={nav.id} className='flex justify-start items-center space-x-3 my-1 hover:text-[#ffaa00]'>
                                {nav.icon}
                                <span>{nav.title}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navlinks2
