import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="menu_list">
            <li className="nav_item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav_item">
              <Link href="/todos">Todos</Link>
            </li>
            <li className="nav_item">
              <Link href="/news">News</Link>
            </li>
            <li className="nav_item">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />;
    </>
  );
}
