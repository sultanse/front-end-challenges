import MagicNavigation from "./components/magic-navigation";
import NikeCard from "./components/nike-card";

function App() {
  return (
    <div className="w-screen min-h-screen bg-slate-900 text-white">
      <div className="mx-auto container w-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-4xl my-10 text-[#fefefe]">
            Challenges
          </h1>
          <div className="bg-black/10 p-10 rounded-3xl flex flex-row items-center justify-center">
            <MagicNavigation />
          </div>
          <div className="bg-black/10 p-10 rounded-3xl flex flex-row items-center justify-center">
            <div className="text-center">
              <NikeCard />
            </div>
          </div>
          <div className="bg-black/10 p-10 rounded-3xl flex flex-row items-center justify-center">
            <div className="text-center">coming soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
