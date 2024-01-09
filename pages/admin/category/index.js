import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Autosuggest from 'react-autosuggest';
import Select from 'react-select';
import Sidenav from '../../../components/sidenav';
import Pagination from "react-js-pagination";
import EditForm from '../../../components/EditForm';

const catPosts = [
  { id: 1, parent_id: 1002, category_name: "Entertainment", createdAt: "2024-01-03", updatedAt: "2024-01-04", slug: "entertainment-1" },
  { id: 2, parent_id: 1003, category_name: "Travel", createdAt: "2024-01-05", updatedAt: "2024-01-06", slug: "travel-2" },
  { id: 3, parent_id: 1004, category_name: "Sports", createdAt: "2024-01-07", updatedAt: "2024-01-08", slug: "sports-3" },
  { id: 4, parent_id: 1005, category_name: "Wildlife", createdAt: "2024-01-09", updatedAt: "2024-01-10", slug: "wildlife-4" },
  { id: 5, parent_id: 1006, category_name: "Entertainment", createdAt: "2024-01-11", updatedAt: "2024-01-12", slug: "entertainment-5" },
  { id: 6, parent_id: 1007, category_name: "Travel", createdAt: "2024-01-13", updatedAt: "2024-01-14", slug: "travel-6" },
  { id: 7, parent_id: 1008, category_name: "Sports", createdAt: "2024-01-15", updatedAt: "2024-01-16", slug: "sports-7" },
  { id: 8, parent_id: 1009, category_name: "Wildlife", createdAt: "2024-01-17", updatedAt: "2024-01-18", slug: "wildlife-8" },
  { id: 9, parent_id: 1010, category_name: "Entertainment", createdAt: "2024-01-19", updatedAt: "2024-01-20", slug: "entertainment-9" },
  { id: 10, parent_id: 1011, category_name: "Travel", createdAt: "2024-01-21", updatedAt: "2024-01-22", slug: "travel-10" }
  // ... other cat posts
];

const categoryOptions = [
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Wildlife', label: 'Wildlife' },
  // Add more categories as needed
];

export default function Layout() {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(catPosts);

  const handleSearchChange = (_, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();

    setSuggestions(
      inputValue === ''
        ? []
        : catPosts.filter((post) =>
          post.slug.toLowerCase().includes(inputValue) ||
          post.category_name.toLowerCase().includes(inputValue)
        )
    );
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.slug;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.slug} - {suggestion.category_name}
    </div>
  );

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSearchInTable = () => {
    const filterFunction = (post) => (
      (selectedCategory ? post.category_name === selectedCategory.value : true) &&
      (selectedSuggestion ? post.slug === selectedSuggestion.slug : true)
    );

    const newFilteredBlogPosts = catPosts.filter(filterFunction);

    setFilteredBlogPosts(newFilteredBlogPosts);
    setSuggestions([]);
    setValue('');
    setSelectedSuggestion(null);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleEditClick = (post) => {
    setIsEditing(true);
    setEditingPost(post);
  };

  const handleUpdate = (updatedPost) => {
    setFilteredBlogPosts(
      filteredBlogPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
    setIsEditing(false);
  };

  return (
    <>
      <Sidenav>
        <div className='min-h-screen p-4'>
          {isEditing ? (
            <EditForm post={editingPost} handleUpdate={handleUpdate} />
          ) : (
            <table className='table-auto w-full'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='p-2 text-center'>Sr.No.</th>
                  <th className='p-2 text-center'>Category Name</th>
                  <th className='p-2 text-center'>Slug Link</th>
                  <th className='p-2 text-center'>Created At</th>
                  <th className='p-2 text-center'>Updated At</th>
                  <th className='p-2 text-center'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogPosts.map((post) => (
                  <tr key={post.id} className='border-t'>
                    <td className='p-2 text-center'>{post.id}</td>
                    <td className='p-2 text-center'>{post.category_name}</td>
                    <td className='p-2 text-center'>{post.slug}</td>
                    <td className='p-2 text-center'>{post.createdAt}</td>
                    <td className='p-2 text-center'>{post.updatedAt}</td>
                    <td className='p-2 text-center'>
                      <button className="text-green-600 px-2 py-1 justify">
                        <FaEye />
                      </button>
                      <button className="text-blue-600 px-2 py-1 justify" onClick={() => handleEditClick(post)}>
                        <FaEdit />
                      </button>
                      <button className="text-red-600 px-2 py-1">
                        <MdOutlineDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </Sidenav>
    </>
  );
}
