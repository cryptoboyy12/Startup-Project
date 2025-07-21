document.addEventListener('DOMContentLoaded', () => {
  const startups = [
    {
      name: "Preheal Innovations",
      founder: "Kumar Vikrant",
      category: "Health",
      description: "Making dreams a reality, every day.",
      image: "/Phereial.webp"
    },
    {
      name: "Maas Infosolutions",
      founder: "Satish Kumar",
      category: "Technology",
      description: "Empowering progress through innovative software solutions.",
      image: "/Maass.webp"
    },
    {
      name: "Kalambaz Writing Venture",
      founder: "DEEPAK KUMAR",
      category: "Art & Entertainment",
      description: "Empowering ideas, transforming industries.",
      image: "/Kalambaz.jpg"
    },
    {
      name: "Finace India",
      founder: "MANIT SINGH",
      category: "Finance",
      description: "WE MIND YOUR BUSINESS",
      image: "/Screenshot 2025-07-21 014227.png"
    },
    {
      name: "SKAS TECHNOLOGIES",
      founder: "Suraj Kumar",
      category: "E-comm",
      description: "Empowering startups, elevating success.",
      image: "/OIP.webp"
    },
    {
      name: "Progressix",
      founder: "Raj Kumar",
      category: "Edu-tech",
      description: "Believe in shaping future of learning with new edge techniques & solutions.",
      image: "/Progressix-Revolutionizing-Digital-Marketing-in-Patna.png"
    }
  ];

  const container = document.querySelector('.events-container');
  container.innerHTML = '';

  startups.forEach(startup => {
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');

    const img = document.createElement('img');
    img.src = startup.image;
    img.alt = startup.name;
    eventBox.appendChild(img);

    const founder = document.createElement('p');
    founder.classList.add('event-date');
    founder.textContent = `Founder: ${startup.founder}`;
    eventBox.appendChild(founder);

    const title = document.createElement('h3');
    title.classList.add('event-title');
    title.textContent = startup.name;
    eventBox.appendChild(title);

    const category = document.createElement('p');
    category.classList.add('event-category');
    category.textContent = startup.category;
    eventBox.appendChild(category);

    const description = document.createElement('p');
    description.classList.add('event-description');
    description.textContent = `"${startup.description}"`;
    eventBox.appendChild(description);

    const button = document.createElement('button');
    button.classList.add('details-btn');
    button.textContent = 'More Details';
    eventBox.appendChild(button);

    container.appendChild(eventBox);
  });
});
