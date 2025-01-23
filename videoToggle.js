export function toggleVideoContainer(consentGiven) {
    const videoContainer = document.getElementById('video-container');
    const videoContainerBox = document.getElementById('video-container-box');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotMessagesGPT = document.getElementById('chatbot-messages-gpt');

    if (consentGiven) {
      videoContainer.style.display = 'none';
      videoContainerBox.style.display = 'none';
      chatbotMessages.style.display = 'block';
      chatbotMessagesGPT.style.display = 'block';
      
    } else {
      videoContainer.style.display = 'block';
      videoContainerBox.style.display = 'block';
      chatbotMessages.style.display = 'none';
      chatbotMessagesGPT.style.display = 'none';
      
    }
  }
