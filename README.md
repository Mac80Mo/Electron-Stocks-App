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
