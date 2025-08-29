// Get today's date and birthday
const birthday = '02 Jul 2002 00:00:00 GMT+0800';
const birthDate = new Date(birthday);
const currDate = new Date();

// Grab required web elements by ID
const bdayElement = document.querySelector("#birthday");
const ageElement = document.querySelector("#age");

// Calculate age
const thisYearBirthDate = new Date(currDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
ageElement.innerHTML = currDate.getFullYear() - birthDate.getFullYear() - ((currDate.getTime() - thisYearBirthDate.getTime() >= 0) ? 0 : 1);

// Highlight if today is my birthday
if ((birthDate.getDate() == currDate.getDate()) && (birthDate.getMonth() == currDate.getMonth())) {
        bdayElement.classList.add("text-primary");
}
