export function toggleVideoContainer(consentGiven) {
    const videoContainer = document.getElementById('video-container');
    
    if (consentGiven) {
      videoContainer.style.display = 'none';
          
    } else {
      videoContainer.style.display = 'block';
         
    }
  }
