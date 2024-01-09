import React, { useState } from 'react';
import ImageUpload from './ImageUpload'
import styles from './EditForm.module.css';
import { TagsInput } from "react-tag-input-component";

const EditForm = ({ post, handleUpdate }) => {
  const [updatedPost, setUpdatedPost] = useState(post);

  const handleChange = (event) => {
    setUpdatedPost({
      ...updatedPost,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(updatedPost);
  };

  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeyword, setMetaKeyword] = useState("");
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState([]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Category Name:
        <input type="text" name="category_name" value={updatedPost.category_name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Slug Link:
        <input type="text" name="slug" value={updatedPost.slug} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Created At:
        <input type="text" name="createdAt" value={updatedPost.createdAt} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Updated At:
        <input type="text" name="updatedAt" value={updatedPost.updatedAt} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>

      <ImageUpload onChange={handleImageChange} />

      <div className="bg-slate-200 rounded-xl p-5">
            <div className="flex">
              <label htmlFor="category" className={styles.requiredField}>
                <strong>Category:</strong>
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.selectField}
                required
              >
                <option value="" disabled>
                  ----------------------------SELECT--------------------------------
                </option>
                {categories.map((cat) => (
                  <optgroup label={cat.title} key={cat.title}>
                    {cat.children.map((subcat) => (
                      <option key={subcat} value={`${cat.id} - ${subcat.id}`}>
                        {subcat.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="flex">
              <label htmlFor="title" className={styles.requiredField}>
                <strong>Title:</strong>
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.inputField}
                required
                placeholder="Enter title here"
              />
            </div>
            <div className="flex">
              <label htmlFor="description" className={styles.requiredField}>
                <strong>Description:</strong>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textareaField}
                required
                placeholder="Add a brief description...."
              />
            </div>
          </div>

          <div className="flex">
          <div className="bg-slate-200 text-black px-2 py-1 mt-4 rounded-xl w-1/2 shadow-md">
            <h1>
              <strong>Tags</strong>
            </h1>{" "}
            <br />
            <br />
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="tags"
              placeHolder="Enter TAG..."
            />
            <div className="selected-tags">
              {selected.map((tag, index) => (
                <div
                  key={index}
                  className="tag bg-orange-400 text-yellow-300 px-2 py-1 rounded-md mr-2 mb-2 w-1/4"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="bg-slate-200 text-black px-2 py-1 mt-4 rounded-xl w-1/2 shadow-md">
            <label className={styles.requiredField}>
              <strong>SEO SETTINGS:</strong>
              <br></br>
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

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Post</button>
    </form>
  );
};

export default EditForm;