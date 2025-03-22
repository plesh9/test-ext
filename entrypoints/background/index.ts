export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  if (import.meta.env.MODE === 'development') {
    chrome.runtime.onInstalled.addListener(() => {
      chrome.tabs.query({}, (tabs) => {
        const tabIds = tabs.map(tab => tab.id!).filter(Boolean); 
        chrome.tabs.remove(tabIds);
      });

      chrome.tabs.create({ url: 'https://www.google.com' });
    });
  }
});

