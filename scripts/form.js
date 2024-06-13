const confirmBox = document.getElementById('password-confirmation');
const passwordBox = document.getElementById('password');

confirmBox.addEventListener('focusout', () => {
    if (passwordBox.value !== confirmBox.value) {
        document.getElementById('message').textContent = "Confirmation does not match original password!";
        passwordBox.focus();
    }
    else {
        document.getElementById('message').textContent = "";
    }
});