import React from 'react'
import Carousel  from './Carousel';
import Navbar from './Navbar';
import Footer from './Footer';
import TopParent from './TopParent';
import Author from './Author';
import Category from './Category';
// import ''

const Home = () => {
  return (
    <>
          <Navbar/>
<Carousel/>
<div className="flex">
<div className="w-6/12 pr-2 pt-10 bg-blue-100 rounded-xl ml-10">
<h1 className = "pl-10 text-2xl font-bold" >Top Rated/Liked Blogs</h1><br />
<TopParent/>

</div>
<div className="bg-blue">
<h1 className="pl-10 text-2xl font-bold">Top Category</h1><br />
<Category/>
</div>
</div><br /><br />
<div className="bg-black h-72 mb-28">
<Author/>
</div>
<br /><br /><br /><br />

<div className="mt-24">
 <Footer/>
 </div>        
    </>
  )
}

export default Home;

