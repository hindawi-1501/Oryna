function filterProfiles() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let profiles = document.getElementById('profilesContainer').getElementsByClassName('profile-card');

    for (let i = 0; i < profiles.length; i++) {
        let text = profiles[i].innerText.toLowerCase();
        if (text.includes(input)) {
            profiles[i].style.display = '';
        } else {
            profiles[i].style.display = 'none';
        }
    }
}
