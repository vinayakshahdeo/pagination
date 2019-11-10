import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const test = (number, event) => {
    event.preventDefault();
    paginate(number);
  };
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a
              onClick={event => test(number, event)}
              href
              className='page-link'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
