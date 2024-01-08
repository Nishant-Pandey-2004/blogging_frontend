// components/subCategoryCard.js
import Link from 'next/link';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SubcategoryCard = ({ subcategory, onClick }) => {
  const cardStyle = {
    backgroundColor: getRandomColor(),
    borderRadius: '10px', // Set your desired border radius
  };

  return (
    <div onClick={() => onClick(subcategory)}>
      <Link href={`/blog/${subcategory.category}`} passHref>
        <div className="p-6 pl-40 pr-40 m-2 flex" style={cardStyle}>
          <div className="category-info">
            <h4 className="text-white text-xl font-bold">{subcategory.category}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SubcategoryCard;
