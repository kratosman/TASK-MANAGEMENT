var tipsTime = {
    morning_coffee: 'Kickstart your day with a delightful brew of coffee to energize your morning.',
    noon_coffee: 'Indulge in a heavenly cup of coffee and experience a moment of pure bliss.',
    afternoon: "Treat yourself to a rejuvenating coffee break and embrace a burst of productivity.",
    afternoon_night: 'Unwind and relax with a tantalizing cup of coffee, a perfect companion for a serene evening.'
}

var remindersTime;
var counter = 0;
var maxSpeakCount = 2;

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
    counter++;

    if (counter >= maxSpeakCount) {
        clearInterval(remindersTime);
    }
}

function checkReminders() {
    var date = new Date();
    var dateHours = date.getHours();
    var dateMinutes = date.getMinutes();
    var period = dateHours >= 12 ? 'PM' : 'AM';
    
    
    const {morning_coffee, noon_coffee, afternoon, afternoon_night} = tipsTime;
    
    if (dateHours > 12) {
        dateHours = dateHours - 12;
    }
        

    if (dateHours === 8 && dateMinutes === 30 && period === 'AM') {
        createReminderFunc('8:30 AM', morning_coffee);
    } else if (dateHours === 12 && dateMinutes === 00 && period === 'PM') {
        createReminderFunc('12:00 PM', noon_coffee);
    } else if (dateHours === 3 && dateMinutes === 00 && period === 'PM') {
        createReminderFunc('3:00 AM', afternoon);
    } else if (dateHours === 6 && dateMinutes === 00 && period === 'PM'){
        createReminderFunc('6:00 AM', afternoon_night);
    } else if (dateMinutes >= 50) {
        clearInterval(remindersTime);
    }

}
checkReminders();

remindersTime = setInterval(checkReminders, 1000);
