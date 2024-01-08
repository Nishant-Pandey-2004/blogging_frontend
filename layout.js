import React from 'react';


const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>

      
      <main className='flex-1'>
        {/* Render children content */}
        {children}
      </main>

    </div>
  );
}

export default Layout;
