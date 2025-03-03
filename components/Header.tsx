import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex items-center justify-between px-4 py-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold tracking-wider">
            Task<span className="text-sky-500">Flow</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="secondary">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
