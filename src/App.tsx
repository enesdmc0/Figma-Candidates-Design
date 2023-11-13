import {
  Info,
  HourlyForecast,
  Menu,
  Activities,
  Forecast24Hrs,
  AirConditions,
} from "./components";

function App() {
  return (
    <main className="bg-[url('./assets/img/bg.jpeg')] bg-no-repeat bg-center bg-cover h-screen w-screen">
      <div className="w-full h-full border border-red-300 grid grid-cols-8 grid-rows-3 p-5 gap-5">
        <Info className="h-full w-full bg-blue-400 col-span-5 row-span-1" />
        <HourlyForecast className="h-full w-full bg-green-500 col-span-3 row-span-1" />
        <Menu className="h-full w-full bg-[#C4C3C166] rounded-2xl col-span-1 row-span-2 " />
        <Activities className="h-full w-full bg-[#C4C3C166] rounded-2xl col-span-4 row-span-1" />
        <Forecast24Hrs className="h-full w-full bg-blue-200 col-span-4 row-span-1 col-start-2" />
        <AirConditions className="h-full w-full bg-yellow-900 col-span-3 row-span-2 col-start-6 row-start-2" />
      </div>
    </main>
  );
}

export default App;
