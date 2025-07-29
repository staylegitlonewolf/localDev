// Remove ES6 imports and use global functions from other script files
// These functions are already available from the script tags in index.html

// Initialize the application
if (typeof startQuotes !== 'undefined') startQuotes();
if (typeof initLoading !== 'undefined') initLoading();
if (typeof setupThemeAndLogo !== 'undefined') setupThemeAndLogo(restorePortalContent, attachCardEvents);

// Functions are already exposed by script.js, no need to override them
// The enterPortal, loadShopContent, restorePortalContent functions are available globally 