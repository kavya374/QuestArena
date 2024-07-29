document.addEventListener('DOMContentLoaded', () => {
  // Create a single Intersection Observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  // Select elements to observe
  const elementsToObserve = document.querySelectorAll('.hidden');
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
});


const images = [
  {
    base: 'https://i.pinimg.com/236x/be/d8/e2/bed8e2f763d757fb0c9d74958d4fd10d.jpg',
    top: './img/characters/siren.png',
    title: 'SIREN',
    subtitle: 'Echoes of ancient secrets'
  },
  {
    base: 'https://i.pinimg.com/originals/f3/94/e5/f394e5de14b0171f71681bfc1f69ed45.png',
    top: './img/characters/ember.png',
    title: 'EMBER',
    subtitle: 'Rebirth from the ashes'
  },
    {
    base: 'https://i.pinimg.com/originals/06/3e/96/063e961c94654c746e7af15de738c4b0.jpg',
    top: './img/characters/witch.png',
    title: 'WITCH',
    subtitle: 'Curse you to death'
  },
  {
    base:'https://i.pinimg.com/474x/b7/93/09/b79309eb5b349bcc0186c0bc578ab79e.jpg',
    top:'./img/characters/warrior.png',
    title: 'WARRIOR',
    subtitle: 'Blade of the Rebellion'
  }
  
];

const container = document.getElementById('wix');

images.forEach(image => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('container'); // Changed class to 'container'

  const base = document.createElement('img');
  base.classList.add('base');
  base.src = image.base;

  const tpWrapper = document.createElement('div');
  tpWrapper.classList.add('tp-wrapper');

  const top = document.createElement('img');
  top.classList.add('top');
  top.src = image.top;

  tpWrapper.appendChild(top);

  const para = document.createElement('div');
  para.classList.add('para');

  const h = document.createElement('p');
  h.classList.add('h');
  h.textContent = image.title;

  const small = document.createElement('p');
  small.classList.add('small');
  small.textContent = image.subtitle;

  para.appendChild(h);
  para.appendChild(small);

  imageContainer.appendChild(base);
  imageContainer.appendChild(tpWrapper);
  imageContainer.appendChild(para);

  container.appendChild(imageContainer); // Correctly appending imageContainer
});





/*****/


const image = [
  { 
    base: 'http://www.gamewallpapers.com/img_script/mobile_dir/img.php?src=wallpaper_smite_03.jpg&width=450&height=800&crop-to-fit',
    top: './img/games/smite.png',
    title: 'SMITE',
    subtitle: 'Battle of Gods'
  },
  {
    base: './img/games/base2.png',
    top: './img/games/lol.png',
    title: 'League of Legends',
    subtitle: 'Summon the Power Within'
  },
  {
    base: 'https://www.nawpic.com/media/2020/genshin-impact-nawpic-e1651958379427.jpeg',
    top: './img/games/genshin.png',
    title: 'Genshin Impact',
    subtitle: 'Uncover the Secrets'
  },
  {
    base: 'https://wallpapers.com/images/hd/phone-valorant-hero-skills-0oxsnm1a9uval14z.jpg',
    top: './img/games/valorant.png',
    title: 'VALORANT',
    subtitle: 'Echoes of the Battlefield'
  },
  {
    base: 'https://i.pinimg.com/236x/86/eb/4a/86eb4a10814231d543bf7adcb813ea1c.jpg',
    top: './img/games/paladins.png',
    title: 'Paladins',
    subtitle: 'Warlords of the Arena'
  },
  {
    base: 'https://cdn.mos.cms.futurecdn.net/EAPWcg9CsWj3UiikFwwLVX-970-80.jpg',
    top: './img/games/quake.png',
    title: 'Quake Champions',
    subtitle: 'Rise of the Titans'
  },
  {
    base: 'https://wallpapercave.com/wp/wp2441604.jpg',
    top: './img/games/fortnite.png',
    title: 'Fortnite',
    subtitle: '"Survive the Storm'
  }
];

