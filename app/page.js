import Gallery from "@/components/Gallery";
import Tabs from "@/components/Tabs";

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row gap-8 p-8 w-full">
      <div className="hidden md:flex flex-1" />

      <div className="flex flex-col flex-1 gap-6">
        <Tabs />
        <Gallery />
      </div>
    </main>
  );
}
