export function toggleVideoContainer(consentGiven) {
    const videoContainer = document.getElementById('video-container');
    const videoContainerBox = document.getElementById('video-container-box');

    if (consentGiven) {
      videoContainer.style.display = 'none';
      videoContainerBox.style.display = 'none';
      
    } else {
      videoContainer.style.display = 'block';
      videoContainerBox.style.display = 'block';
      
    }
  }