const gallery = document.getElementById('scrollContainer');

image.forEach(image => {
  const card = document.createElement('div');
  card.classList.add('cardContainer');

  const baseImage = document.createElement('img');
  baseImage.classList.add('cardBase');
  baseImage.src = image.base;

  const overlay = document.createElement('div');
  overlay.classList.add('cardOverlay');

  const topImage = document.createElement('img');
  topImage.classList.add('cardTop');
  topImage.src = image.top;

  overlay.appendChild(topImage);

  const description = document.createElement('div');
  description.classList.add('cardDescription');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = image.title;

  const subtitle = document.createElement('p');
  subtitle.classList.add('subtitle');
  subtitle.textContent = image.subtitle;

  description.appendChild(title);
  description.appendChild(subtitle);

  card.appendChild(baseImage);
  card.appendChild(overlay);
  card.appendChild(description);

  gallery.appendChild(card);
});

/******************/
// Function to populate messages in a specified container
function populateMessages(containerId, messages) {
  const messagesContainer = document.getElementById(containerId);
  messagesContainer.innerHTML = ''; // Clear any existing messages

  messages.forEach(message => {
    const messageElement = document.createElement('a');
    messageElement.id = message.id;
    messageElement.href = message.link;
    messageElement.target = "_blank";
    messageElement.innerHTML = `
      <div class="msg" ${message.OWED ? 'OWED' : ''}>
        <div>${message.text}</div>
        ${message.authors}
      </div>
    `;
    messagesContainer.appendChild(messageElement);
  });
}

// Data for messages
const messages1 = [
  {
    id: 'THREAD',
    text: 'Valorant Summer Event',
    authors: 'Overview of event challenges',
    link: 'https://www.vlr.gg/events'
  },
  {
    id: 'QUEST',
    text: 'Summer Game Fest',
    authors: 'know your upcoming games',
    link: 'https://www.thegamer.com/tag/summer-game-fest/'
  },
   {
    id: 'AU',
    text: 'OtakuFest',
    authors: 'Get your ticket now!',
    link: 'https://otakufestph.com/'
  },
  {
    id: 'TECH',
    text: 'PlayStation Showcase',
    authors: 'glimpses of several new creations ',
    link: 'https://in.ign.com/marvels-wolverine/184243/news/sony-announces-playstation-showcase-for-next-week'
  }
];

const messages2 = [
  {
    id: 'THREAD',
    text: 'The First Descendant',
    authors: 'NEXON Games',
    link: 'https://www.ign.com/games/the-first-descendant'
  },
  {
    id: 'QUEST',
    text: 'Vampire Survivors',
    authors: 'Operation Guns',
    link: 'https://www.ign.com/games/vampire-survivors-operation-guns'
  },
   {
    id: 'AU',
    text: 'OtakuFest',
    authors: 'Get your ticket now!',
    link: 'https://otakufestph.com/'
  },
  {
    id: 'TECH',
    text: 'Game of Thrones',
    authors: 'get started now! ',
    link: 'https://www.ign.com/games/game-of-thrones-legends'
  }
];


const messages3 = [
  {
    id: 'THREAD',
    text: 'One Piece',
    authors: 'egghead arc',
    link: 'https://www.ign.com/games/the-first-descendant'
  },
  {
    id: 'QUEST',
    text: 'My Hero Academia',
    authors: 'season 7',
    link: 'https://www.ign.com/games/vampire-survivors-operation-guns'
  },
   {
    id: 'AU',
    text: 'Tower of God',
    authors: 'season 2',
    link: 'https://otakufestph.com/'
  },
  {
    id: 'TECH',
    text: 'Twilight Out of Focus',
    authors: 'boys love',
    link: 'https://www.ign.com/games/game-of-thrones-legends'
  }
];
// Call the function to populate messages in both containers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  populateMessages('messages-container-1', messages1);
  populateMessages('messages-container-2', messages2);
  populateMessages('messages-container-3', messages3);
});
