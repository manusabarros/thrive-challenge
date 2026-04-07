This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Notes

### Tech Stack

All required technologies were used: Next.js (pages router), TypeScript, styled-components, Axios, and @tanstack/react-query v5. Additionally, I included lucide-react for icons.

### AI Usage

I used [v0](https://v0.app/) to generate an initial UI layout as a visual reference, since design is not my strong suit and starting from a blank canvas tends to slow me down. All logic, architecture decisions, and final implementation were written by me.

### What I Would Improve for Production

- **Pagination / filtering / sorting**, or an infinite scroll approach depending on UX needs. For large datasets rendered as tables, virtualization (e.g. [TanStack Virtual](https://tanstack.com/virtual/latest)) would be worth considering.
- **URL-linked state**: sync the active tab (and any filters) with query params so the view is shareable and survives a refresh.
- **Loading skeletons**: skeleton screens give a better perceived performance and are closer to what a real dashboard would have.
- **Error boundaries**: component-level error boundaries so a fetch failure in one tab doesn't break the entire page.
- **Image optimization**: properly configure the sizes prop on Next.js Image components to match the responsive grid breakpoints, improving layout performance and avoiding unnecessary image downloads.
- **Theming**: define a proper styled-components theme with design tokens for colors, typography, spacing, and breakpoints, rather than hardcoded values scattered across components.
- **Server-side data fetching**: since this API's data rarely changes, fetching it at the server level (via getStaticProps) would improve performance and reduce client-side waterfalls.
- **Testing**: unit tests and integration tests for the tab switching and data fetching behavior.
- **Accessibility**: proper ARIA roles for the tab component (role="tablist", role="tab", aria-selected, etc.) to make it screen reader friendly.
- **AGENTS.md**: document the project structure and conventions for any AI coding assistant working in the codebase.
