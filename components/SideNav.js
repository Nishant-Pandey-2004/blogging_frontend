import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SideNav = () => {
    const [isListingDropdownOpen, setIsListingDropdownOpen] = useState(false);
    const [isCreateDropdownOpen, setIsCreateDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('dashboard'); // Default selected item

    const toggleListingDropdown = () => {
        setIsListingDropdownOpen(!isListingDropdownOpen);
        // Close the create dropdown when opening the listing dropdown
        // setIsCreateDropdownOpen(false);
    };

    const toggleCreateDropdown = () => {
        setIsCreateDropdownOpen(!isCreateDropdownOpen);
        // Close the listing dropdown when opening the create dropdown
        // setIsListingDropdownOpen(false);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <div className="w-full">
                <div className="bg-[#61B358]">
                    {/* Sidebar content goes here */}
                    <div className="m-20 mb-10 ml-[92px] mr-20">
                    <Image  src={'/profile.png'} width={120} height={120} alt="profile" />
                    </div>
                    <div className={`bg-white rounded-l-full mb-2 p-4 h-14 flex w-full`} onClick={() => handleItemClick('dashboard')}>
                    <Image src={'/Dashboard.png'} height={10} width={24} />
                    <div className='pl-3 pb-2 font-bold text-lg text-orange-500'>Dashboard</div>
                    </div>

                    {/* Listing Dropdown */}
                    <div className="m-4">
                        <div className={`bg-white text-black p-3 cursor-pointer rounded-md h-12 ml-1`}>
                        <div className='flex'>
                                <Image src={'/Listing.png'} height={2} width={40} />
                                <div className='pl-2 font-medium' >Listing</div>
                                <div className="ml-[190px]">
                                <Image src={'/Drop.png'} height={16} width={36} onClick={toggleListingDropdown}  />
                                </div>
                        </div>
                        </div>
                        {isListingDropdownOpen && (
                            <div className="bg-[rgb(97,179,88)] text-black p-4 ml-6">
                                
                                {/* Dropdown items go here */}
                                <div className='flex pb-5'>
                                    <Image src={'/Users.png'} height={15} width={20} />
                                    <div className='pl-4'>User</div>
                                </div>
                                
                                <Link href = "/">
                                <div className='flex pb-5'>
                                    <Image src={'/Category.png'} height={16} width={24} />
                                    <div className='pl-3'>Category</div>
                                </div>
                                </Link>
                            </div>
                        )}
                    </div>



                    {/* Create Dropdown */}
                    <div className="m-4">
                        <div className={`bg-white text-black p-3 cursor-pointer rounded-md h-12 ml-1`}>
                        <div className='flex'>
                                <Image src={'/create.png'} height={16} width={40} />
                                <div className='pl-2 font-medium'>Create</div>
                                <div className="ml-[190px]">
                                <Image src={'/Drop.png'} height={16} width={32} onClick={toggleCreateDropdown}  />
                                </div>
                        </div>
                        </div>
                        {isCreateDropdownOpen && (
                            <div className="bg-[#61B358] text-black p-4 ml-6">
                                {/* Dropdown items go here */}
                                <Link href = "/Components/Login">
                                <div className='flex pb-5'>
                                
                                <Image src={'/NewBlog.png'} height={16} width={22} />
                                <div className='pl-4'>New Blog</div>
                                
                                </div>
                                </Link>
                               
                                <Link href = "/">
                                <div className='flex pb-5'>
                                <Image src={'/NewCategory.png'} height={16} width={22} />
                                    <div className='pl-4'>New Category</div>
                                </div>
                                </Link>
                            </div>
                        )}
                    </div>


                    <div className={`bg-${selectedItem === 'viewBlogs' ? 'white' : '#61B358'} text-${selectedItem === 'viewBlogs' ? 'orange-500' : 'black'} mb-96 p-2 w-58 rounded-l-full  mt-4 ml-6 flex`} onClick={() => handleItemClick('viewBlogs')}>
                        <Image src={'/ViewBlogs.png'} width={22} height={10} />
                        <div className='pl-2 font-medium'>View Blogs</div>
                    </div>

                    <div className=" bottom-0 fixed w-[337px]">
                        <div className='bg-[#0A7900] text-white p-3 pl-4 w-full mt-10 flex'>
                        <Image src={'/Logout.png'} height={16} width={22} />
                            <div className='pl-3'>Logout</div>
                        </div>
                        <div className='bg-[#E0E4F0] text-black p-4 width-[100] font-medium flex'>
                        <Image src={'/avatar.png'} height={16} width={22} />
                            <div className='pl-3'>Admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNav;
