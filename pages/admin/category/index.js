import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Pagination from "react-js-pagination";
import Autosuggest from 'react-autosuggest';
import Select from 'react-select';
import Sidenav from '../../../components/sidenav';

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

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBlogPosts = filteredBlogPosts.slice(startIndex, endIndex);

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
    setActivePage(1);
    setSuggestions([]);
    setValue('');
    setSelectedSuggestion(null);
  };

  return (
    <>
      <Sidenav>
        <div className='min-h-screen p-4'>
          {/* Search bars */}
          <div className='flex '>
            <div>
              <Select
                options={categoryOptions}
                isClearable
                value={selectedCategory}
                onChange={handleCategoryChange}
                placeholder="All Categories"
                className="rounded-md w-56 border border-black"
              />
              
            </div>
            <button onClick={handleSearchInTable} className="bg-orange-500 text-white px-4 py-2 rounded border border-black h-11">
              <FaSearch />
            </button>


            <div className="  text-black px-2 py-1 mt-4 flex justify-end w-full">
              <button className="ml-2 bg-stone-300 rounded-3xl p-2 h-11">
                <div className="flex">
                  <IoMdAddCircle style={{ color: 'orange', fontSize: '2em' }} className="" />
                  <h4>Add New Category</h4>
                </div>
              </button>
            </div>
          </div>

          {/* Display a table for cat posts */}
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
              {paginatedBlogPosts.map(({ id, parent_id, category_name, createdAt, updatedAt, slug }) => (
                <tr key={id} className='border-t'>
                  <td className='p-2 text-center'>{id}</td>
                  <td className='p-2 text-center'>{category_name}</td>
                  <td className='p-2 text-center'>{slug}</td>
                  <td className='p-2 text-center'>{createdAt}</td>
                  <td className='p-2 text-center'>{updatedAt}</td>
                  <td className='p-2 text-center'>
                    <button className= "text-green-600 px-2 py-1  justify">
                      <FaEye />
                    </button>
                    <button className= "text-blue-600 px-2 py-1  justify">
                      <FaEdit />
                    </button>
                    <button className=" text-red-600 px-2 py-1">
                      <MdOutlineDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <ul className="pagination">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={filteredBlogPosts.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </ul>
          </div>
        </div>
      </Sidenav>
    </>
  );
}
