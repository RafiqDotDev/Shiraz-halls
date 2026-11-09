import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PhoneIcon, SparklesIcon } from "./components/icons/Icons";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900 flex flex-col selection:bg-amber-400 selection:text-amber-950">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Concierge & Automated Booking Trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/923000000000?text=Hello%20Shiraz%20Hospitality,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20wedding%20hall."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-lg shadow-emerald-700/25 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Contact Shiraz Concierge on WhatsApp"
        >
          <span className="text-lg">💬</span>
          <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
            WhatsApp Concierge
          </span>
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
        </a>

        <Link
          to="/booking"
          className="group flex items-center gap-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-amber-950 text-xs font-bold px-4 py-2.5 rounded-full shadow-md shadow-amber-400/20 hover:scale-105 active:scale-95 transition-all"
        >
          <SparklesIcon className="w-4 h-4 text-amber-950" />
          <span className="hidden sm:inline uppercase tracking-wider">Automated Booking</span>
        </Link>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-32 pb-20 p-6 max-w-2xl mx-auto text-center">
      <h1 className="font-display text-4xl font-bold text-amber-900 mb-2">{message}</h1>
      <p className="text-sm text-zinc-600 mb-6">{details}</p>
      <Link
        to="/"
        className="inline-block px-6 py-2.5 rounded-xl bg-amber-400 text-amber-950 font-bold text-xs uppercase tracking-wider"
      >
        Return to Home
      </Link>
      {stack && (
        <pre className="mt-8 p-4 bg-zinc-100 rounded-xl text-left text-xs overflow-x-auto text-zinc-700">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
