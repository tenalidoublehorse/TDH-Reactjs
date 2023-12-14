import React from 'react';
import Timeline from './Timeline';

class MyComponent extends React.Component {
  timelineData = [
    {
      year: '2005',
      title: 'India',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
    },
    {
      year: '2010',
      title: 'Hyderabad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
    },
    {
      year: '2015',
      title: 'USA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
    },
    {
      year: '2020',
      title: 'UAE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
    },
  ];

  render() {
    return (
      <div className='mt-5 mb-5'>
        <h5 className="custom-primary text-center">Unraveling Our Story</h5>
        <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2>
        <Timeline timelineData={this.timelineData} />
      </div>
    );
  }
}

export default MyComponent;
