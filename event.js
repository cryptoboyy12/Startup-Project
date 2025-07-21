document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {
      image: '/startup mahakumbh.jpeg',
      date: 'Friday, Apr 4, 2025',
      title: '🚀 Startup Mahakumbh 2025',
      category: 'Startup',
      description: "India's Grand Innovation Confluence"
    },
    {
      image: '/DSC_3473 (1).jpg',
      date: 'Thursday, Jan 16, 2025',
      title: '🚀 Celebrating National Startup Day',
      category: 'Technology',
      description: 'On the occasion of National Startup Day'
    },
    {
      image: '/3rd.jpg',
      date: 'Friday, May 03, 2024',
      title: 'Technical Workshop of Incubation Center',
      category: 'Technology',
      description: 'The Incubation Center Interaction'
    },
    {
      image: '/pexels-skigh_tv-91087462-12111234.jpg',
      date: 'Thursday, September 12, 2024',
      title: 'GLOBAL BIO-INDIA - 2024',
      category: 'Bioscience',
      description: 'A seminar on modern education'
    },
    {
      image: '/5th.jpeg',
      date: 'October 4-5, 2023',
      title: "Bihar Innovation Challenge '23",
      category: 'Innovation',
      description: 'A challenge to foster innovation'
    },
    {
      image: '/6th.jpg',
      date: 'March 18-28, 2024',
      title: 'Startup Mahakumbh Bharat 2024',
      category: 'Startup',
      description: 'A grand startup event in India'
    }
  ];

  const container = document.querySelector('.events-container');
  container.innerHTML = '';

  events.forEach(event => {
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');

    eventBox.innerHTML = `
      <img src="${event.image}" alt="${event.title}" />
      <p class="event-date">${event.date}</p>
      <h3 class="event-title">${event.title}</h3>
      <p class="event-category">${event.category}</p>
      <p class="event-description">${event.description}</p>
      <button class="details-btn">More Details</button>
    `;

   
    const detailsBtn = eventBox.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => {
      alert("More details about: " + event.title);
    });

    container.appendChild(eventBox);
  });
});
