// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }
// function openVideo(videoSrc) {
//     const modal = document.getElementById('videoModal');
//     const videoContainer = document.getElementById('videoContainer');
//     modal.style.display = 'flex';
  
//     // Clear any previous content
//     videoContainer.innerHTML = '';
  
//     if (videoSrc.includes('youtu')) {
//       // Embed YouTube video
//       const embedUrl = videoSrc.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0];
//       videoContainer.innerHTML = `
//         <iframe width="100%" height="400" src="${embedUrl}" 
//                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
//         </iframe>`;
//     } else {
//       // Embed local video
//       videoContainer.innerHTML = `
//         <video controls autoplay>
//           <source src="${videoSrc}" type="video/mp4">
//           Your browser does not support the video tag.
//         </video>`;
//     }
//   }
  
//   function closeVideo() {
//     const modal = document.getElementById('videoModal');
//     const videoContainer = document.getElementById('videoContainer');
//     modal.style.display = 'none';
//     videoContainer.innerHTML = ''; // Clear content when modal is closed
//   }
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openVideo(videoSrc) {
  const modal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("videoContainer");
  modal.style.display = "flex";

  // Clear any previous content
  videoContainer.innerHTML = "";

  if (videoSrc.includes("youtu")) {
    // Embed YouTube video
    const embedUrl = videoSrc.replace("youtu.be/", "www.youtube.com/embed/").split("?")[0];
    videoContainer.innerHTML = `
      <iframe
        width="100%"
        height="400"
        src="${embedUrl}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  } else {
    // Embed local video
    videoContainer.innerHTML = `
      <video controls autoplay>
        <source src="${videoSrc}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>`;
  }
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("videoContainer");
  modal.style.display = "none";
  videoContainer.innerHTML = ""; // Clear content when modal is closed
}
function openVideo(videoSrc) {
  const modal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("videoContainer");
  modal.style.display = "flex";
  
  videoContainer.innerHTML = ""; // Clear any previous content

  let embedUrl = videoSrc;

  // Convert YouTube Shorts URL to embed format
  if (videoSrc.includes("youtube.be/shorts") || videoSrc.includes("youtube.com/shorts")) {
      const videoId = videoSrc.split("/shorts/")[1].split("?")[0]; // Extract the video ID
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  videoContainer.innerHTML = `
      <iframe
          width="100%"
          height="400"
          src="${embedUrl}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>`;
}
