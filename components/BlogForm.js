// components/BlogForm.js
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('./QuillEditor'), { ssr: false });

import ImageUpload from './ImageUpload';
import styles from './BlogForm.module.css';

const categories = [
  {
    id: 1,
    name: 'Technology',
    subcategories: [
      {
        name: 'Programming',
        subcategories: [
          {
            name: 'JavaScript',
          },
          {
            name: 'Python',
          },
          {
            name: 'Java',
          },
        ],
      },
      {
        name: 'Gadgets',
      },
    ],
  },
  {
    id: 2,
    name: 'Science',
    subcategories: [
      {
        name: 'Physics',
      },
      {
        name: 'Biology',
      },
      {
        name: 'Chemistry',
      },
    ],
  },
  {
    id: 3,
    name: 'Travel',
    subcategories: [
      {
        name: 'Adventure',
      },
      {
        name: 'Cultural',
        subcategories: [
          {
            name: 'Historical',
          },
          {
            name: 'Festivals',
          },
        ],
      },
    ],
  },
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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const renderCategoryOptions = (categories, depth = 0) => {
    return categories.map((category) => (
      <React.Fragment key={category.id || category.name}>
        <option
          value={category.id ? category.id : category.name}
          style={{
            backgroundColor: depth === 0 ? '#f0f0f0' : 'white',
            fontWeight: 'bold',
            marginLeft: `${depth * 20}px`,
          }}
          disabled={depth === 0} // Disable main category
        >
          {depth > 0 ? Array(depth).fill('----').join('') : ''} {category.name}
        </option>
        {category.subcategories && category.subcategories.length > 0 && renderCategoryOptions(category.subcategories, depth + 1)}
      </React.Fragment>
    ));
  };

  return (
    <>
      <h3 className="mx-20 mt-6 text-sm">Editor  / </h3>
      <hr />
      <div className={`p-4 ${styles.blogFormContainer}`}>
        <div className='flex'>
          <div className='bg-slate-200 rounded-xl p-5 w-full'>
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
              <div className='w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4'>
                <label htmlFor="category" className={`${styles.requiredField} text-sm`}>
                  <strong>Category:</strong>
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={`${styles.selectField} text-lg w-full`}
                  required
                >
                  <option value="" disabled>
                    ----------------------Select-----------------------
                  </option>
                  {renderCategoryOptions(categories)}
                </select>
              </div>

              <div className='w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4'>
                <label htmlFor="title" className={`${styles.requiredField} text-sm`}>
                  <strong>Title:</strong>
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`${styles.inputField} text-sm w-full`}
                  required
                  placeholder='Enter title here'
                />
              </div>
            </div>

            <div className='w-full p-4'>
              <label htmlFor="description" className={`${styles.requiredField} text-sm`}>
                <strong>Description:</strong>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${styles.textareaField} text-sm w-full`}
                required
                placeholder='Add a brief description....'
              />
            </div>

            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
              {/* Tags  */}
              <div className='text-black p-4 mt-4 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                <h1 className='mb-2 text-sm'><strong>Tags</strong></h1>
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="tags"
                  placeHolder="Enter TAG..."
                />
                <div className="selected-tags flex flex-wrap">
                  {selected.map((tag, index) => (
                    <div key={index} className="tag bg-orange-400 text-white text-sm p-0.5 pr-2 pl-2 m-2 mt-0 rounded-full mr-2 mb-2 w-fit">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className='w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                <div className="mt-4 p-4">
                  <label className={`${styles.requiredField} text-sm`}>
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
                            className={`w-full ${styles.inputField} text-sm`}
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
                            className={`w-full ${styles.metatextareaField} text-sm`}
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
                            className={`w-full ${styles.inputField} text-sm`}
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h1 className='text-sm font-bold pl-4'>Upload Images:</h1>
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row p-4'>
              <div className='flex items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ml-12 mb-4 md:mb-0 lg:mb-0 xl:mb-0'>
                <b><h4 className='mr-2 text-sm'>Thumbnail Image:</h4></b>
                <div className='w-64 h-12 align-middle p-2 bg-white shadow'>
                  <ImageUpload onImageChange={handleImageChange} />
                </div>
              </div>

              <div className='flex items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ml-12'>
                <b><h4 className='mr-2 text-sm'>Banner Image:</h4></b>
                <div className='w-64 h-12 align-middle p-2 bg-white shadow'>
                  <ImageUpload onImageChange={handleImageChange} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center p-8 pb-0">Write your Blogs here</h2>
        <div className="w-full sm:w-full md:w-auto lg:w-auto xl:w-auto ml-0 sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 mr-0 sm:mr-0 md:mr-40 lg:mr-40 xl:mr-40 mt-10">
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
