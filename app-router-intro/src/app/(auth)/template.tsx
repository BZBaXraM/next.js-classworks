"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import "../globals.css";

export default function Template({ children }: { children: ReactNode }) {
    const [showValue, setShowValue] = useState<string>("");
    const setSomeValue = () => {
        setShowValue("Some value");
    };

    return (
        <div>
            <header className={"header"}>
                <nav className="nav">
                    <ul className={"nav_list"}>
                        <li className={"nav_item"}>
                            <Link href={"/login"}>Login</Link>
                        </li>
                        <br />
                        <li className={"nav_item"}>
                            <Link href={"/registration"}>Registration</Link>
                        </li>
                        <li className={"nav_item"}>
                            <Link href={"/forget-password"}>
                                Forget password
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <h2>showValue - {showValue}</h2>
            <button onClick={setSomeValue}>Setter</button>
            {children}
        </div>
    );
}
