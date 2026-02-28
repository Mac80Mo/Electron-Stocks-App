# Aktien App: Electron Grundlagen

Eine Desktop-Anwendung zur Verwaltung und Überwachung von Aktienkursen mit Echtzeit-Chartdarstellung und Benachrichtigungsfunktion.

## Features

- **Aktien-Datenbank** – Aktien mit Symbol und Name lokal speichern und durchsuchen
- **Kurscharts** – Tägliche Kursdaten als Liniendiagramm anzeigen (via Alpha Vantage API)
- **Benachrichtigungen** – Kursober- und -untergrenzen für Aktien festlegen und überwachen
- **System Tray** – App läuft im Hintergrund über das Tray-Icon weiter

## Technologien

| Technologie | Verwendung |
|---|---|
| [Electron](https://www.electronjs.org/) | Desktop-App-Framework |
| [Alpha Vantage API](https://www.alphavantage.co/) | Aktienkursdaten |
| [Chart.js](https://www.chartjs.org/) | Diagramm-Darstellung |
| [Bulma](https://bulma.io/) | CSS-Framework |
| [electron-db](https://github.com/nicholasgasior/electron-db) | Lokale JSON-Datenbank |
| [dotenv](https://github.com/motdotla/dotenv) | Verwaltung von Umgebungsvariablen |

## Voraussetzungen

- [Node.js](https://nodejs.org/) (inkl. npm)
- Ein [Alpha Vantage API-Key](https://www.alphavantage.co/support/#api-key)

## Installation

```bash
git clone https://github.com/Mac80Mo/Electron-Stocks-App.git
cd Electron-Stocks-App
npm install
```

Eine `.env`-Datei im Projektverzeichnis anlegen:

```
ALPHAVANTAGE_API_KEY=dein_api_key
```

## Starten

```bash
npm start
```

## Builden

```bash
npx electron-packager . --icon=assets/icon.ico --prune=true
```

## Autor

mac

---

# Stocks App: Electron Basics (English)

A desktop application for managing and monitoring stock prices with real-time chart display and notification functionality.

## Features

- **Stock Database** – Store and search stocks locally by symbol and name
- **Price Charts** – Display daily price data as line charts (via Alpha Vantage API)
- **Notifications** – Set upper and lower price limits for stocks and monitor them
- **System Tray** – App continues running in the background via the tray icon

## Technologies

| Technology | Usage |
|---|---|
| [Electron](https://www.electronjs.org/) | Desktop app framework |
| [Alpha Vantage API](https://www.alphavantage.co/) | Stock price data |
| [Chart.js](https://www.chartjs.org/) | Chart rendering |
| [Bulma](https://bulma.io/) | CSS framework |
| [electron-db](https://github.com/nicholasgasior/electron-db) | Local JSON database |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |

## Prerequisites

- [Node.js](https://nodejs.org/) (incl. npm)
- An [Alpha Vantage API key](https://www.alphavantage.co/support/#api-key)

## Installation

```bash
git clone https://github.com/Mac80Mo/Electron-Stocks-App.git
cd Electron-Stocks-App
npm install
```

Create a `.env` file in the project directory:

```
ALPHAVANTAGE_API_KEY=your_api_key
```

## Run

```bash
npm start
```

## Build

```bash
npx electron-packager . --icon=assets/icon.ico --prune=true
```

## Author

mac
