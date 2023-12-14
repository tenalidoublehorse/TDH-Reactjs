import React, { Component } from 'react';
import $ from 'jquery';

class TimelineComponent extends Component {
  componentDidMount() {
    // This function will be executed when the component is mounted in the DOM.
    // It's equivalent to $(document).ready() in jQuery.

    var timelines = $('.cd-horizontal-timeline');
    var eventsMinDistance = 60;

    // Check if there are any elements with class 'cd-horizontal-timeline' and initialize them.
    if (timelines.length > 0) {
      initTimeline(timelines);
    }

    function initTimeline(timelines) {
      timelines.each(function () {
        var timeline = $(this);
        var timelineComponents = {};

        // Cache various components of the timeline for performance.
        timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
        timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
        timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
        timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
        timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
        timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
        timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
        timelineComponents['eventsContent'] = timeline.children('.events-content');

        // Set left positions for events along the timeline.
        setDatePosition(timelineComponents, eventsMinDistance);

        // Calculate and set the width of the timeline.
        var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);

        // Mark the timeline as loaded.
        timeline.addClass('loaded');

        // Event listener for clicking the 'Next' arrow.
        timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
          event.preventDefault();
          updateSlide(timelineComponents, timelineTotWidth, 'next');
        });

        // Event listener for clicking the 'Prev' arrow.
        timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
          event.preventDefault();
          updateSlide(timelineComponents, timelineTotWidth, 'prev');
        });

        // Rest of your event listeners and functionality...

        // Keyboard navigation event listener.
        $(document).keyup(function (event) {
          if (event.which == '37' && elementInViewport(timeline.get(0))) {
            showNewContent(timelineComponents, timelineTotWidth, 'prev');
          } else if (event.which == '39' && elementInViewport(timeline.get(0))) {
            showNewContent(timelineComponents, timelineTotWidth, 'next');
          }
        });
      });
    }

    // Define the rest of your functions here...
  }

  componentWillUnmount() {
    // This function will be called when the component is unmounted.
    // You can clean up any resources or event listeners here if needed.
  }

  render() {
    return (
      <div>
       <section class="cd-horizontal-timeline">
	<div class="timeline">
		<div class="events-wrapper">
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

	<div class="events-content">
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
</section>
      </div>
    );
  }
}

export default TimelineComponent;
