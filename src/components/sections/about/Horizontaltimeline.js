import React, { Component } from 'react';

class HorizontalTimeline extends Component {
  constructor(props) {
    super(props);
    this.eventsWrapperRef = React.createRef();
    this.timelineWrapperRef = React.createRef();
    this.state = {
      timelineComponents: {},
      eventsMinDistance: 60,
      timelineTotWidth: 0,
    };
  }

  componentDidMount() {
    this.initTimeline();
  }

  initTimeline() {
    const { eventsMinDistance } = this.state;
    const timelines = document.querySelectorAll('.cd-horizontal-timeline');

    timelines.forEach((timeline) => {
      const timelineComponents = {};

      // Cache timeline components
      timelineComponents['timelineWrapper'] = timeline.querySelector('.events-wrapper');
      timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].querySelector('.events');
      timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].querySelector('.filling-line');
      timelineComponents['timelineEvents'] = Array.from(timelineComponents['eventsWrapper'].querySelectorAll('a'));
      timelineComponents['timelineDates'] = this.parseDate(timelineComponents['timelineEvents']);
      timelineComponents['eventsMinLapse'] = this.minLapse(timelineComponents['timelineDates']);
      timelineComponents['timelineNavigation'] = timeline.querySelector('.cd-timeline-navigation');
      timelineComponents['eventsContent'] = timeline.querySelector('.events-content');

      // Assign a left position to the single events along the timeline
      this.setDatePosition(timelineComponents);
      // Assign a width to the timeline
      const timelineTotWidth = this.setTimelineWidth(timelineComponents);
      this.setState({ timelineTotWidth });

      // The timeline has been initialized - show it
      timeline.classList.add('loaded');

      // Add event listeners for navigation
    //   timelineComponents['timelineNavigation'].querySelector('.next').addEventListener('click', () => this.updateSlide('next'));
    //   timelineComponents['timelineNavigation'].querySelector('.prev').addEventListener('click', () => this.updateSlide('prev'));
  // Add event listeners for navigation
timelineComponents['timelineNavigation'].querySelector('.next').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    this.updateSlide('next');
  });
  
  timelineComponents['timelineNavigation'].querySelector('.prev').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of anchor tags
    this.updateSlide('prev');
  });
  
      // Update navigation arrows visibility


      // Add event listeners for a single event click
      timelineComponents['eventsWrapper'].addEventListener('click', (event) => this.handleEventClick(event, timelineComponents));

      // Add event listeners for swipe (assuming you have a swipe library)
      timelineComponents['eventsContent'].addEventListener('swipeleft', () => this.showNewContent('next'));
      timelineComponents['eventsContent'].addEventListener('swiperight', () => this.showNewContent('prev'));

      // Keyboard navigation
      document.addEventListener('keyup', (event) => this.handleKeyUp(event, timelineComponents));
    });
  }

//   updateSlide = (string) => {
//     const { timelineComponents, timelineTotWidth } = this.state;
//     const translateValue = this.getTranslateValue(timelineComponents['eventsWrapper']);
//     const wrapperWidth = Number(getComputedStyle(timelineComponents['timelineWrapper']).width.replace('px', ''));

//     if (string === 'next') {
//       this.translateTimeline(timelineComponents, translateValue - wrapperWidth + this.state.eventsMinDistance, wrapperWidth - timelineTotWidth);
//     } else {
//       this.translateTimeline(timelineComponents, translateValue + wrapperWidth - this.state.eventsMinDistance);
//     }
//   };

