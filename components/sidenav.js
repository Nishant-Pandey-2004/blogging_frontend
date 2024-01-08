import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiHome6Fill } from 'react-icons/ri';
import { BsCardList } from 'react-icons/bs';
import { CiFileOn } from 'react-icons/ci';
import { TbCheckupList } from 'react-icons/tb';
import { IoTimeOutline } from 'react-icons/io5';
import { HiOutlineLogout } from 'react-icons/hi';


export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Dashboard',
      icon: <RiHome6Fill />,
      subItems: [
        { href: '/admin/users', title: 'Users', icon: <TbCheckupList /> },
        { href: '/admin/category', title: 'Category', icon: <IoTimeOutline /> },
      ],
    },
    {
      href: '/',
      title: 'View Blogs',
      icon: <BsCardList />,
    },
    {
      href: '/admin/create_blog',
      title: 'Create a Blog',
      icon: <CiFileOn />,
    },
    {
      href: '/admin/admin_category',
      title: 'Create a category',
      icon: <CiFileOn />,
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-slate-50 sticky top-0 h-14 flex items-center justify-between px-4 z-10'>
        {/* Logo Image */}
        <div className="flex items-center justify-center flex-grow">
          <img
            className="w-[400px] h-[60.81px] overflow-hidden object-cover"
            alt=""
            src="/PKT_header.png"
          />
        </div>
      </header>

      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-green-600 w-full md:w-40 flex flex-col items-center justify-center'>
          {/* Profile Image */}
          <img src="/profile_image.png" className="h-20 w-20 rounded-full mb-4" alt="Profile" />

          <nav>
            <ul>
              {menuItems.map(({ href, title, icon, subItems, className }) => (
                <li className={`m-2 flex flex-col ${className}`} key={title}>
                  {subItems ? (
                    // If subItems exist, render dropdown
                    <>
                      <span className='p-2 cursor-pointer w-full flex items-center'>
                        {icon}
                        <span className='ml-2'>{title}</span>
                      </span>
                      <ul className='pl-4'>
                        {subItems.map(({ href, title, icon }) => (
                          <li key={title} className={`m-2 ${className}`}>
                            <Link href={href}>
                              <a
                                className={`flex p-2 rounded hover:bg-slate-300 cursor-pointer w-full ${
                                  router.asPath === href && 'bg-slate-100 text-orange-500'
                                }`}
                              >
                                {icon}
                                <span className='ml-2'>{title}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    // If no subItems, render a regular link
                    <Link href={href}>
                      <a
                        className={`flex p-2 rounded hover:bg-slate-300 cursor-pointer w-full ${
                          router.asPath === href && 'bg-slate-100 text-orange-500'
                        }`}
                      >
                        {icon}
                        <span className='ml-2'>{title}</span>
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/logout">
            <a className="flex p-2 bg-red-500 rounded hover:bg-red-700 cursor-pointer text-white mt-auto items-center">
              <HiOutlineLogout className="mr-2" />Logout
            </a>
          </Link>
          <div className='flex items-center mt-2 bg-white w-full h-16 justify-center'>
            <h4 className='bg-yellow-400 text-white rounded w-6 flex justify-center mr-2'>A</h4>
            <h4 className=''>Admin</h4>
          </div>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
