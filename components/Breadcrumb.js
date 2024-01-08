// components/Breadcrumb.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  const { category, subcategory } = router.query;

  return (
    <nav className='m-4'>
      <Link href="/">
        Home
      </Link>
      {category && (
        <>
          {' / '}
          <Link href={`/blog/${category}`}>
            {category}
          </Link>
        </>
      )}
      {subcategory && (
        <>
          {' / '}
          {subcategory}
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
