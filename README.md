This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
### Usage:

```bash
pnpx create-next-app -e https://github.com/mrArpanM/next-starter-basic
```

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech Stack

- [Next.js](https://nextjs.org/) 13 App Directory
- Styling using [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) Primitives
- [shadcn UI](https://ui.shadcn.com/) Components
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Custom fonts with `next-font`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Notification

```jsx
import { notify } from '@/components/hooks/notify'

// ...

function App() {
  return (
    <div>
      <button onClick={() => notify("Notification Title", "This is Notification Body")}>
        Give me a notification
      </button>
    </div>
  );
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
