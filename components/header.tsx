import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="flex justify-between p-4 shadow-sm">
      <h1 className="text-3xl">App</h1>

      <div className="flex gap-2 items-center">
        <UserButton />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
