// pages/blog/[subcategory].js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogList from '../../../../components/BlogList';
import blogsData from '../../Data/blogsData.json'; // Adjust the path accordingly

const SubcategoryPage = () => {
  const router = useRouter();
  const { subcategory } = router.query;
  const [subcategoryData, setSubcategoryData] = useState(null);

  useEffect(() => {
    if (subcategory) {
      const selectedSubcategory = blogsData.find(
        (category) =>
          category.childCategories && category.childCategories.some((child) => child.category === subcategory)
      );      

      setSubcategoryData(selectedSubcategory);
    }
  }, [subcategory]);

  return (
    <div>
      {subcategoryData && <BlogList category={subcategoryData.category} />}
    </div>
  );
};

export default SubcategoryPage;