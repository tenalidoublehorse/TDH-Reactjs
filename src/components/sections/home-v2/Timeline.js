import React from 'react';

class Timeline extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {this.props.timelineData.map((item, index) => (
                <div className="timeline" key={index}>
                  <div className="timeline-icon"><span className="year">{item.year}</span></div>
                  <div className="timeline-content">
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;

