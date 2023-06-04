var tipsTime = {
    morning_coffee: 'Enjoy a refreshing cup of coffee to fuel your morning.',
    noon_coffee: 'Take a moment to relax and savor another delicious cup of coffee.',
    afternoon: "It's time for a well-deserved coffee break to boost your energy.",
    afternoon_night: 'Wind down your day with a soothing cup of coffee.'
}

const date = new Date();
const dateHours = date.getHours();
const dateMinutes = date.getMinutes();
const period = dateHours >= 12 ? 'PM' : 'AM';


const {morning_coffee, noon_coffee, afternoon, afternoon_night} = tipsTime;

if (dateHours > 12) {
    dateHours = dateHours - 12;
}
    

function createReminderFunc(time, message) {
    var reminders = document.createElement('div');
    
    reminders.innerHTML += `<div class="reminders">
    <div class="reminders-content">
        <p>${time}: ${message}</p>
    </div>
</div>`;

    document.body.appendChild(reminders);

    var speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);

}

function checkReminders() {

    if (dateHours === 8 && dateMinutes === 30 && period === 'AM') {
        createReminderFunc('8:30 AM', morning_coffee);
        clearInterval(remindersTime);
    } else if (dateHours === 12 && dateMinutes === 00 && period === 'PM') {
        createReminderFunc('12:00 PM', noon_coffee);
        clearInterval(remindersTime);
    } else if (dateHours === 3 && dateMinutes === 00 && period === 'PM') {
        createReminderFunc('3:00 AM', afternoon);
        clearInterval(remindersTime);
    } else if (dateHours === 6 && dateMinutes === 00 && period === 'PM'){
        createReminderFunc('3:00 AM', afternoon_night);
        clearInterval(remindersTime);
    }

}
checkReminders();

var remindersTime = setInterval(checkReminders, 1000);
