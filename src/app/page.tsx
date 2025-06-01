import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
