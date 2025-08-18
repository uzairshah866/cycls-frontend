# CYCLS TEST – Frontend Challenge

This project was built as part of the **Cycls Front-End Challenge**.  
The goal: implement a **polished, production-quality landing page** for [Cycls](https://cycls.com), showcasing the company’s vision and product in a single-page MVP.

---

## 📖 Challenge Description

Cycls is not a typical company — it’s a small, elite team working on foundational AI problems in Saudi Arabia.  
The challenge was to **transform the provided copy into a complete landing page** that is modern, intuitive, and aligned with the quality of top-tier product websites such as [fal.ai](https://fal.ai), [modal.com](https://modal.com), and [manus.im](https://manus.im).

### Requirements

- Build a **responsive, single-page landing page**.
- Use **React** with **shadcn/ui** as the component library.
- Focus on **usability, clarity, and polish** rather than over-engineering.
- Deliver via:

  - ✅ A **publicly deployed site** (Netlify).
  - ✅ A **public GitHub repo** with clean, documented code.

---

## 🚀 Features Implemented

The landing page includes the following **sections**, fully aligned with the brief:

1. **Hero Section** – Headline, subheadline, and CTA button.
2. **The Problem** – Highlights the gap between powerful AI agents and real businesses.
3. **How It Works** – 3-column layout showing the process: _Write Agent → Deploy Instantly → Monetize_.
4. **For Developers** – Emphasizes the developer-friendly SDK and zero-config philosophy.
5. **For Business & Enterprise** – Explains startup and enterprise benefits, with CTA.
6. **Final CTA** – Encourages users to get started.

Each section is built as a **separate React component** for maintainability.

---

## 🛠️ Tech Stack

- **React + Vite** – Modern frontend framework.
- **TypeScript** – Strong typing for maintainability.
- **shadcn/ui** – Component library with TailwindCSS for styling.
- **TailwindCSS** – Utility-first CSS for responsive design.
- **Netlify** – Deployment platform.

---

## 📂 Project Structure

src/
├── components/
│ ├── ui/ # shadcn/ui components
│ ├── Hero.tsx
│ ├── Problem.tsx
│ ├── HowItWorks.tsx
│ ├── Developers.tsx
│ ├── Business.tsx
│ ├── FinalCTA.tsx
│ └── Footer.tsx
├── App.tsx # Combines all sections
└── main.tsx # Entry point

---

## 🎨 Design Decisions

- **Minimal, high-confidence layout** inspired by top AI SaaS landing pages.
- **Custom scrollbar** styled according to the theme (dark/light).
- **Card-based UI** for structured content in "How It Works" and feature sections.
- **Responsive grid** for mobile → desktop smooth scaling.
- **Separation of concerns**: each section is modular and reusable.

---

## ⚡ Getting Started

Clone and install dependencies:

git clone https://github.com/uzairshah866/cycls-test.git
cd cycls-test

Make sure you’re using **Node.js 22** (recommended). If you have **nvm** installed:

nvm use 22

Install dependencies:

npm install

Run locally:

npm run dev

Build for production:

npm run build

---

## 🌍 Deployment

This project is deployed on **Netlify**:
👉 [Live Demo Link](https://cycls-test-frontend.netlify.app/)

---

## ✨ Deliverables

- ✅ **Deployed Landing Page** – production-ready, responsive, and polished.
- ✅ **Source Code** – clean, modular, and documented.

---

## 👨‍💻 Author

Developed by **Uzair Shah** as part of the **Cycls Front-End Challenge**.
