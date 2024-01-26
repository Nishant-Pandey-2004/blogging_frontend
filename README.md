Clint Document (Proposal)

1\. Objectives

The objective of this project is to develop an Online Blogging Platform. The system aims to provide a user-friendly environment for creating, editing, and organising blog posts efficiently. 

The main features include an Admin Dashboard with a Blog Editor with text formatting and images and videos and Category Hierarchy Management. The front end allows Users to browse, read and interact with the blog, and also be recommended related blogs without logging in. 

2\. Project Story

The project consists of two main sections, the Admin Dashboard and the User Interface. Administrators gain access to tools for managing content and creating a vibrant community, while users can explore and enjoy diverse blog content with ease. This platform aims to encourage content creation, collaboration, and knowledge sharing within a user-friendly environment.




1. **Admin Dashboard**

The Administrator Dashboard is the central hub for managing any blog activity. It provides a comprehensive overview of key metrics such as the total number of users, blogs, and blog categories, along with insights into user engagement and popular content. From this dashboard, administrators can:




- Manage Users: Create, edit, and deactivate user accounts to maintain the platform's user base.
- Manage Blogs: Access a user-friendly editor for creating new blog posts with rich text formatting, image embedding, and multimedia support. Existing blog posts can be edited and drafts saved before publishing. Additionally, unwanted blog posts can be deleted for content management purposes.
- Organise Content: Utilise nested category management to maintain a well-organised and easily navigable platform for users.
- SEO Optimization: Customise SEO metadata for each blog post, including Slug URLs, meta titles, descriptions, and keywords, to improve search engine ranking and visibility.




2. **User Interface**

Users can explore the platform without requiring login credentials. They can navigate the platform through various categories and subcategories, discovering content that aligns with their interests. Each blog post can be accessed and explored individually, with users having the flexibility to sort posts by date (latest or oldest), popularity, author, or year. Furthermore, the platform utilises a recommendation system that leverages category and tag information to suggest similar blog posts, ensuring continuous user engagement and discovery of new content.




3. **Interface Design**

Both the admin dashboard and user interface prioritise user-friendliness. The admin dashboard presents key metrics and information in a clear and concise manner, while the user interface will have an aesthetically pleasing design with navigation and optimised content presentation.

3\. Features

3\.1 Functional Requirements

**A. Admin Dashboard Overview:** The admin dashboard should display a summary of key metrics and activities, such as the total number of blogs, users, and recent activities.

**B. Admin User Management:** The admin should be able to manage user accounts, including creating, editing, and deactivating accounts.

**C. Admin Blog Management:** The admin should have the ability to view, create, edit, and delete blog posts. Each blog post should have metadata displayed (e.g., date created, last modified, author).

- Create Blog: The system should provide a user-friendly interface for creating new blog posts. The editor should support rich text formatting, image embedding, and other multimedia elements.
- View Blog: Admins can view all the existing in a table structure, can filter or search through existing blogs and will be given the option to edit or delete the blog.
- Edit Blog: Admins should be able to edit their existing blog posts. Changes made to a blog post should be saved as drafts until explicitly published.
- Delete Blog: Admins should have the capability to delete a blog post.

**D. Nested Category Management:** The system will utilise a nested category structure to organise blog posts efficiently. This allows for flexibility to accommodate a wide range of topics and subtopics and improves user experience for browsing and searching. 




1. Category Structure:




- Top Level Categories: Represent broad topics (e.g., Sports, Entertainment, Tech, Education, Finance, Health).
- Subcategories: Further refine top-level categories into more specific niches (e.g., under Sports: Cricket, Football, Chess, Tennis).
- Sub-subcategories: Provide additional granularity for specific subcategories (e.g., under Cricket: ODI, T20, IPL, World Cup).




2. Admin Functionality:




- Create Categories: Add new categories and subcategories at any level.
- Edit Categories: Modify existing category names and descriptions.
- Delete Categories: Remove categories and subcategories when no longer needed.
- View Category Statistics: Track the number of blogs associated with each category and subcategory.
- Manage Slug Links: Generate and edit SEO-friendly slug links for each category and subcategory.




3. User Experience:




- Users can browse blogs by navigating through the category hierarchy.
- Filters allow users to refine their search based on specific categories and subcategories.
- Helps users understand their current location within the category structure.




4. Example: A user interested in reading about cricket specifically can navigate through the categories Sports > Cricket. They can further refine their search by selecting subcategories like ODI, T20, or IPL depending on their specific interests. This allows them to easily find relevant blog posts without having to sift through unrelated content.

