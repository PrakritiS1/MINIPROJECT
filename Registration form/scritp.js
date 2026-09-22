document.getElementById('registrationForm').addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    let isValid = true;
    
    // Get fields
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const contact= document.getElementById('contact');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Validate Username
    if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
    } else {
        clearError(username);
    }
    
    // Validate Email
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }
    
    // Validate Password
    if (password.value === '') {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError(password);
    }
    
    // Validate Confirm Password
    if (confirmPassword.value === '') {
        showError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }
    
    // Form is ready for submission
    if (isValid) {
        alert('Registration successful!');
        // Here you can execute backend API fetch calls.
        this.reset();
    }
});

function showError(inputElement, message) {
    const group = inputElement.parentElement;
    group.classList.add('error');
    const errorSpan = group.querySelector('.error-message');
    errorSpan.textContent = message;
}

function clearError(inputElement) {
    const group = inputElement.parentElement;
    group.classList.remove('error');
    const errorSpan = group.querySelector('.error-message');
    errorSpan.textContent = '';
}

function validateEmail(email) {
    
}

//
document.querySelectorAll('.input input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            clearError(this);
        }
    });5
});

//event deligator in whihc we justhave ti assign event listner to the arents it will automatically inherite all the argets because it is comlex to assign event listner to each target

const obj={
name:"rakriti",
roll:23,
function(){
    console.log(this.name);//to access the varuablee
}
}

class Students{
    getName(){
        console.log(this.name);
    }
    getRoll(){
        console.log(this.roll);
    }
}
let Students=new Students();
console.log(Students);


//use superkeyword to caall arent classhh