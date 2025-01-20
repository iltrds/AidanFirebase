import { auth } from '../firebaseConfig.js';
import { signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// We give this to you to save time because the logic resembles other workshop content 
document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('logout-button').addEventListener('click', async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('userEmail');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Error signing out:', error);
        }
    });
});