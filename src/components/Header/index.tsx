import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session, status } = useSession();
  return (
    <nav className="navbar absolute top-0 left-0 bg-base-100">
      <div className="container mx-auto">
        <div className="flex-1 text-primary">
          <span className="btn btn-ghost text-xl normal-case">
            <Link href="/">Create Ponti App</Link>
          </span>
        </div>
        {status !== "loading" && (
          <div className="flex-none gap-2">
            <ul className="menu menu-horizontal p-0">
              <li>
                {!session?.user ? (
                  <button className="btn" onClick={() => signIn("google")}>
                    Sign In
                  </button>
                ) : (
                  <Link data-testid="accountLink" href="/account">
                    My Account
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
