// components/CategoryForm.js
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import ImageUpload from './ImageUpload';
import styles from './BlogForm.module.css';

const categories = [
  { name: 'Sports', subcategories: ['Football', 'Basketball', 'Cricket'] },
  { name: 'Entertainment', subcategories: ['Movies', 'Music', 'Games'] },
  { name: 'News', subcategories: ['World News', 'Local News'] },
  { name: 'Travel', subcategories: ['India', 'Bhutan', 'Dubai'] },
  // Add more categories as needed
];

const allSubcategories = categories.flatMap(category => category.subcategories);

const CatForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [subName, setsubName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeyword, setMetaKeyword] = useState('');
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState([]);
 
  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
  };
  const handleSubmit = () => {
    // Check if the entered subcategory already exists in the predefined categories

    if (allSubcategories.includes(selectedSubcategory)) {
      // Show an alert if subcategory already exists
      alert('Subcategory already exists!');
      return;
    }
    
    // Show an alert for successful submission
    alert('Category submitted successfully!');
  
    // Implement your logic to save the category
    console.log('Category:', selectedCategory);
    console.log('Subcategory:', selectedSubcategory);
    console.log('subName:', subName);
    console.log('Description:', description);
    console.log('Tags:', tags);
    console.log('Meta Title:', metaTitle);
    console.log('Meta Description:', metaDescription);
    console.log('Meta Keyword:', metaKeyword);
    console.log('Image:', image);
  
    // Clear the uploaded image
    setImage(null);
  
    // Reset state after submitting
    setSelectedCategory('');
    setSelectedSubcategory('');
    setsubName('');
    setDescription('');
    setTags('');
    setMetaTitle('');
    setMetaDescription('');
    setMetaKeyword('');
  };

  

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <h3 className="mx-20 mt-6">Category Creation / </h3>
      <hr />
      <div className={`p-4 ${styles.blogFormContainer}`}>
        <div className='flex'>
          <div className='bg-slate-200 rounded-xl p-5 w-1/2'>
            <div className='flex'>
              <label htmlFor="category" className={styles.requiredField}>
                <strong>Parent Category:</strong>
              </label>&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.selectField}
                required
              >
                <option value="" disabled>----------------------------SELECT--------------------------------</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex'>
              <label htmlFor="SubName" className={styles.requiredField}>
                <strong>Subcategory Name:</strong>
              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                id="subName"
                value={subName}
                onChange={(e) => setsubName(e.target.value)}
                className={styles.inputField}
                required
                placeholder='Enter Name here'
              />
            </div>
            <div className='flex'>
              <label htmlFor="description" className={styles.requiredField}>
                <strong>Description:</strong>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textareaField}
                required
                placeholder='Add a brief description....'
              />
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='w-1/2'> 
            {/* Editor part removed for category creation */}
          </div> 
        </div>
        <br></br>
        <hr className={`mb-4`} />
        <div className='flex justify-center w-screen'>
          <div className='w-1/2'><ImageUpload onImageChange={handleImageChange} /></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='w-1/2 space-y-28'>
            <strong>Note:</strong>
            <ol className={styles.greenList}>
              <li>1. Thumbnail will be used for the front image of your category.</li>
              <li>2. Banner will be used as a cover page for your category.</li>
            </ol>
          </div>
        </div>
        <br></br>
        <hr className={`mb-4`} />
        <div className='flex'>
          <div className='bg-slate-200 text-black px-2 py-1 mt-4 rounded-xl w-1/2 shadow-md'>
            <h1><strong>Tags</strong></h1> <br /><br />
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="tags"
              placeHolder="Enter TAG..."
            />
            <div className="selected-tags">
              {selected.map((tag, index) => (
                <div key={index} className="tag bg-orange-400 text-yellow-300 px-2 py-1 rounded-md mr-2 mb-2 w-1/4">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="bg-slate-200 text-black px-2 py-1 mt-4 rounded-xl w-1/2 shadow-md" >
            <label className={styles.requiredField}>
              <strong>SEO SETTINGS:</strong><br></br>
            </label>
            <label htmlFor="metaTitle" className={styles.requiredField}>
              <h4>Meta Title:</h4>
            </label>
            <input
              type="text"
              id="metaTitle"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className={styles.inputField}
              required
            />
            <br />
            <label htmlFor="metaDescription" className={styles.requiredField}>
              <h4>Meta Description:</h4>
            </label>
            <textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className={styles.textareaField}
              required
            />
            <br />
            <label htmlFor="metaKeyword" className={styles.requiredField}>
              <h4>Meta Keyword:</h4>
            </label>
            <input
              type="text"
              id="metaKeyword"
              value={metaKeyword}
              onChange={(e) => setMetaKeyword(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        <div className={`mb-4`}>
          {/* Navigation Arrow to Scroll to Top */}
          <div className={styles.scrollArrow} onClick={handleScrollToTop}>
            &#x2191; {/* Unicode character for an upward arrow */}
          </div>
        </div>
        <br /><br />
        {/* Submit Button */}
        <button className={`bg-green-500 font-bold text-white px-4 py-2 mt-4 rounded-lg flex items-center mx-auto`} onClick={handleSubmit}>
          CREATE
        </button>
      </div>
    </>
  );
};

export default CatForm;