**E. SEO:**

The system should generate SEO-friendly URLs for each blog post. Metadata such as meta titles, descriptions, and keywords should be customizable for each blog post.

**F. Recommendation System:** 

To improve accuracy and relevance, the system will recommend similar blog posts using both category and tags. Additionally, admins can define the categories and tags for each blog. 

3\.2 Screens

3\.2.1 User Screens




- **Blog List:**

The Blog List screen allows users to easily find interesting content. Blogs are organised by category, making it simple to navigate to specific topics. Each blog listing includes the title, a cover image, and the number of likes it has received. Additionally, a search bar enables users to instantly find specific blogs by title or keyword, streamlining their browsing experience.




- **Blog View:**

Once a user finds a blog that they are interested to read, they can access the full text through the Blog View screen. Here, they'll find the title, author name, and a banner image at the top. The full blog text is displayed prominently, allowing for uninterrupted reading. On the right-hand side of the page, the system recommends other blogs based on the author's chosen tags, offering a personalised content discovery experience. To further engage with the content, users can comment on the blog and like it, though they need to be signed in to do so.




- **Top Rated:**

The Top Rated screen (which will be added to the Home Screen) displays a list of blogs sorted by their number of likes. This allows users to quickly find blogs that are likely to be interesting and informative, maximising their time spent on the platform.

3\.2.2 Admin Screens




- **Editor:**

The Blog Editor will provide a user-friendly interface for creating and editing blog posts. Admins can easily fill in details like category, title, and description, and upload images for thumbnails and banners through forms. Rich text formatting options allow for headings, bold, italics, strikethrough, bullet points, checkboxes, and quotes. Additionally, admins can upload images and videos directly within the blog. A preview function will allow them to visualise the final appearance before saving or further editing. Finally, the form gathers tags and keywords for recommendations and SEO settings like meta titles, descriptions, and keywords.




- **Category Listing:**

Admins can create and edit categories and subcategories. The Admin can add blog content to the sub-categories during blog creation. On this screen the Admin will be able to Track the number of blogs associated with each category and subcategory and generate and edit SEO-friendly slug links for each category and subcategory.





- **Blog Listing:**

The Admin is primarily responsible for creation of blogs. On this screen, the admin will be able to track and monitor all available blogs, including titles, authors, creation/update dates, and categories. Each blog entry provides options for deletion or editing, with the latter redirecting to the Editor screen for further modifications.

4\. Technical Stack

4\.1 Frontend

We will be using:

- Next JS: A React framework for building static and server-rendered web applications. Offers several benefits, including server-side rendering for improved SEO and performance, built-in routing and data fetching, and automatic code splitting for faster loading times.
- Tailwind CSS: A utility-first CSS framework that provides a collection of pre-built styles and components. Makes it easy to quickly build responsive and modern websites without writing a lot of custom CSS.

4\.2 Backend

We will be using:

- Laravel: A PHP framework that provides a foundation for building web applications. Offers a clean and expressive syntax, powerful features, and a large community of developers.
- Database: MySQL is a popular open-source relational database management system (RDBMS) that is widely used for web applications. It is known for its reliability, scalability, and performance.

5\. Timelines

5 Days- For Planning, Documentation, UI/UX Designs, Database Architecture

6 Days- For Development and Testing

2 Days- For Deployment 

6\. Team Members

Ms. Shaivi Puranik 

Mr. Karan Panda	

Mr. Nishant Pandey				

Mr. Omkar Akut	

Mr. Omkar Kotekar		

Mr. Shrikrushna Patil

Mr. Dhruv Paste	

Ms. Swati Abhang

Ms. Apeksha Waghmare

7\. Costing

8\. AMC and Support 

Developer Document

1\. DB Architecture 

Table Name: Users


|Var\_Name|Datatype|Description|
| :- | :- | :- |
|user\_id|int|Unique identifier for each user.|
|Name|String|Name of the user.|
|Address|String|Address of the user.|
|Mobile\_Number|int|Mobile number of the user.|
|is\_Admin|int|Indicating whether the user is an admin|

Table Name: Categories


|Variable name |Datatype|Description|
| :- | :- | :- |
|id|int|Unique identifier for each category.|
|parent\_id|int|` `Identifier for the parent category,|
|category\_title|string|Title of the category.|
|deleted\_at|date|Date and time when the category was deleted.|
|updated\_at|date|Date and time when the category was updated.|
|created\_at|date|Date and time when the category was created.|

