// components/BlogForm.js
import React, { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("./QuillEditor"), { ssr: false });

import ImageUpload from "./ImageUpload";
import styles from "./BlogForm.module.css";


const BlogForm = () => {
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

  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getAll-categories")
      .then((response) => response.json())
      .then((data) => { 
        setCategories(data.response.data);
      })
      .catch((error) => {
        console.error("Error fetching Category:", error);
      });
  }, []);
  const handleSubmit = async () => {
    // Implement your logic to save the blog post
    console.log("Category:", selectedCategory);
    console.log("Subcategory:", selectedSubcategory);
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Content:", content);
    console.log("Tags:", tags);
    console.log("Meta Title:", metaTitle);
    console.log("Meta Description:", metaDescription);
    console.log("Meta Keyword:", metaKeyword);
    console.log("Image:", image);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/create-new-blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            content: content,
            created_by: "1",
            cover_image:
              "http://res.cloudinary.com/chat-app-08/image/upload/v1704604419/ieotoclvve2qw61vl4xo.png",
            front_image:
              "http://res.cloudinary.com/chat-app-08/image/upload/v1704604419/ieotoclvve2qw61vl4xo.png",
            tags: tags,
            meta_tag: metaTitle,
            meta_keyword: metaKeyword,
            meta_description: metaDescription,
            link_id: title,
          }),
        }
      );

      if (response.ok) {
        console.log("New Blog Added Successfully!");
      } else {
        console.log("Error Blog product. Please try again.");
      }
    } catch (error) {
      console.error("Error Blog product:", error);
      console.log("Error Blog product. Please try again.");
    } finally {
    }
    setSelectedCategory("");
    setSelectedSubcategory("");
    setTitle("");
    setDescription("");
    setContent("");
    setTags("");
    setMetaTitle("");
    setMetaDescription("");
    setMetaKeyword("");
    setImage(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <h3 className="mx-20 mt-6">Editor / </h3>
      <hr />
      <div className={`p-4 ${styles.blogFormContainer}`}>
        <div className="flex">
          <div className="bg-slate-200 rounded-xl p-5 w-1/2">
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="w-1/2">
            <QuillEditor value={content} onChange={handleEditorChange} />
          </div>
        </div>
        <br></br>
        <hr className={`mb-4`} />

        <div className="flex justify-center w-screen">
          <div className="w-1/2">
            <ImageUpload onImageChange={handleImageChange} />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="w-1/2 space-y-28">
            <strong>Note:</strong>
            <ol className={styles.greenList}>
              <li>
                1. Thumbnail will be used for the front image of your blog.
              </li>
              <li>2. Banner will be used as a cover page for your blog.</li>
            </ol>
          </div>
        </div>
        <br></br>

        <hr className={`mb-4`} />

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

        <div className={`mb-4`}>
          {/* Navigation Arrow to Scroll to Top */}
          <div className={styles.scrollArrow} onClick={handleScrollToTop}>
            &#x2191; {/* Unicode character for an upward arrow */}
          </div>
        </div>
        <br />
        <br />
        {/* Submit Button */}
        <button
          className={`bg-green-500 font-bold text-white px-4 py-2 mt-4 rounded-lg flex items-center mx-auto`}
          onClick={handleSubmit}
        >
          CREATE
        </button>
      </div>
    </>
  );
};

export default BlogForm;
