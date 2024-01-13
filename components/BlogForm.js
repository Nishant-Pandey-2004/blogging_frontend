// components/BlogForm.js
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('./QuillEditor'), { ssr: false });

import ImageUpload from './ImageUpload';
import styles from './BlogForm.module.css';

const categories = [
  { name: 'Sports', subcategories: ['Football', 'Basketball', 'Cricket'] },
  { name: 'Entertainment', subcategories: ['Movies', 'Music', 'Games'] },
  { name: 'News', subcategories: ['World News', 'Local News'] },
  { name: 'Travel', subcategories: ['India', 'Bhutan', 'Dubai'] },
  // Add more categories as needed
];

const BlogForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeyword, setMetaKeyword] = useState('');
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState([]);

  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    // Implement your logic to save the blog post
    console.log('Category:', selectedCategory);
    console.log('Subcategory:', selectedSubcategory);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Content:', content);
    console.log('Tags:', tags);
    console.log('Meta Title:', metaTitle);
    console.log('Meta Description:', metaDescription);
    console.log('Meta Keyword:', metaKeyword);
    console.log('Image:', image);

    // Reset state after submitting
    setSelectedCategory('');
    setSelectedSubcategory('');
    setTitle('');
    setDescription('');
    setContent('');
    setTags('');
    setMetaTitle('');
    setMetaDescription('');
    setMetaKeyword('');
    setImage(null);
  };



  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <strong>Category:</strong>
                  </label>
                </td>
                <td>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={`${styles.selectField} text-lg`}
                    required
                  >
                    <option value="" disabled>----------------------------SELECT--------------------------------</option>
                    {categories.map((cat) => (
                      <optgroup label={cat.name} key={cat.name}>
                        {cat.subcategories.map((subcat) => (
                          <option key={subcat} value={`${cat.name} - ${subcat}`}>
                            {subcat}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </td>

                <td>
                  <label htmlFor="title" className={`${styles.requiredField} text-lg`}>
                    <strong>Title:</strong>
                  </label>
                </td>
                <td className='p-4'>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`${styles.inputField} text-lg`}
                    required
                    placeholder='Enter title here'
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
            <div className='flex'>
              {/* Tags  */}
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

              <div className='w-1/2'>
                <div className="mt-4 p-4">
                  <label className={`${styles.requiredField} text-lg`}>
                    <strong>SEO SETTINGS:</strong>
                  </label>

                  <table className="mt-2 w-full">
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="metaTitle" className={`${styles.requiredField} mb-2`}>
                            <h4>Meta Title:</h4>
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            id="metaTitle"
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                            className={`w-full ${styles.inputField} text-lg`}
                            required
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label htmlFor="metaDescription" className={`${styles.requiredField} mb-2`}>
                            <h4>Meta Description:</h4>
                          </label>
                        </td>
                        <td>
                          <textarea
                            id="metaDescription"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                            className={`w-full ${styles.textareaField} text-lg`}
                            required
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label htmlFor="metaKeyword" className={`${styles.requiredField} mb-2`}>
                            <h4>Meta Keyword:</h4>
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            id="metaKeyword"
                            value={metaKeyword}
                            onChange={(e) => setMetaKeyword(e.target.value)}
                            className={`w-full ${styles.inputField} text-lg`}
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h1 className='text-xl font-bold pl-4'>Upload Images:</h1>
            <div className='flex p-4'>
              <div className='flex items-center w-1/2 ml-12'>
                <b><h4 className='mr-2 text-lg'>Thumbnail Image:</h4></b>
                <div className='w-1/2 h-12 align-middle p-2 bg-white shadow'>
                  <ImageUpload onImageChange={handleImageChange} />
                </div>
              </div>

              <div className='flex items-center w-1/2 ml-12'>
                <b><h4 className='mr-2 text-lg'>Banner Image:</h4></b>
                <div className='w-1/2 h-12 align-middle p-2 bg-white shadow'>
                  <ImageUpload onImageChange={handleImageChange} />
                </div>
              </div>
            </div>
          </div>
        </div>





        <h2 className="text-2xl font-bold text-center p-8 pb-0">Write your Blogs here</h2>
        <div className="ml-40 mr-40 mt-10">
          <QuillEditor value={content} onChange={handleEditorChange} />
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

export default BlogForm;
