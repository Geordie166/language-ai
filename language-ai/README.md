# Language AI - English-Spanish Learning with AI Conversation

An MVP language learning application that focuses on English-Spanish learning with a premium AI-powered voice conversation feature. This project is designed to be deployable on Vercel with minimal setup.

## Features

- **Interactive Lessons:** Learn Spanish through bite-sized, engaging lessons
- **Practice Exercises:** Reinforce your knowledge with interactive exercises
- **AI Conversation:** Premium feature that allows users to practice speaking with an AI conversation partner
- **Progress Tracking:** Monitor your learning journey with progress indicators
- **Mobile-First Design:** Fully responsive design that works on all devices

## Tech Stack

- **Frontend:** Next.js with React, TypeScript, and Tailwind CSS
- **Voice Processing:**
  - Speech-to-Text: OpenAI Whisper API (simulated in MVP)
  - Conversational AI: OpenAI GPT-4-turbo (simulated in MVP)
  - Text-to-Speech: Google Cloud Text-to-Speech (simulated in MVP)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/language-ai.git
   cd language-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
language-ai/
├── app/                     # Next.js app directory
│   ├── api/                 # API routes for backend functionality
│   ├── components/          # Reusable UI components
│   ├── contexts/            # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── styles/              # Global styles
│   ├── utils/               # Utility functions
│   ├── conversation/        # AI conversation feature
│   ├── lessons/             # Language lessons
│   ├── practice/            # Practice exercises
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── .eslintrc.json           # ESLint configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Deployment

This project is designed to be easily deployed on Vercel:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Deploy with default settings.

## Future Enhancements

- Additional languages beyond Spanish
- More advanced gamification elements
- Enhanced analytics and progress tracking
- Integration with real speech recognition and text-to-speech services
- User authentication and profile management

## License

This project is licensed under the MIT License - see the LICENSE file for details. 