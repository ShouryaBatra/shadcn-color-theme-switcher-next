# Shadcn Color Theme Switcher (Next.js)

A comprehensive implementation of a light/dark mode toggle and color theme switcher for Next.js applications using Tailwind CSS, Shadcn UI, and next-themes. This project provides a seamless theme-switching experience with 8 beautiful color themes and proper SSR support.

## Features

- **Light/Dark Mode Toggle:** Seamless switching between light and dark themes with system preference detection

- **8 Color Themes:** Choose from default, red, rose, orange, green, blue, yellow, and violet themes - default themes on the [shadcn ui website themes page](https://ui.shadcn.com/themes)

- **Next.js Optimized:** Full SSR support with proper hydration handling

- **Persistent Storage:** Theme preferences saved in localStorage

- **Component Showcase:** Extensive demo of 25+ shadcn components with live theme switching

## Demo

**[Live Demo: https://shadcn-color-theme-switcher-next.vercel.app/](https://shadcn-color-theme-switcher-next.vercel.app/)**

Experience the full theme switching functionality and see all 8 color themes in action!

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (18+) and npm/pnpm/yarn

- A Next.js project (App Router)

- Tailwind CSS configured

- Shadcn UI installed

### Quick Start

1.  **Clone the Repository**

```bash

git  clone  https://github.com/ShouryaBatra/shadcn-color-theme-switcher-next.git

cd  shadcn-color-theme-switcher-next

npm  install

npm  run  dev

```

2.  **Copy Required Files to Your Project**

Copy these essential files to integrate the theme system:

```bash

# Core theme system

src/components/theme-provider.tsx

src/components/mode-toggle.tsx

src/components/color-theme-toggle.tsx

src/app/globals.css  # Contains all OKLCH color definitions

```

3.  **Install Required Dependencies**

```bash

npm  install  next-themes  lucide-react

```

4.  **Update Your Root Layout**

Wrap your app with the theme provider:

```tsx
// src/app/layout.tsx

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Usage

### Basic Implementation

```tsx
import { ModeToggle } from "@/components/mode-toggle";

import { ColorThemeToggle } from "@/components/color-theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>My App</h1>

      <div className="flex gap-2">
        <ColorThemeToggle />

        <ModeToggle />
      </div>
    </header>
  );
}
```

### Using the Theme Hook

Access both mode and color theme state in your components:

```tsx
import { useTheme } from "@/components/theme-provider";

export function MyComponent() {
  const {
    theme,

    setTheme, // Next-themes mode (light/dark/system)

    colorTheme,

    setColorTheme, // Color theme (default/red/blue/etc)
  } = useTheme();

  return (
    <div>
      <p>Current mode: {theme}</p>

      <p>Current color theme: {colorTheme}</p>

      <button onClick={() => setColorTheme("blue")}>
        Switch to Blue Theme
      </button>
    </div>
  );
}
```

## Theme Customization

### Available Color Themes

The project includes 8 carefully crafted color themes using OKLCH color space:

- **Default** - Neutral zinc-based theme

- **Red** - Warm red tones

- **Rose** - Soft pink hues

- **Orange** - Vibrant orange palette

- **Green** - Natural green shades

- **Blue** - Cool blue tones

- **Yellow** - Bright yellow accents

- **Violet** - Rich purple colors

### Adding Custom Themes

1.  **Define CSS Variables** in `globals.css`:

```css
[data-theme="custom"] {
  --background: oklch(100% 0 0);

  --foreground: oklch(15% 0 0);

  --primary: oklch(60% 0.15 250);

  --primary-foreground: oklch(98% 0 0);

  /* Add all required variables */
}

.dark[data-theme="custom"] {
  --background: oklch(10% 0 0);

  --foreground: oklch(98% 0 0);

  /* Dark mode versions */
}
```

2.  **Update Color Theme Toggle**:

```tsx
const themes = [
  { name: "default", label: "Default" },

  { name: "custom", label: "Custom" },

  // ... other themes
];
```

### OKLCH Color Benefits

This project uses OKLCH color space for several advantages:

- **Perceptual uniformity** - Equal numeric changes appear equally different

- **Better contrast ratios** - More predictable accessibility compliance

- **Consistent lightness** - Colors at same L value appear equally bright

- **Future-proof** - Better browser support coming for wide-gamut displays

## Architecture

The theme system consists of three main components:

### 1. Theme Provider (`theme-provider.tsx`)

- Combines next-themes for mode switching with custom color theme logic

- Handles SSR hydration correctly

- Provides unified `useTheme()` hook

- Manages localStorage persistence

### 2. Mode Toggle (`mode-toggle.tsx`)

- Light/dark/system mode switching

- Elegant dropdown with icons

- Integrates with next-themes

### 3. Color Theme Toggle (`color-theme-toggle.tsx`)

- 8 color theme selection

- Visual color previews

- Responsive design

- Accessibility compliant

## Component Support

The theme system works seamlessly with all shadcn components:

**Navigation & Layout:** Breadcrumb, Menubar, Navigation Menu, Pagination, Sidebar

**Data Display:** Avatar, Badge, Card, Hover Card, Table, Tooltip

**Feedback:** Alert, Alert Dialog, Dialog, Popover, Toast, Skeleton

**Forms:** Button, Checkbox, Input, Label, Radio Group, Select, Switch, Textarea

**Data Visualization:** Charts (Bar, Line, Pie), Progress, Slider

**Advanced:** Calendar, Command, Scroll Area, Separator, Tabs

## Contributing

Contributions are welcome! Please feel free to:

- Report bugs

- Suggest new features

- Submit new color themes

- Improve documentation/readme

- Submit pull requests

  **Note:** We're working to get color theme switching added to the official shadcn ui documentation since they currently only document [dark/light mode toggling](https://ui.shadcn.com/docs/dark-mode) despite showcasing [color themes on their website](https://ui.shadcn.com/themes).

## Developer

**[Shourya Batra](https://github.com/ShouryaBatra)**

Passionate computer science student at Homestead High School, building beautiful and functional web experiences.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the amazing component library

- [Next.js](https://nextjs.org/) for the excellent React framework

- [next-themes](https://github.com/pacocoursey/next-themes) for theme switching utilities

- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ for the Next.js and Shadcn community
