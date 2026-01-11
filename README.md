# Aevum

Aevum is a personal memory assistant application built with React Native and Expo. It is designed to help users capture, organize, and revisit their personal memories while providing an intelligent conversational interface powered by generative AI.

## Features

*   **Personal Memory Bank**: Store and organize memories with titles, detailed descriptions, dates, and images.
*   **AI Assistant**: Integrated chat interface powered by Google's Generative AI to assist users and potentially interact with their stored context.
*   **Offline-First**: Built on WatermelonDB to ensure data is always accessible and performant, even without an internet connection.
*   **Fluid Navigation**: Swipe-based interface to seamlessly switch between the Assistant, Memory Feed, and Add Memory screens.
*   **Modern UI**: Styled with NativeWind (Tailwind CSS) for a clean and responsive design.

## Tech Stack

### Core Frameworks & Languages
*   **React Native**: Mobile development framework.
*   **Expo**: Platform for building universal React applications.
*   **TypeScript**: Static typing for improved code quality and maintainability.
*   **React**: UI library.

### Key Libraries & Modules
*   **@google/genai**: Integration with Google's Generative AI models.
*   **@nozbe/watermelondb**: High-performance, reactive, offline-first database.
*   **NativeWind**: Tailwind CSS styling for React Native.
*   **React Native Pager View**: Native view pager for sliding between screens.
*   **Lucide React Native**: Consistent and clean icon set.

## Project Structure

*   `pages/`: Main application screens (Assistant, Memory List, Add Memory).
*   `components/`: Reusable UI components (InputBar, NavBar, DbItem, etc.).
*   `src/db/`: Database configuration, schema definitions (Memories, ChatMessages), and controllers.
*   `src/assistant/`: Logic handling interactions with the AI model.
*   `assets/`: Fonts and images.
