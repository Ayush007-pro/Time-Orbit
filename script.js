
const stopwatch = {
    time: 0,
    interval: null,
    laps: [], // Array to store lap times in milliseconds

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.time += 10;
                this.updateDisplay();
            }, 10);
        }
    },

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    },

    reset() {
        this.stop();
        this.time = 0;
        this.laps = [];
        this.updateDisplay();
        document.getElementById('lap-times').innerHTML = '';
    },

    lap() {
        if (this.interval) {
            const currentTime = this.time;
            this.laps.push(currentTime);
            this.updateLapTable();
        }
    },

    updateDisplay() {
        const minutes = Math.floor(this.time / 60000);
        const seconds = Math.floor((this.time % 60000) / 1000);
        const hundredths = Math.floor((this.time % 1000) / 10);
        document.getElementById('time').textContent = 
            `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(hundredths).padStart(2, '0')}`;
        const angle = (this.time / 1000) * 6;
        document.querySelector('.rotator').style.transform = `rotate(${angle}deg)`;
    },

    updateLapTable() {
        const lapTable = document.getElementById('lap-times');
        lapTable.innerHTML = ''; // Clear existing content

        // Create header row
        // const headerRow = document.createElement('tr');
        // headerRow.innerHTML = `
        //     <th>No of Lap</th>
        //     <th>Difference between each lap</th>
        //     <th>Overall time</th>
        // `;
        // lapTable.appendChild(headerRow);
    
        // Add lap rows in reverse order (newest first)
        for (let i = this.laps.length - 1; i >= 0; i--) {
            const lapNumber = i + 1; // Corrected line
            const overallTime = this.laps[i];
            const lapDifference = i === 0 ? overallTime : overallTime - this.laps[i - 1];
    
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${lapNumber}</td>
                <td>${this.formatTime(lapDifference)}</td>
                <td>${this.formatTime(overallTime)}</td>
            `;
            lapTable.appendChild(row);
        }
    },

    formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const hundredths = Math.floor((time % 1000) / 10);
        return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(hundredths).padStart(2, '0')}`;
    }
};

// Initialize display
stopwatch.updateDisplay();

// Event listeners for play and stop buttons
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');

if (play) {
    play.addEventListener('click', (e) => {
        e.preventDefault();
        stop.classList.remove('active');
        play.classList.add('active');
        stopwatch.start(); // Start the stopwatch
    });
}

if (stop) {
    stop.addEventListener('click', (e) => {
        e.preventDefault();
        play.classList.remove('active');
        stop.classList.add('active');
        stopwatch.stop(); // Stop the stopwatch
    });
}