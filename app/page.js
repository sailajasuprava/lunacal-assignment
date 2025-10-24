import Gallery from "@/components/Gallery";
import Tabs from "@/components/Tabs";

export default function Page() {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      {/* Left Half - Empty */}
      <div className="hidden md:flex flex-1 bg-transparent" />

      {/* Right Half - Tabs & Gallery stacked */}
      <div className="flex flex-col flex-1 gap-6 p-8 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <Tabs />
        </div>
        <div className="flex-1 overflow-hidden">
          <Gallery />
        </div>
      </div>
    </main>
  );
}
