import { useState, useEffect } from 'react';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Use useEffect to trigger the popup after the page loads (similar to "onLoad" behavior)
  useEffect(() => {
    // Your logic to handle when to display the popup initially
    // You might use local storage or cookies to avoid displaying it repeatedly
    // For simplicity, I'm setting it to show always initially.
    setShowPopup(true);
  }, []);

  return (
    <div className={`popup ${showPopup ? 'show' : ''}`}>
      <div className="popup-content">
        <span className="close" onClick={handleClosePopup}>&times;</span>
        <div className="base_cookie_banner--body--bCpFH">
          This website uses cookies, pixel tags, and local storage for performance, personalization, and marketing purposes. Our use of some cookies may be considered a sale, sharing for behavioral advertising, or targeted advertising. <br/>For more, see our <a rel="noopener" target="_blank" href="/privacy/">privacy policy</a>. <b>California Residents</b> can learn how personal information is <a href="/privacy/#ca-notice" rel="noopener" target="_blank">collected</a>, including how it is <a href="/privacy/#purpose" rel="noopener" target="_blank">used</a>, whether it is <a href="/privacy/#ca-notice" rel="noopener" target="_blank">“sold” or “shared”</a>, and how long it is <a href="/privacy/#retention" rel="noopener" target="_blank">retained</a>.
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;