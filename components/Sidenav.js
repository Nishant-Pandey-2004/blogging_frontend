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
            <div className="grid grid-cols-0 h-screen m-0 p-0">
                <div className="bg-[#61B358]">
                    {/* Sidebar content goes here */}
                    <Image className="m-20 mb-10" src={'/profile.png'} width={100} height={100} alt="profile" />
                    <Link className={`bg-${selectedItem === 'dashboard' ? 'white' : '#61B358'} text-${selectedItem === 'dashboard' ? 'orange-500' : 'black'} p-2 w-58 rounded-l-full mb-2 ml-6 flex`} href={'/dashboard'}>
                        <Image src={'/Dashboard.png'} width={20} height={10} />
                        <div className='pl-2'>Dashboard</div>
                    </Link>

                    {/* Listing Dropdown */}
                    <div className="m-4">
                        <div className={`bg-[#D8DEDA] text-black p-2 cursor-pointer ml-6`} onClick={toggleListingDropdown}>
                        <div className='flex'>
                                <Image src={'/Listing.png'} height={2} width={15} />
                                <div className='pl-2'>Listing</div>
                            </div>
                        </div>
                        {isListingDropdownOpen && (
                            <div className="bg-[#61B358] text-black p-2 ml-6">
                                {/* Dropdown items go here */}
                                <Link className='flex pb-2' href={'/users'}>
                                    <Image src={'/Users.png'} height={2} width={15} />
                                    <div className='pl-2'>Users</div>
                                </Link>
                                <Link className='flex pb-2' href={'/category'}>
                                    <Image src={'/Category.png'} height={2} width={15} />
                                    <div className='pl-2'>Category</div>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Create Dropdown */}
                    <div className="m-4">
                        <div className={`bg-[#D8DEDA] text-black p-2 cursor-pointer ml-6`} onClick={toggleCreateDropdown}>
                            <div className='flex' href={'/create'}>
                                <Image src={'/Create.png'} height={2} width={15} />
                                <div className='pl-2'>Create</div>
                            </div>
                        </div>
                        {isCreateDropdownOpen && (
                            <div className="bg-[#61B358] text-black p-2 ml-6">
                                {/* Dropdown items go here */}
                                <Link className='flex pb-2' href={'/newBlog'}>
                                    <Image src={'/NewBlog.png'} height={2} width={15} />
                                    <div className='pl-2'>New Blog</div>
                                </Link>
                                <Link className='flex pb-2' href={'/newCategory'}>
                                    <Image src={'/NewCategory.png'} height={2} width={15} />
                                    <div className='pl-2'>New Category</div>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link className={`bg-${selectedItem === 'viewBlogs' ? 'white' : '#61B358'} text-${selectedItem === 'viewBlogs' ? 'orange-500' : 'black'} p-2 w-58 rounded-l-full mb-2 mt-4 ml-6 flex`} href={'/viewBlogs'}>
                        <Image src={'/ViewBlogs.png'} width={20} height={10} />
                        <div className='pl-2'>View Blogs</div>
                    </Link>

                    <div className='bottom-0 fixed'>
                        <Link className='bg-[#32521f] text-white p-3 pl-4 w-64 mt-10 flex' href={'/logout'}>
                            <Image src={'/Logout.png'} width={24} height={10} alt='logout' />
                            <div className='pl-2'>Logout</div>
                        </Link>
                        <Link className='bg-[#E0E4F0] text-black p-4 w-64 font-medium flex' href={'admin'}>
                            <Image src={'/avatar.png'} width={24} height={10} alt='logout' />
                            <div className='pl-2'>Admin</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNav;
