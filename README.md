### README.md

# TimeOrbit - A Modern Stopwatch

TimeOrbit is an elegant, interactive stopwatch built with HTML, CSS, and JavaScript. Featuring a rotating dot animation that orbits the timer, precise millisecond tracking, and a lap recording system, this project blends functionality with a visually appealing design.

## Features

- **Real-Time Tracking:** Displays time in minutes, seconds, and milliseconds with smooth updates every 10ms.
- **Rotating Orbit Animation:** A purple dot orbits the stopwatch, synchronized with the seconds for a dynamic effect.
- **Lap Functionality:** Record lap times and view both individual lap durations and overall time in a scrollable table.
- **Responsive Controls:** Start, stop, reset, and lap buttons with hover effects and intuitive icons.
- **Modern Design:** A circular stopwatch with a gradient background and subtle shadows for a premium feel.

## Demo

Try it live: [Link to live demo, if hosted]
Switch between starting, stopping, and recording laps to see the orbit in action!

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/timeorbit.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd timeorbit
   ```
3. **Open in Browser:**
   - Open `index.html` in a modern web browser to start using TimeOrbit.

No external dependencies are required—just a browser!

## File Structure

```
timeorbit/
│
├── index.html           # Main HTML file
├── style.css            # Styles for the stopwatch and lap table
├── script.js            # Stopwatch logic and animation
├── assets/              # Folder for assets
│   └── stopwatch-icon.png  # Favicon
└── README.md            # Project documentation
```

## Usage

- **Start:** Click the play button (▶️) to begin timing. The orbit dot will start rotating.
- **Stop:** Click the pause button (⏸️) to pause the timer.
- **Reset:** Click the stop button (⏹️) to reset the timer and clear all laps.
- **Lap:** Click the flag button (🏁) while the timer is running to record a lap. Lap details appear in the table below.

## Technologies Used

- **HTML5:** Structure for the stopwatch and lap table.
- **CSS3:** Styling with gradients, animations, and a circular layout.
- **JavaScript:** Core logic for timing, lap tracking, and orbit animation.
- **Google Material Symbols:** Icons for control buttons (play, pause, stop, lap).
- **Favicon:** Custom stopwatch icon for the browser tab.

## Screenshots

Stopwatch Running
![Stopwatch Running](/screenshots/screenshot-running.png)  

Lap Table
![Lap Table](/screenshots/screenshot-laps.png)

## How It Works

- **Timing Logic:** The stopwatch increments time by 10ms using `setInterval`. Minutes, seconds, and milliseconds are formatted and displayed.
- **Orbit Animation:** The dot’s rotation is tied to the time via CSS `transform: rotate()`, calculated as 6 degrees per second.
- **Lap System:** Lap times are stored in an array, with differences calculated between consecutive laps and displayed in a table.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Ideas for improvement:
- Add sound effects for start/stop/lap.
- Implement a dark/light mode toggle.
- Allow exporting lap data as CSV.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you wish.

## Acknowledgments

- Inspired by minimalist stopwatch designs and orbital animations.
- Thanks to Google Material Symbols for free, customizable icons.
