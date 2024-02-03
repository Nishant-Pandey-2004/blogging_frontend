import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Pagination from "react-js-pagination";
import Autosuggest from 'react-autosuggest';
import Select from 'react-select';
import Sidenav from '../../../components/Sidenav';

const blogPosts = [
    {
      id: 1,
      created_by: "Nishant",
      title: "New Marvel Movie",
      createdAt: "2024-01-14",
      updatedAt: "2024-01-20",
      category: "Entertainment",
    },
    {
      id: 2,
      created_by: "Karan",
      title: "Best Places to visit in India",
      createdAt: "2024-01-12",
      updatedAt: "2024-01-12",
      category: "Travel",
    },
    {
      id: 3,
      created_by: "Omkar",
      title: "FIFA World Cup 2022",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-02",
      category: "Sports",
    },
    {
      id: 4,
      created_by: "Shaivi",
      title: "Rare Snow Leopard",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      category: "Wildlife",
    },
    {
        id: 5,
        created_by: "Shaivi",
        title: "Rare Snow Leopard",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        category: "Wildlife",
      },
      {
        id: 6,
        created_by: "Shaivi",
        title: "Rare Snow Leopard",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        category: "Wildlife",
      },
      {
        id: 7,
        created_by: "Shaivi",
        title: "Rare Snow Leopard",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        category: "Wildlife",
      },
      {
        id: 8,
        created_by: "Shaivi",
        title: "Rare Snow Leopard",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        category: "Wildlife",
      },
    
    // ... other blog post objects
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
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(blogPosts);

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
        : blogPosts.filter((post) =>
          post.title.toLowerCase().includes(inputValue) ||
          post.created_by.toLowerCase().includes(inputValue)
        )
    );
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.title} - {suggestion.created_by}
    </div>
  );

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSearchInTable = () => {
    const filterFunction = (post) => (
      (selectedCategory ? post.category === selectedCategory.value : true) &&
      (selectedSuggestion ? post.title === selectedSuggestion.title : true)
    );

    const newFilteredBlogPosts = blogPosts.filter(filterFunction);

    setFilteredBlogPosts(newFilteredBlogPosts);
    setActivePage(1);
    setSuggestions([]);
    setValue('');
    setSelectedSuggestion(null);
  };

  return (
    <>
      <div className='flex'>
      <div className='w-[18vw]'>

      <Sidenav/>
      </div>
      <div className='w-[90vw]'>
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
            
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={{
                placeholder: 'Search by title or Author.....',
                value,
                onChange: handleSearchChange,
                className: 'p-2 border border-black rounded-md w-100',
              }}
              onSuggestionSelected={(_, { suggestion }) => setSelectedSuggestion(suggestion)}
            />
            <div>
            <button onClick={handleSearchInTable} className="bg-orange-500 text-white px-4 py-2 rounded border border-black h-11">
              <FaSearch />
            </button>
            </div>
            <div className="  text-black px-2 py-1 mt-4 flex justify-end w-full">

    
    <button className="ml-2 bg-stone-300 rounded-3xl p-2 h-11">
        <div className="flex">
        <IoMdAddCircle style={{ color: 'orange', fontSize: '2em' }} className="" />
        <h4>Add New User</h4></div></button>
        
        



  
</div>

            
          </div>

          {/* Display a table for blog posts */}
          <table className='table-auto w-full'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='p-2 text-center'>Sr.No.</th>
                <th className='p-2 text-center'>Category</th>
                <th className='p-2 text-center'>Blog Title</th>
                <th className='p-2 text-center'>Author</th>
                <th className='p-2 text-center'>Created At</th>
                <th className='p-2 text-center'>Updated At</th>
                <th className='p-2 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBlogPosts.map(({ id, created_by, title, category, createdAt, updatedAt }) => (
                <tr key={id} className='border-t'>
                  <td className='p-2 text-center'>{id}</td>
                  <td className='p-2 text-center'>{category}</td>
                  <td className='p-2 text-center'>{title}</td>
                  <td className='p-2 text-center'>{created_by}</td>
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
        </div>
        </div>
    </>
  );
}
