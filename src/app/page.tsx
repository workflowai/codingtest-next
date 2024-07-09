import { Comments } from "@/components/Comments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <div className="w-[700px] h-[500px] bg-gray-300 overflow-scroll">
          <Comments className="w-[900px] h-[700px]" />
        </div>
      </div>
    </main>
  );
}
