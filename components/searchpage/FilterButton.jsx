import React from 'react';

const FilterButton = ({ name, onClick }) => {
  return (
    <div>
        <button 
          className='bg-white border rounded-lg px-4 py-2 border-black hover:bg-slate-400'
          onClick={onClick}  // Use the onClick prop here
        >
          {name}
        </button>
    </div>
  );
}

export default FilterButton;
