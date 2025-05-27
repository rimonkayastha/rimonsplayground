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

    // Check for TikTok — show link instead of iframe
    const content = item.embedUrl.includes("tiktok.com")
      ? `<a href="${item.embedUrl}" target="_blank">Watch on TikTok</a>`
      : `<iframe src="${item.embedUrl}" frameborder="0" allowfullscreen></iframe>`;

    div.innerHTML = `
      <h3>${item.title}</h3>
      ${content}
      ${item.description ? `<p class="description">${item.description}</p>` : ""}
    `;
    mediaContainer.appendChild(div);
  });
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
