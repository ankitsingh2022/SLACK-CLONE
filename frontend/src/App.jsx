import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const  app = () => {
  return  <header>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
};

export default  app