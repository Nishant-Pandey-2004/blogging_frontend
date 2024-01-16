// components/BlogForm.js
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component";



import ImageUpload from './ImageUpload';
import styles from './CategoryForm.module.css';

const categories = [
  { name: 'Sports', subcategories: ['Football', 'Basketball', 'Cricket'] },
  { name: 'Entertainment', subcategories: ['Movies', 'Music', 'Games'] },
  { name: 'News', subcategories: ['World News', 'Local News'] },
  { name: 'Travel', subcategories: ['India', 'Bhutan', 'Dubai'] },
  // Add more categories as needed
];

const CatForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState('');

  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState([]);

  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleSubmit = () => {
    // Implement your logic to save the blog post
    console.log('Category:', selectedCategory);
    console.log('Subcategory:', selectedSubcategory);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Tags:', tags);
    console.log('Image:', image);

    // Reset state after submitting
    setSelectedCategory('');
    setSelectedSubcategory('');
    setTitle('');
    setDescription('');
    setContent('');
    setTags('');
    setImage(null);
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    const [selectedParentCategory, selectedSubCategory] = selectedValue.split(' - ');

    setSelectedCategory(selectedParentCategory);
    setSelectedSubcategory(selectedSubCategory);
  };


  return (
    <>
      <h3 className="mx-20 mt-6">Editor  / </h3>
      <hr />
      <div className={`p-4 ${styles.blogFormContainer}`}>
        <div className='flex'>
          <div className='bg-slate-200 rounded-xl p-5 w-full'>
            <table className='w-full'>
              {/* Category and Title */}
              <tr>
                <td className='p-4'>
                  <label htmlFor="category" className={`${styles.requiredField} text-lg`}>
                    <strong>Parent Category:</strong>
                  </label>
                </td>
                <td>
                  <select
                    id="category"
                    value={`${selectedCategory} - ${selectedSubcategory}`}
                    onChange={handleCategoryChange}
                    className={`${styles.selectField} text-lg`}
                    required
                  >
                    <option value="" disabled>------------------------Select the previous parent category--------------------------------</option>
                    {categories.map((cat) => (
                      <optgroup label={cat.name} key={cat.name}>
                        {cat.subcategories.map((subcat) => (
                          <option key={subcat} value={`${cat.name} - ${subcat}`}>
                            {subcat}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option>Null</option>
                  </select>
                  <label className='text-red-400 italic'>(To add a new category which doesn't have any parent choose null)</label>
                </td>
              </tr>
              <tr>
                <td className='p-4'>
                  <label htmlFor="title" className={`${styles.requiredField} text-lg`}>
                    <strong>Sub-Category</strong>
                  </label>
                </td>
                <td >
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`${styles.inputField} text-lg`}
                    required
                    placeholder='Enter the new Sub-category'
                  />
                </td>
              </tr>

              {/* Description */}
              <tr>
                <td className='p-4'>
                  <label htmlFor="description" className={`${styles.requiredField} text-lg`}>
                    <strong>Description:</strong>
                  </label>
                </td>

                <td colSpan={4}>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${styles.textareaField} text-lg`}
                    required
                    placeholder='Add a brief description....'
                  />
                </td>
              </tr>
            </table>
            <div className={`p-4`}>
              <h1 className='text-xl font-bold pl-4'>Upload Images:</h1>
              <div className='p-4'>
                <div className='items-center ml-12  mr-40'>
                  <b><h4 className='mr-2 text-lg'>Thumbnail Image:</h4></b>
                  <div className='w-1/2 h-12 align-middle p-2 bg-white shadow'>
                    <ImageUpload onImageChange={handleImageChange} />
                  </div>
                </div>

                <div className='items-center ml-12 mr-40'>
                  <b><h4 className='mr-2 text-lg'>Banner Image:</h4></b>
                  <div className='w-1/2 h-12 align-middle p-2 bg-white shadow'>
                    <ImageUpload onImageChange={handleImageChange} />
                  </div>
                </div>
              </div>
            </div>

            <div className='text-black p-4 mt-4 w-1/2'>
              <h1 className='mb-2 text-xl'><strong>Tags</strong></h1>
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="tags"
                placeHolder="Enter TAG..."
              />
              <div className="selected-tags flex">
                {selected.map((tag, index) => (
                  <div key={index} className="tag bg-orange-400 text-white text-lg p-0.5 pr-2 pl-2 m-2 mt-0 rounded-full mr-2 mb-2 w-fit">
                    {tag}
                  </div>
                ))}
              </div>
            </div>



            </div></div>


            {/* Submit Button */}
            <button className={`bg-green-500 font-bold text-white px-4 py-2 mt-4 rounded-lg flex items-center m-12`} onClick={handleSubmit}>
              CREATE CATEGORY
            </button>

          </div>
          
        </>
        );
};

        export default CatForm;
