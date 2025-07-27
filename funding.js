const fundingData = [
  {
    image: "/seed-fundingjpgz41ywtsg.jpg",
    title: "Startup India Seed Fund",
    category: "Government Scheme",
    description: "Provides financial assistance to startups for proof of concept, prototype development, and market entry.",
    eligibility: "Registered startups under Startup India initiative.",
    link: "https://www.startupindia.gov.in/content/sih/en/startup-scheme.html"
  },
  {
    image: "/AngelInvestor.png",
    title: "Angel Investors Network",
    category: "Investor Group",
    description: "Connects startups with angel investors for early-stage funding and mentorship.",
    eligibility: "Innovative startups with scalable business models.",
    link: "https://www.angelnetwork.com"
  },
  {
    image: "/msme-schemes-1024x576.jpg",
    title: "MSME Development Fund",
    category: "Government Scheme",
    description: "Offers financial support to Micro, Small and Medium Enterprises for growth and expansion.",
    eligibility: "Registered MSMEs with valid Udyam Registration.",
    link: "https://msme.gov.in"
  },
  {
    image: "/Venture.webp",
    title: "Venture Capital Fund",
    category: "Investor Group",
    description: "Provides equity funding to startups with high growth potential.",
    eligibility: "Startups with validated product-market fit.",
    link: "https://www.vcfund.com"
  },
  {
    image: "/Incubation.jpeg",
    title: "Technology Incubation Scheme",
    category: "Government Scheme",
    description: "Supports startups in technology development and commercialization.",
    eligibility: "Tech startups with innovative solutions.",
    link: "https://www.incubation.gov.in"
  },
  {
    image: "/215economic-empowerment-of-msme-women-entrepreneurs-1.webp",
    title: "Women Entrepreneurs Fund",
    category: "Special Fund",
    description: "Dedicated fund to support women-led startups and enterprises.",
    eligibility: "Startups led by women entrepreneurs.",
    link: "https://www.womenfund.gov.in"
  }
];

function createFundingBox(funding) {
  const box = document.createElement('div');
  box.className = 'event-box';

  const img = document.createElement('img');
  img.src = funding.image;
  img.alt = funding.title;
  box.appendChild(img);

  const title = document.createElement('h3');
  title.className = 'event-title';
  title.textContent = funding.title;
  box.appendChild(title);

  const category = document.createElement('p');
  category.className = 'event-category';
  category.textContent = funding.category;
  box.appendChild(category);

  const description = document.createElement('p');
  description.className = 'event-description';
  description.textContent = funding.description;
  box.appendChild(description);

  const eligibility = document.createElement('p');
  eligibility.className = 'event-eligibility';
  eligibility.innerHTML = '<strong>Eligibility:</strong> ' + funding.eligibility;
  box.appendChild(eligibility);

  const link = document.createElement('a');
  link.href = funding.link;
  link.target = '_blank';
  link.className = 'details-btn';
  link.textContent = 'Learn More';
  box.appendChild(link);

  return box;
}

function renderFunding() {
  const container = document.querySelector('.funding-container');
  if (!container) return;

  fundingData.forEach(funding => {
    const box = createFundingBox(funding);
    container.appendChild(box);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFunding();

  const fundingForm = document.getElementById('fundingForm');
  const fundingList = document.getElementById('fundingList');
  const fundings = [];

  function renderFundingList() {
    fundingList.innerHTML = '';
    if (fundings.length === 0) {
      fundingList.textContent = 'No funding submissions yet.';
      return;
    }
    fundings.forEach((funding, index) => {
      const div = document.createElement('div');
      div.className = 'event-box';
      div.style.marginBottom = '1rem';

      const info = document.createElement('p');
      info.innerHTML = `<strong>Startup:</strong> ${funding.startupName} <br/>
                        <strong>Funder:</strong> ${funding.funderName} <br/>
                        <strong>Amount:</strong> ₹${funding.amount} <br/>
                        <strong>Comments:</strong> ${funding.comments || 'N/A'}`;
      div.appendChild(info);

      fundingList.appendChild(div);
    });
  }

  fundingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newFunding = {
      startupName: fundingForm.startupName.value.trim(),
      funderName: fundingForm.funderName.value.trim(),
      amount: fundingForm.amount.value.trim(),
      comments: fundingForm.comments.value.trim()
    };

    fundings.push(newFunding);
    renderFundingList();
    fundingForm.reset();
  });
});
