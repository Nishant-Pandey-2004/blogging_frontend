import React from 'react';

const Category = () => {
  const data = [
    { id: 1, category: 'Science And Technology',no:112, isLarger: true},
    { id: 2, category: 'Travel',no:91,isLarger:false},
    { id: 3, category: 'Sports',no:64,isLarger:false} ,
    { id: 4, category: 'Health', no:59,isLarger:false} ,
    { id: 5, category: 'Wildlife',no:41, isLarger:false} ,
    // Add more items as needed
  ];

  return (
    <div className="grid ml-10 grid-cols-2 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className={`p-4 border text-center border-black ${item.id === 1 ? 'col-span-2' : ''} ${item.isLarger ? 'w-full h-36 rounded-xl p-10 bg-pink-200' : 'w-64 h-36  rounded-xl bg-blue-200'}`}
        >
            <h1 className = " pt-8 font-bold text-2xl" > {item.id}.{item.category}</h1>
            <p className = "text-xl">{item.no}</p>          
        </div>
      ))}
    </div>
  )
}

export default Category;
