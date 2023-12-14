import React, { useState } from 'react';
import { useTable, useFilters } from 'react-table';


const columns = [
  {
    Header: 'Sl No',
    accessor: 'slNo'
  },
  {
    Header: 'State Name',
    accessor: 'stateName'
  },
  {
    Header: 'City',
    accessor: 'city'
  },
  {
    Header: 'Store Name',
    accessor: 'storeName'
  }
];

const MyTable = () => {
  const [originalData, setOriginalData] = useState([
    { slNo: 1, stateName: 'Arizona', city: 'AZ', storeName: 'Cloves Indian grocery' },
      { slNo: 2, stateName: 'Arizona', city: 'AZ', storeName: 'Turmeric' },
      { slNo: 3, stateName: 'Arizona', city: 'AZ', storeName: 'Turmeric cash & Carry' },
      { slNo: 4, stateName: 'Arizona', city: 'AZ', storeName: 'Lotus / Urban Chilli' },
      { slNo: 5, stateName: 'Arizona', city: 'AZ', storeName: 'Apana bazar' },
      { slNo: 6, stateName: 'Arizona', city: 'AZ', storeName: 'Lee lee International market' },
      { slNo: 7, stateName: 'Arizona', city: 'AZ', storeName: 'Safron' },
      { slNo: 8, stateName: 'Arizona', city: 'AZ', storeName: 'Turmeric' },
      { slNo: 9, stateName: 'Arizona', city: 'AZ', storeName: 'Lee lee International market (2stores)' },
      { slNo: 10, stateName: 'California', city: 'Diamond Bar', storeName: 'International india bazar' },
      { slNo: 11, stateName: 'California', city: 'Fullerton', storeName: 'International india bazar' },
      { slNo: 12, stateName: 'California', city: 'Irvine', storeName: 'Namaste plaza' },
      { slNo: 13, stateName: 'California', city: 'Pasadena', storeName: 'Namaste spice land' },
      { slNo: 14, stateName: 'California', city: 'Portland', storeName: 'Apana bazar' },
      { slNo: 15, stateName: 'California', city: 'San Diego', storeName: 'Namaste plaza' },
      { slNo: 16, stateName: 'California', city: 'Tustin', storeName: 'International india bazar /lakshmi' },
      { slNo: 17, stateName: 'California', city: 'Valley side', storeName: 'Namaste spice land' },
      { slNo: 18, stateName: 'California', city: 'River side', storeName: 'International india bazar' },
      { slNo: 19, stateName: 'California', city: 'Santa Clarita', storeName: 'Namaste spice land' },
      { slNo: 20, stateName: 'Los Angeles', city: 'LA', storeName: 'Suva spice mart' },
      { slNo: 21, stateName: 'Los Angeles', city: 'LA', storeName: 'Sunshine Indian grocery' },
      { slNo: 22, stateName: 'Los Angeles', city: 'LA', storeName: 'Shresta Indian grocery' },
      { slNo: 23, stateName: 'Los Angeles', city: 'LA', storeName: 'India sweet & spices' },
      { slNo: 24, stateName: 'Los Angeles', city: 'LA', storeName: 'Bombay market' },
      { slNo: 25, stateName: 'Los Angeles', city: 'LA', storeName: 'New india bazar' },
      { slNo: 26, stateName: 'Los Angeles', city: 'LA', storeName: 'New Bombay market' },
      { slNo: 27, stateName: 'Los Angeles', city: 'LA', storeName: 'Europa /india spice &Sweets' },
      { slNo: 28, stateName: 'Los Angeles', city: 'LA', storeName: 'New Delhi spice land' },
      { slNo: 29, stateName: 'Los Angeles', city: 'LA', storeName: 'Bhanus Indian grocery' },
      { slNo: 30, stateName: 'Los Angeles', city: 'LA', storeName: 'Punjabi Indian grocery' },
      { slNo: 31, stateName: 'Los Angeles', city: 'LA', storeName: 'Spencers mart' },
      { slNo: 32, stateName: 'Los Angeles', city: 'LA', storeName: 'JH Bazar' },
      { slNo: 33, stateName: 'Seattle', city: 'Seattle', storeName: 'Mayuri' },
      { slNo: 34, stateName: 'Seattle', city: 'Seattle', storeName: 'Mayuri' },
      { slNo: 35, stateName: 'Seattle', city: 'Seattle', storeName: 'Mayuri' },
      { slNo: 36, stateName: 'Seattle', city: 'Seattle', storeName: 'Mayuri' },
      { slNo: 37, stateName: 'Seattle', city: 'Seattle', storeName: 'Swagath foods grocery' },
      { slNo: 38, stateName: 'Seattle', city: 'Seattle', storeName: 'Swagath' },
      { slNo: 39, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 40, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 41, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 42, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 43, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 44, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 45, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 46, stateName: 'San Francisco', city: 'Sfo', storeName: 'Namaste plaza' },
      { slNo: 47, stateName: 'San Francisco', city: 'Sfo', storeName: 'New india Bazar' },
      { slNo: 48, stateName: 'San Francisco', city: 'Sfo', storeName: 'New india Bazar' },
      { slNo: 49, stateName: 'San Francisco', city: 'Sfo', storeName: 'New india Bazar' },
      { slNo: 50, stateName: 'San Francisco', city: 'Sfo', storeName: 'New india Bazar' },
      { slNo: 51, stateName: 'San Francisco', city: 'Sfo', storeName: 'New india Bazar' },
      { slNo: 52, stateName: 'San Francisco', city: 'Sfo', storeName: 'New india Bazar' },
  ]);

  const [data, setData] = useState(originalData);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    if (searchText.trim() === '') {
      setData(originalData);
    } else {
      setData(
        originalData.filter(
          (row) =>
            row.storeName.toLowerCase().includes(searchText.toLowerCase()) ||
            row.slNo.toString().includes(searchText) ||
            row.stateName.toLowerCase().includes(searchText.toLowerCase()) ||
            row.city.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  return (
    <div className='mt-5' style={{ backgroundColor: '#f9f9f9' }}>
      <div className='search-section shadow-sm p-3 bg-rounded'>
        <div className='col-lg-6'>
          <h3>Find Your Store</h3>
        </div>
        <div className='col-lg-6'>
          <input
            type='text'
            placeholder='Search Our Store...'
            onChange={handleSearchChange}
            className='store-search'
            // style={{ borderColor: 'black', border: '3px solid #66676A' }}
          />
        </div>
      </div>
      {data.length > 0 ? (
        <table {...getTableProps()} className='table'>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={row.index % 2 === 0 ? 'odd-row' : 'even-row'}
                >
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default MyTable;
