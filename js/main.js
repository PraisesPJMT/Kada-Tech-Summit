const navBar = document.querySelector('nav');
const header = document.querySelector('header');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');

menuOpen.addEventListener('click', () => {
  navBar.classList.toggle('show');
  menuClose.style.display = 'block';
  menuOpen.style.display = 'none';
  header.style.height = '100vh';
});

menuClose.addEventListener('click', () => {
  navBar.classList.toggle('show');
  menuClose.style.display = 'none';
  menuOpen.style.display = 'block';
  header.style.height = '70px';
});

// FEATURED SPEAKERS DYNAMIC INPUT
const speakersSection = document.querySelector('.featured-speakers');
const speakerCatalog = [
  {
    name: 'Rebecca Enonchong',
    photo: 'images/speaker-a.jpg',
    company: 'Founder, AppsTech',
    description: 'Enonchong, a Cameroonian national, is the founder '
            + 'and CEO of AppsTech, a Bethesda, Maryland-based global provider'
            + ' of enterprise application solutions. AppsTech, which was founded '
            + 'in 1999 now has clients in more than 40 countries on 3 continents. ',
  },
  {
    name: 'Ariel Camus',
    photo: 'images/speaker-b.jpg',
    company: 'Founder & CEO, Microverse',
    description: 'Ariel is an entrepreneur who has lived in San '
            + 'Francisco, Boston, Argentina, Spain, Vietnam, and Indonesia. '
            + 'He is currently the founder of Microverse, an online school '
            + 'for remote software developers with a mission to educate and '
            + 'connect 1 million people with remote jobs by 2030.',
  },
  {
    name: 'Olaoluwa Samuel-Biyi',
    photo: 'images/speaker-d.jpg',
    company: 'Co-founder, SureGifts',
    description: 'Olaoluwa Samuel-Biyi is Co-founder at SureGifts, a '
            + 'revolutionary online gifting platform looking to disrupt '
            + 'traditional gifting systems in Nigeria.',
  },
  {
    name: 'Nkemdilim Uwaje Begho',
    photo: 'images/speaker-c.jpg',
    company: 'Founder, Future Software Resources',
    description: 'Begho founded Future Software Resources Ltd, a website '
        + 'design & web-solution provider located in Lagos, Nigeria in 2008. '
        + 'The company also provides online marketing, Search Engine '
        + 'Optimization (SEO), and more',
  },
  {
    name: 'Clarisse Iribagize',
    photo: 'images/speaker-e.jpg',
    company: 'Founder, HeHe Ltd ',
    description: 'Iribagize is the founder of HeHe Limited, a Kigali-based '
            + 'mobile technologies company that develops ways for businesses to '
            + 'reach their customers and audiences in a timely and affordable manner. ',
  },
  {
    name: 'Simeon Ononobi',
    photo: 'images/speaker-f.jpg',
    company: 'Founder & CEO, SimplePay',
    description: 'Simeon Ononobi is Founder & CEO of SimplePay, an '
            + 'innovative payments platform that allows users with an e-mail address '
            + 'and a bank account to securely and conveniently send and receive '
            + 'payments online, just like PayPal.',
  },
];

function createSpeakerWrapper() {
  const speakerWrapper = document.createElement('div');
  speakerWrapper.className = 'speakers-wrapper flex';
  speakerCatalog.forEach((speaker) => {
    const speakerContainer = document.createElement('div');
    speakerContainer.className = 'speaker flex';
    speakerContainer.setAttribute('data-aos', 'zoom-in');
    speakerContainer.setAttribute('data-aos-duration', '1000');

    const speakerImageContainer = document.createElement('div');
    const speakerIcon = document.createElement('div');
    const speakerPhoto = document.createElement('img');
    speakerPhoto.src = `${speaker.photo}`;
    speakerPhoto.alt = `${speaker.name}`;
    speakerPhoto.className = 'speaker-image';
    speakerIcon.className = 'speaker-icon';
    speakerImageContainer.className = 'speaker-images';
    speakerImageContainer.appendChild(speakerIcon);
    speakerImageContainer.appendChild(speakerPhoto);

    const speakerContent = document.createElement('div');
    const speakerTitle = document.createElement('h3');
    const speakerCompany = document.createElement('p');
    const speakerDescription = document.createElement('p');
    speakerDescription.className = 'speaker-description primary-color';
    speakerDescription.innerHTML = `${speaker.description}`;
    speakerCompany.className = 'speaker-company secondary-color';
    speakerCompany.innerHTML = `${speaker.company}`;
    speakerTitle.className = 'speaker-title primary-color';
    speakerTitle.innerHTML = `${speaker.name}`;
    speakerContent.className = 'speaker-content';
    speakerContent.appendChild(speakerTitle);
    speakerContent.appendChild(speakerCompany);
    speakerContent.appendChild(speakerDescription);

    speakerContainer.appendChild(speakerImageContainer);
    speakerContainer.appendChild(speakerContent);

    speakerWrapper.appendChild(speakerContainer);
  });
  return speakerWrapper;
}

if (speakersSection) {
  speakersSection.appendChild(createSpeakerWrapper());
}