updateSlide = (string) => {
    const { timelineComponents, timelineTotWidth } = this.state;
    const eventsWrapper = this.eventsWrapperRef.current;
    const translateValue = this.getTranslateValue();
    const wrapperWidth = Number(getComputedStyle(this.timelineWrapperRef.current).width.replace('px', ''));
  
    if (string === 'next') {
      this.translateTimeline(timelineComponents, translateValue - wrapperWidth + this.state.eventsMinDistance, wrapperWidth - timelineTotWidth);
    } else {
      this.translateTimeline(timelineComponents, translateValue + wrapperWidth - this.state.eventsMinDistance);
    }
  };
  
  

  showNewContent = (string) => {
    const { timelineComponents, timelineTotWidth } = this.state;
    const visibleContent = timelineComponents['eventsContent'].querySelector('.selected');
    const newContent = string === 'next' ? visibleContent.nextElementSibling : visibleContent.previousElementSibling;

    if (newContent) {
      const selectedDate = timelineComponents['eventsWrapper'].querySelector('.selected');
      const newEvent = string === 'next' ? selectedDate.parentElement.nextElementSibling.querySelector('a') : selectedDate.parentElement.previousElementSibling.querySelector('a');

      this.updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
      this.updateVisibleContent(newEvent, timelineComponents['eventsContent']);
      newEvent.classList.add('selected');
      selectedDate.classList.remove('selected');
      this.updateOlderEvents(newEvent);
      this.updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
    }
  };

  updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
    const eventStyle = getComputedStyle(event);
    const eventLeft = Number(eventStyle.getPropertyValue('left').replace('px', ''));
    const timelineWidth = Number(getComputedStyle(timelineComponents['timelineWrapper']).width.replace('px', ''));
    const timelineTranslate = this.getTranslateValue(timelineComponents['eventsWrapper']);

    if ((string === 'next' && eventLeft > timelineWidth - timelineTranslate) || (string === 'prev' && eventLeft < -timelineTranslate)) {
      this.translateTimeline(timelineComponents, -eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
    }
  }

//   translateTimeline(timelineComponents, value, totWidth) {
//     const eventsWrapper = timelineComponents['eventsWrapper'];
//     value = value > 0 ? 0 : value; 
//     value = value < totWidth ? totWidth : value; 
//     this.setTransformValue(eventsWrapper, 'translateX', value + 'px');
   
