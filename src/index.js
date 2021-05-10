import './sass/main.scss';

const days =(time)=> pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours =(time)=> pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins =(time)=> pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs =(time)=> pad(Math.floor((time % (1000 * 60)) / 1000));

function pad(value) {
    return String(value).padStart(2, '0');
}

class CountdownTimer {

    constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this._intervalId = null;
    }

    start() {
        const trgtDate = this.targetDate.getTime();
        const timerWrapper = document.querySelector(this.selector);
        let daysEl = timerWrapper.querySelector('[data-value="days"]');
        let daysText = daysEl.nextElementSibling;
        let hoursEl = timerWrapper.querySelector('[data-value="hours"]');
        let hoursText = hoursEl.nextElementSibling;
        let minsEl = timerWrapper.querySelector('[data-value="mins"]');
        let minsText = minsEl.nextElementSibling;
        let secsEl = timerWrapper.querySelector('[data-value="secs"]');
        let secsText = secsEl.nextElementSibling;

        
        this._intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = trgtDate - currentTime;
            daysEl.textContent = days(deltaTime);
            hoursEl.textContent = hours(deltaTime);
            minsEl.textContent = mins(deltaTime);
            secsEl.textContent = secs(deltaTime);
            daysText.textContent = daysEl.textContent === '01' ? "DAY" : "DAYS";
            hoursText.textContent = hoursEl.textContent === '01' ? "HOUR" : "HOURS";
            minsText.textContent = minsEl.textContent === '01' ? "MINUTE" : "MINUTES";
            secsText.textContent = secsEl.textContent === '01' ? "SECOND" : "SECONDS";
        }, 1000);
        
    }

    stop() {
        clearInterval(this._intervalId);
    }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 15, 2021'),
})

timer.start();
//timer.stop();
