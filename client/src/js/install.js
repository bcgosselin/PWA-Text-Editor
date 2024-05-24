// Select buttonInstall element from html and assign to const
const butInstall = document.getElementById('buttonInstall');

// Store and show the install button for use
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.installPrompt = event;
  butInstall.classList.remove('hidden');
});

// Event listener for install button and install prompt function
butInstall.addEventListener('click', async () => {
  const promptEvent = window.installPrompt;
  if (!promptEvent) return;

  promptEvent.prompt();
  window.installPrompt = null;
  butInstall.classList.add('hidden');
});

// Reset the before installer prompt and hide button
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully', event);
  window.installPrompt = null;
});