//     if (value === 0) {
//       timelineComponents['timelineNavigation'].querySelector('.prev').classList.add('inactive');
//     } else {
//       timelineComponents['timelineNavigation'].querySelector('.prev').classList.remove('inactive');
//     }
//     if (value === totWidth) {
//       timelineComponents['timelineNavigation'].querySelector('.next').classList.add('inactive');
//     } else {
//       timelineComponents['timelineNavigation'].querySelector('.next').classList.remove('inactive');
//     }
//   }
translateTimeline(timelineComponents, value, totWidth) {
    const eventsWrapper = timelineComponents['eventsWrapper'];
    if (!eventsWrapper) {
      // Handle the case where eventsWrapper is undefined (add error handling or return)
      return;
    }
  
    value = value > 0 ? 0 : value; // Only negative translate value
    value = value < totWidth ? totWidth : value; // Do not translate more than timeline width
    this.setTransformValue(eventsWrapper, 'translateX', value + 'px');
    // Update navigation arrows visibility
    // if (value === 0) {
    //   timelineComponents['timelineNavigation'].querySelector('.prev').classList.add('inactive');
    // } else {
    //   timelineComponents['timelineNavigation'].querySelector('.prev').classList.remove('inactive');
    // }
    // if (value === totWidth) {
    //   timelineComponents['timelineNavigation'].querySelector('.next').classList.add('inactive');
    // } else {
    //   timelineComponents['timelineNavigation'].querySelector('.next').classList.remove('inactive');
    // }
    // Update navigation arrows visibility
if (value === 0) {
    timelineComponents['timelineNavigation'].querySelector('.prev').classList.add('inactive');
  } else {
    timelineComponents['timelineNavigation'].querySelector('.prev').classList.remove('inactive');
  }
  if (value === totWidth) {
    timelineComponents['timelineNavigation'].querySelector('.next').classList.add('inactive');
  } else {
    timelineComponents['timelineNavigation'].querySelector('.next').classList.remove('inactive');
  }
  
  }
  

  updateFilling(selectedEvent, filling, totWidth) {
    // Change .filling-line length according to the selected event
    const eventStyle = getComputedStyle(selectedEvent);
    const eventLeft = Number(eventStyle.getPropertyValue('left').replace('px', ''));
    const eventWidth = Number(eventStyle.getPropertyValue('width').replace('px', ''));
    const eventCenter = eventLeft + eventWidth / 2;
    const scaleValue = eventCenter / totWidth;
    this.setTransformValue(filling, 'scaleX', scaleValue);
  }

  setDatePosition(timelineComponents) {
    const { eventsMinDistance } = this.state;
    for (let i = 0; i < timelineComponents['timelineDates'].length; i++) {
      const distance = this.daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]);
      const distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
      timelineComponents['timelineEvents'][i].style.left = distanceNorm * eventsMinDistance + 'px';
    }
  }

  setTimelineWidth(timelineComponents) {
    const { eventsMinDistance } = this.state;
    const timeSpan = this.daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]);
    const timeSpanNorm = Math.round(timeSpan / timelineComponents['eventsMinLapse']) + 4;
    const totalWidth = timeSpanNorm * eventsMinDistance;
    timelineComponents['eventsWrapper'].style.width = totalWidth + 'px';
    this.updateFilling(timelineComponents['timelineEvents'][0], timelineComponents['fillingLine'], totalWidth);
    return totalWidth;
  }

  handleEventClick(event, timelineComponents) {
    event.preventDefault();
    const clickedEvent = event.target;
    timelineComponents['timelineEvents'].forEach((el) => el.classList.remove('selected'));
    clickedEvent.classList.add('selected');
    this.updateOlderEvents(clickedEvent);
    this.updateFilling(clickedEvent, timelineComponents['fillingLine'], this.state.timelineTotWidth);
    this.updateVisibleContent(clickedEvent, timelineComponents['eventsContent']);
  }


  updateVisibleContent(event, eventsContent) {
    const eventDate = event.dataset.date;
    const visibleContent = eventsContent.querySelector('.selected');
    const selectedContent = eventsContent.querySelector(`[data-date="${eventDate}"]`);
    const selectedContentHeight = selectedContent.clientHeight;

    if (selectedContent.index > visibleContent.index) {
      var classEntering = 'selected enter-right';
      var classLeaving = 'leave-left';
    } else {
      var classEntering = 'selected enter-left';
      var classLeaving = 'leave-right';
    }

    selectedContent.className = classEntering;
    visibleContent.className = classLeaving;
    visibleContent.addEventListener('animationend', () => {
      visibleContent.classList.remove('leave-right', 'leave-left');
      selectedContent.classList.remove('enter-left', 'enter-right');
    });
    eventsContent.style.height = selectedContentHeight + 'px';
  }

  updateOlderEvents(event) {
    event.parentElement.querySelectorAll('a').forEach((el) => el.classList.add('older-event'));
    event.parentElement.previousElementSibling.querySelectorAll('a').forEach((el) => el.classList.remove('older-event'));
  }

//   getTranslateValue(element) {
//     const timelineStyle = getComputedStyle(element);
//     let timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
//       timelineStyle.getPropertyValue('-moz-transform') ||
//       timelineStyle.getPropertyValue('-ms-transform') ||
//       timelineStyle.getPropertyValue('-o-transform') ||
//       timelineStyle.getPropertyValue('transform');

