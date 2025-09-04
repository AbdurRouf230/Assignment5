// Initialize with English as the default language
let language = 'en';

// Translations for both languages
const TRANSLATIONS = {
  en: {
    siteName: 'Emergency Service Directory',
    heroTitle: 'Emergency Service Directory',
    heroSlogan: 'Your safety is our priority',
    ambulanceName: 'National Emergency',
    policeName: 'Police Helpline',
    fireServiceName: 'Fire Service',
    healthName: 'Health Quick Help',
  },
  bn: {
    siteName: 'জরুরি সেবা ডিরেক্টরি',
    heroTitle: 'জরুরি সেবা ডিরেক্টরি',
    heroSlogan: 'আপনার নিরাপত্তা আমাদের অগ্রাধিকার',
    ambulanceName: 'জাতীয় জরুরি সেবা',
    policeName: 'পুলিশ হেল্পলাইন',
    fireServiceName: 'আগুন সেবা',
    healthName: 'স্বাস্থ্য সহায়তা',
  },
};

// Update the language based on the selected language
function updateLanguage() {
  document.getElementById('site-name').textContent = TRANSLATIONS[language].siteName;
  document.getElementById('hero-title').textContent = TRANSLATIONS[language].heroTitle;
  document.getElementById('hero-slogan').textContent = TRANSLATIONS[language].heroSlogan;

  document.getElementById('ambulance-name').textContent = TRANSLATIONS[language].ambulanceName;
  document.getElementById('police-name').textContent = TRANSLATIONS[language].policeName;
  document.getElementById('fire-service-name').textContent = TRANSLATIONS[language].fireServiceName;
  document.getElementById('health-name').textContent = TRANSLATIONS[language].healthName;

  // Update language toggle button text
  document.getElementById('lang-toggle').textContent = language.toUpperCase();
}

// Toggle the language when the button is clicked
document.getElementById('lang-toggle').addEventListener('click', () => {
  language = language === 'en' ? 'bn' : 'en';  // Toggle between English and Bangla
  updateLanguage(); // Update content
});

// Initialize language on page load
updateLanguage();
