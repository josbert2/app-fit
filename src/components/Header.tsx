import React from 'react'

interface Props {
  title: string
  rutina: string
}

const Header: React.FC<Props> = ({ title, rutina }) => {
  return (
    <header className="bg-white shadow">
      <div className="flex items-center px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <div className='px-2 py-3 ml-auto font-bold text-white uppercase bg-blue-500 rounded'>
        {rutina}
        </div>
      </div>
    </header>
  );
};

export default Header