//     if (timelineTranslate.indexOf('(') >= 0) {
//       timelineTranslate = timelineTranslate.split('(')[1];
//       timelineTranslate = timelineTranslate.split(')')[0];
//       timelineTranslate = timelineTranslate.split(',');
//       return Number(timelineTranslate[4]);
//     } else {
//       return 0;
//     }
//   }
getTranslateValue() {
    const timelineStyle = window.getComputedStyle(this.eventsWrapperRef.current);
    let timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
      timelineStyle.getPropertyValue('-moz-transform') ||
      timelineStyle.getPropertyValue('-ms-transform') ||
      timelineStyle.getPropertyValue('-o-transform') ||
      timelineStyle.getPropertyValue('transform');
  
    if (timelineTranslate.indexOf('(') >= 0) {
      timelineTranslate = timelineTranslate.split('(')[1];
      timelineTranslate = timelineTranslate.split(')')[0];
      timelineTranslate = timelineTranslate.split(',');
      return Number(timelineTranslate[4]);
    } else {
      return 0;
    }
  }
  
  updateSlide = (string) => {
    const { timelineComponents, timelineTotWidth } = this.state;
    const eventsWrapper = this.eventsWrapperRef.current;
    const translateValue = this.getTranslateValue();
    const wrapperWidth = Number(getComputedStyle(this.timelineWrapperRef.current).width.replace('px', ''));
  
    if (string === 'next') {
      this.translateTimeline(timelineComponents, translateValue - wrapperWidth + this.state.eventsMinDistance, wrapperWidth - timelineTotWidth);
    } else {
      this.translateTimeline(timelineComponents, translateValue + wrapperWidth - this.state.eventsMinDistance);
    }
  };
  


  setTransformValue(element, property, value) {
    element.style['-webkit-transform'] = `${property}(${value})`;
    element.style['-moz-transform'] = `${property}(${value})`;
    element.style['-ms-transform'] = `${property}(${value})`;
    element.style['-o-transform'] = `${property}(${value})`;
    element.style['transform'] = `${property}(${value})`;
  }

  parseDate(events) {
    const dateArrays = [];
    events.forEach((event) => {
      const dateComp = event.dataset.date.split('/');
      const newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  daydiff(first, second) {
    return Math.round((second - first));
  }

  minLapse(dates) {
    const dateDistances = [];
    for (let i = 1; i < dates.length; i++) {
      const distance = this.daydiff(dates[i - 1], dates[i]);
      dateDistances.push(distance);
    }
    return Math.min(...dateDistances);
  }

  render() {
    return <section class="cd-horizontal-timeline">
	<div class="timeline">
		<div class="events-wrapper" ref={this.timelineWrapperRef}>
			<div class="events">
				<ol>
					<li><a href="#0" data-date="16/01/2014" class="selected">16 Jan</a></li>
					<li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
					<li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
					<li><a href="#0" data-date="20/05/2014">20 May</a></li>
					<li><a href="#0" data-date="09/07/2014">09 Jul</a></li>
					<li><a href="#0" data-date="30/08/2014">30 Aug</a></li>
					<li><a href="#0" data-date="15/09/2014">15 Sep</a></li>
					<li><a href="#0" data-date="01/11/2014">01 Nov</a></li>
					<li><a href="#0" data-date="10/12/2014">10 Dec</a></li>
					<li><a href="#0" data-date="19/01/2015">29 Jan</a></li>
					<li><a href="#0" data-date="03/03/2015">3 Mar</a></li>
				</ol>

				<span class="filling-line" aria-hidden="true"></span>
			</div> 
		</div> 
			
		<ul class="cd-timeline-navigation">
			<li><a href="#0" class="prev inactive">Prev</a></li>
			<li><a href="#0" class="next">Next</a></li>
            
		</ul> 
	</div> 

	<div class="events-content" ref={this.eventsWrapperRef}>
		<ol>
			<li class="selected" data-date="16/01/2014">
				<h2>Horizontal Timeline</h2>
				<em>January 16th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="28/02/2014">
				<h2>Event title here</h2>
				<em>February 28th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="20/04/2014">
				<h2>Event title here</h2>
				<em>March 20th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="20/05/2014">
				<h2>Event title here</h2>
				<em>May 20th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="09/07/2014">
				<h2>Event title here</h2>
				<em>July 9th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="30/08/2014">
				<h2>Event title here</h2>
				<em>August 30th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="15/09/2014">
				<h2>Event title here</h2>
				<em>September 15th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="01/11/2014">
				<h2>Event title here</h2>
				<em>November 1st, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="10/12/2014">
				<h2>Event title here</h2>
				<em>December 10th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="19/01/2015">
				<h2>Event title here</h2>
				<em>January 19th, 2015</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>

			<li data-date="03/03/2015">
				<h2>Event title here</h2>
				<em>March 3rd, 2015</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>
		</ol>
	</div> 
</section>;
  }
}

export default HorizontalTimeline;
