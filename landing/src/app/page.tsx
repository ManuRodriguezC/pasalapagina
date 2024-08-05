import Image from "next/image";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <Header />
      <Welcome />
    </main>
  );
}
