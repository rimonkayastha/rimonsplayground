const aboutMeData = {
  text: `I'm a student passionate about technology, innovation, and solving real-world problems through code. I also love drawing digital art, graphic designing and making animations. I'm always excited to approach new ways and think of creative methods to fulfill any task or objective. Please feel free to explore my playground of works.`,
  github: "https://github.com/rimonkayastha",
  linkedin: "https://www.linkedin.com/in/rimonkayastha"
};

const mediaContent = [
  {
    title: "Mini-Documentary on Discrimination (My Part)",
    embedUrl: "https://drive.google.com/file/d/18Ezs9z085vBqt4ISJvv8MDQkWbV4C_4v/preview",
    description: "Project for a Discrimination Webinar when I was in 9th grade."
  },
  {
    title: "TikTok Video on Human Trafficking (60k views)",
    embedUrl: "https://www.tiktok.com/@detecfurious/video/7155847062691515674"
  },
  {
    title: "Kala Yatra Advertisement Video",
    embedUrl: "https://drive.google.com/file/d/1OYv-Laf0bRYNjMR473NpphB-j_NCyah6/preview",
    description: "Advertisement I made for our Interact Club event to support under-represented artists in Nepal."
  },
  {
    title: "Daily Battles of a Student (Comic)",
    embedUrl: "https://drive.google.com/file/d/1pkRL_ep4Zel53qx0cGtAUYWMKuZvfdmL/preview",
    description: "Comic contribution for a School Magazine in 10th grade."
  },
  {
    title: "A Day in my life - Video Reel",
    embedUrl: "https://drive.google.com/file/d/1AzL2SXSJypIT_EyQ-HJV7noQtE_NOgHK/preview",
    description: "Application Video for Incubate Nepal and Uunchai (REJECTED)"
  },
  {
    title: "Poster for my Student Council Campaign",
    embedUrl: "https://drive.google.com/file/d/1kPPH1xq4UNl-7PymkLrPBS__VuvQYQFO/preview",
    description: "Poster I designed for my campaign. I was elected with the highest votes."
  }
];

const projects = [
  {
    name: "Rock vs Paper Game",
    link: "https://github.com/rimonkayastha/Rock-vs-Paper-Fight-Game",
    embedUrl: "https://drive.google.com/file/d/1sHYf4_KveAljgTbBzzVghZxyHAF2HRBK/preview",
    description: "Python game with my own hand-drawn characters. Built with Pygame and PySimpleGUI."
  },
  {
    name: "Hyperglycemia Assistance Application (Computer IA)",
    link: "https://drive.google.com/file/d/1T1RT9QQelb7rBfTWD62YO18r751CgiN1/view?usp=sharing",
    embedUrl: "https://drive.google.com/file/d/1thAFgM8IXYel3wJzIPO5WsEObJCkYdC3/preview",
    description: "A tool I built to help my aunt manage her diabetes, submitted as part of my IBDP coursework."
  },
  {
    name: "Parkour Game",
    embedUrl: "https://drive.google.com/file/d/1OOhZAifSU_wJkutSVe4kM1mmFSWakV3f/preview",
    description: "My 8th grade parkour platformer game using pixel sprites and animations."
  }
];

function isTikTokVideo(url) {
  return url.includes("tiktok.com") && url.includes("/video/");
}

function loadAboutMe() {
  const aboutSection = document.getElementById('about-text');
  aboutSection.innerHTML = `
    <p>${aboutMeData.text}</p>
    <p>
      <a href="${aboutMeData.github}" target="_blank">GitHub</a> |
      <a href="${aboutMeData.linkedin}" target="_blank">LinkedIn</a>
    </p>
  `;
}

function loadMedia() {
  const mediaContainer = document.getElementById('media-container');
  mediaContent.forEach(item => {
    const div = document.createElement('div');
    div.className = 'media-item';

    let content = '';

    if (isTikTokVideo(item.embedUrl)) {
      const match = item.embedUrl.match(/video\/(\d+)/);
      const videoId = match ? match[1] : '';
      content = `
        <blockquote class="tiktok-embed"
          cite="${item.embedUrl}"
          data-video-id="${videoId}"
          style="max-width: 605px; min-width: 325px;">
          <section></section>
        </blockquote>
      `;
    } else {
      content = `<iframe src="${item.embedUrl}" frameborder="0" allowfullscreen></iframe>`;
    }

    div.innerHTML = `
      <h3>${item.title}</h3>
      ${content}
      ${item.description ? `<p class="description">${item.description}</p>` : ""}
    `;
    mediaContainer.appendChild(div);
  });

  if (typeof window.tiktokEmbed !== 'undefined') {
    window.tiktokEmbed.init();
  }
}

function loadProjects() {
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-item';

    div.innerHTML = `
      <h3>${project.name}</h3>
      ${project.link ? `<a href="${project.link}" target="_blank">${project.link}</a>` : ""}
      ${project.embedUrl ? `<iframe src="${project.embedUrl}" frameborder="0" allowfullscreen></iframe>` : ""}
      ${project.description ? `<p class="description">${project.description}</p>` : ""}
    `;
    projectsContainer.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadAboutMe();
  loadMedia();
  loadProjects();
});

