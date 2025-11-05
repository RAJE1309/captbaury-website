const sitePhone = "+91 9920204079";
const phoneDisplay = document.getElementById('phoneDisplay');
if(phoneDisplay) phoneDisplay.innerHTML = `<a href="tel:${sitePhone.replace(/\s+/g,'')}">${sitePhone}</a>`;
const yearEl = document.getElementById('year'); 
if(yearEl) yearEl.textContent = new Date().getFullYear();
