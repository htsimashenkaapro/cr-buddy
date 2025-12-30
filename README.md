# Care Buddy Angular

This is an Angular conversion of the Care Buddy React application. Care Buddy is a healthcare matching platform that connects care seekers with qualified healthcare professionals.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add required assets:
   - Place logo image as `src/assets/logo.png`
   - Place burst background as `src/assets/burst-background.png`
   - Place step images as `src/assets/first-block.png`, `src/assets/second-block.png`, `src/assets/third-block.png`

### Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/          # Navigation bar component
│   │   ├── hero/                # Hero section component
│   │   ├── stats/               # Statistics component
│   │   ├── wat-is-het/          # "What is it?" section
│   │   ├── hoe-werkt-het/       # "How it works?" section
│   │   ├── waar-aan/            # "For whom?" section
│   │   ├── transparantie/       # Protection/transparency section
│   │   ├── faq/                 # FAQ section
│   │   ├── footer/              # Footer component
│   │   └── shared/
│   │       └── dotted-background/  # Reusable background component
│   ├── services/
│   │   └── language.service.ts  # i18n service (NL/EN)
│   ├── app.component.ts         # Main app component
│   └── app.routes.ts            # Routing configuration
├── assets/                      # Static assets (images, etc.)
├── styles.css                   # Global styles
└── index.html                   # Main HTML file
```

## 🌐 Features

- **Bilingual Support**: Dutch (NL) and English (EN)
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern UI**: Comic-style design with vibrant colors
- **Standalone Components**: Uses Angular's new standalone component architecture
- **Tailwind CSS**: Utility-first CSS framework

## 🎨 Tech Stack

- **Angular 17**: Latest Angular with standalone components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **RxJS**: Reactive programming

## 📝 Key Components

### Navigation
Fixed navigation bar with language switcher and smooth scrolling to sections.

### Hero
Landing section with logo, tagline, and call-to-action buttons.

### Stats
Animated statistics display showing platform metrics.

### Wat Is Het (What is it?)
Information cards explaining the platform's purpose.

### Hoe Werkt Het (How it works?)
Three-step process explanation with visual cards.

### Waar Aan (For whom?)
Target audience breakdown (care seekers, organizations, care providers).

### Transparantie (100% Protected)
Security and privacy features (verification, GDPR, liability).

### FAQ
Accordion-style frequently asked questions.

### Footer
Contact and policy links.

## 🔧 Configuration

### Tailwind CSS
Configured in `tailwind.config.js` with custom color scheme and design tokens.

### TypeScript
Configured in `tsconfig.json` with strict mode enabled.

### Angular
Configured in `angular.json` for build and serve options.

## 🌍 Internationalization

The language service (`language.service.ts`) handles translations between Dutch and English. Language preference is stored in localStorage.

To add more translations:
1. Edit `src/app/services/language.service.ts`
2. Add new keys to the `translations` object

## 📄 Notes

- Make sure to add the required image assets to the `src/assets` folder
- The application uses local storage to persist language preferences
- All components are standalone and don't require NgModule

## 🤝 Contributing

This is a converted project from React to Angular. The original React components have been transformed into Angular standalone components while maintaining the same functionality and design.

## 📜 License

[Add your license information here]








