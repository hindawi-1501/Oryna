// 🔹 Filter profiles by text search
function filterProfiles() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const profiles = document.querySelectorAll('.profile-card');

  profiles.forEach(profile => {
    const text = profile.innerText.toLowerCase();
    profile.style.display = text.includes(searchInput) ? 'block' : 'none';
  });
}

// 🔹 Show profiles by category
function showCategory(category) {
  const profiles = document.querySelectorAll('.profile-card');
  const buttons = document.querySelectorAll('.category-btn');

  // Highlight selected button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  profiles.forEach(profile => {
    const profileCategory = profile.getAttribute('data-category');
    if (category === 'all' || category === profileCategory) {
      profile.classList.remove('hide');
    } else {
      profile.classList.add('hide');
    }
  });
}
