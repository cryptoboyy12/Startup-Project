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
  const form = document.getElementById('startupForm');
  let editIndex = -1;

  function renderStartups() {
    container.innerHTML = '';
    startups.forEach((startup, index) => {
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

      // Edit button
      const editButton = document.createElement('button');
      editButton.classList.add('details-btn');
      editButton.textContent = 'Edit';
      editButton.style.marginRight = '10px';
      editButton.addEventListener('click', () => {
        editIndex = index;
        form.name.value = startup.name;
        form.founder.value = startup.founder;
        form.category.value = startup.category;
        form.description.value = startup.description;
        form.image.value = startup.image;
        form.querySelector('button[type="submit"]').textContent = 'Update Startup';
      });
      eventBox.appendChild(editButton);

      // Delete button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('details-btn');
      deleteButton.textContent = 'Delete';
      deleteButton.style.backgroundColor = '#e74c3c';
      deleteButton.addEventListener('click', () => {
        startups.splice(index, 1);
        if (editIndex === index) {
          editIndex = -1;
          form.reset();
          form.querySelector('button[type="submit"]').textContent = 'Add Startup';
        }
        renderStartups();
      });
      eventBox.appendChild(deleteButton);

      container.appendChild(eventBox);
    });
  }

  renderStartups();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const startupData = {
      name: form.name.value.trim(),
      founder: form.founder.value.trim(),
      category: form.category.value.trim(),
      description: form.description.value.trim(),
      image: form.image.value.trim()
    };

    if (editIndex === -1) {
      startups.push(startupData);
    } else {
      startups[editIndex] = startupData;
      editIndex = -1;
      form.querySelector('button[type="submit"]').textContent = 'Add Startup';
    }

    renderStartups();
    form.reset();
  });
});
