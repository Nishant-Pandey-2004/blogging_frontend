import React from 'react'
import TopChild from './TopChild';

const TopParent = () => {
    const student = [{
        id:1,
        category:"Travel",
        date:"23 Dec,2023",
        likes:23,
        imageUrl:"imaget1.png",
        head:"Taiwan's Iconic attraction,Elephant Trunk Rock,collapses",
        desc:"The Rui Fang District Office through its facebook page conveyed that the Elephant Trunk Rock encountered a partial break at 1:55",
    },
    {
        id:2,
        category:"Space",
        date:"23 Dec,2023",
        likes:23,
         imageUrl:"imaget2.png",
         head:"NASA Unveils Cosmic Christmas Tree In New Photo Ahead of the Festival",
         desc:"This Christmas gaze up at night sky and imagine a glittering tree formed by a nebula's magical green lights"
    },
    {
        id:3,
        category:"Boxing",
        date:"23 Dec,2023",
        likes:23,
        imageUrl:"imaget3.png",
        head:"Ryan Garcia is fighting again , this time on social media                 ",
        desc:"Boxing Star Ryan Garcia and his promoter , Hall of Fame fighter Oscar De Le Haya reignited their war of words via twitter",
    },
    
]
  return (
    <div>
        {
            student.map((item) => (
                <div key={item.id} className = "grid grid-cols-2">
                
                <div className='w-full'>
                    <img src={item.imageUrl} className="rounded-xl h-[150px] w-[250px] ml-8" />
                </div>
                <div className="pr-6">
                    <div className="flex">
                        <h3 className="">
                            {item.category} - 
                        </h3>
                        <h3 className = "pl-2">
                            {item.date} /
                        </h3>
                        <img src="Likes.svg" className = "pl-2" alt="" />
                        <h3 className = "pl-2">
                              {item.likes}
                        </h3>
                    </div>
                    <h2 className = "font-bold ">{item.head}</h2>
                    <p className = "text-sm">{item.desc}</p>
                </div><br /><br />
                </div>
                
                
            ))
        }
    </div>
  )
}

export default TopParent;
