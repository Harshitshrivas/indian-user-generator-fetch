
document.addEventListener('DOMContentLoaded', function() {
    const userCard = document.getElementById('userCard');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const getUserBtn = document.getElementById('getUserBtn');
    
   
    const userPhoto = document.getElementById('userPhoto');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userGender = document.getElementById('userGender');
    const userAge = document.getElementById('userAge');
    const userLocation = document.getElementById('userLocation');
    
    
    fetchIndianUser();
    getUserBtn.addEventListener('click', fetchIndianUser);
    
    function fetchIndianUser() {
       
        loading.style.display = 'flex';
        userCard.style.display = 'none';
        error.style.display = 'none';
        
        fetch('https://randomuser.me/api/?nat=IN')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                loading.style.display = 'none';
                userCard.style.display = 'block';
                
               
                const user = data.results[0];
                
                userPhoto.src = user.picture.large;
                userPhoto.alt = `${user.name.first} ${user.name.last}`;
                userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
                userEmail.textContent = user.email;
                userGender.textContent = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
                userAge.textContent = `${user.dob.age} years`;
                userLocation.textContent = `${user.location.city}, ${user.location.state}`;
            })
            .catch(err => {
                loading.style.display = 'none';
                error.style.display = 'block';
                error.textContent = `Error: ${err.message}. Please try again.`;
                console.error('Error fetching user:', err);
            });
    }
});