Table Name: blogs


|Variable name|Datatype|Description|
| :- | :- | :- |
|blog\_id|int|Unique identifier for each blog.|
|created\_by|int|User ID of the creator of the blog.|
|title|string|` `Title of the blog.|
|category\_id|int|ID of the category to which the blog belongs|
|description|string|Brief description of the blog.|
|front\_image|string|` `URL or path to the front image of the blog.|
|cover\_image|string|` `URL or path to the cover image of the blog.|
|tags|array|Array of tags associated with the blog.|
|content|string|` `Main content of the blog.|
|is\_active|string|Status of the blog (active, inactive, etc.).|
|meta\_tag|string|Meta tag for SEO purposes|
|meta\_keyword|string|Meta keywords for SEO purposes.|
|slug|string|SEO-friendly URL slug.|
|deleted\_at|date|Date and time when the Blog was deleted.|
|created\_at|date|Date and time when the Blog was updated.|
|updated\_at|date|Date and time when the Blog was created.|
|created\_by\_admin|int|User ID of the admin who created the blog.|

Table name: Blog history


|Variable name|Datatype|Description|
| :- | :- | :- |
|id|int|Unique identifier for each blog|
|blog\_id|int|Unique identifier for each blog|
|created\_by|int|Name of user creating particular blog|
|member\_id|int||
|is\_like|int|Identifier for if blog has been marked as liked|
|is\_useful|int|Identifier for if blog has been marked as useful|
|is\_share|int|Identifier for if blog link has been copied|
|deleted\_at|date|Date and time when the Blog was deleted.|
|created\_at|date|Date and time when the Blog was created updated.|
|update\_at|date|Date and time when the Blog was updated.|

2\. Use Case

![image](https://github.com/Nishant-Pandey-2004/blogging_frontend/assets/113779980/c388722c-615f-4a70-b31e-084660601ee2)


Fig 2.1 Admin Use Case

![image](https://github.com/Nishant-Pandey-2004/blogging_frontend/assets/113779980/a9e69c52-9187-4eb5-b8cb-462af7231fd0)


Fig 2.2 User Use Case

3\. Development Requirement

A. Blog Editor Screen:

1. Implement a text editor with advanced formatting options like bold, italics, headings, lists, and multimedia embeds.
1. Enable drag-and-drop functionality for easy content organisation and image management.
1. Integrate functionalities for uploading and managing images and videos within blog posts.
1. Implement a user-friendly interface for managing categories, tags, and SEO settings.
1. Allow previewing the blog post before publishing.
1. Enable Dropdown for Category and Sub Categories selection
1. Ensure a responsive layout for optimal viewing on various devices

B. Admin Blog Listing Screen:

1. Display a list of all published blog posts with relevant information
1. Provide search options for quickly finding specific blog posts.
1. Implement actions for deleting or editing blog posts 
1. Ensure a responsive layout for optimal viewing on various devices

C. Admin Category Creation Screen: 

1. Enable drag-and-drop functionality for easy content organisation and image management.
1. Integrate functionalities for uploading and managing images for each category/sub-category created
1. Implement a user-friendly interface 
1. Enable Dropdown for Parent Category selection
1. Ensure a responsive layout for optimal viewing on various devices

C. Admin Category Listing Screen:

1. Display a list of blogs created in the categories with relevant information like Slug links
1. Implement search functionality for quickly finding specific categories.
1. Ensure a responsive layout for optimal viewing on various devices.

D. User Frontend:

1. Implement a Navigation bar with multi-level dropdown menu system for navigating through categories and subcategories.

E. Blog List:

1. Implement server-side pagination to display blog posts in manageable chunks.
1. Integrate search functionality with live results filtering based on keywords.
1. Display relevant information for each blog post like title, and cover image.
1. Implement responsive design for optimal viewing across different devices

F. Blog View:

1. Display relevant information for each blog post like title, author, category, and banner image.
1. Dynamically render the full blog post content with proper formatting and styling.
1. Provide options for users to like blog posts.
1. Implement responsive design for optimal viewing across different devices

G. Top Rated (to be displayed on Home Page):

1. Fetch and display the top-rated blog posts within a selected category based on the number of likes.
1. Implement responsive design for optimal viewing across different devices

   4\. UI (screens, frontend backend for each screen)

5\. HTML Conversion

6\. HTML to React conversion

7\. Development 

8\. Staging Testing

9\. UAT Testing

10\. Go live Final Delivery










