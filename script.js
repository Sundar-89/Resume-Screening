// scripts.js
function openPopup(profileId) {
  const modal = document.getElementById('profileModal');
  const profileDetails = document.getElementById('profileDetails');

  // Change the content of the modal based on the profile clicked
  if (profileId === 'profile1') {
    profileDetails.innerHTML = `
      <h2>Marketing Manager</h2>
      <p>John Doe is a seasoned marketing professional with 10 years of experience.</p>
    `;
  } else if (profileId === 'profile2') {
    profileDetails.innerHTML = `
      <h2>Marketing Strategist</h2>
      <p>Jane Smith has extensive experience in crafting innovative marketing strategies.</p>
    `;
  }
  // Add similar conditions for other profiles

  modal.style.display = "block";
}

function closePopup() {
  const modal = document.getElementById('profileModal');
  modal.style.display = "none";
}
// JavaScript Document