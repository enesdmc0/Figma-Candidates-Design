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
    <main className="bg-[url('./assets/img/bg.jpeg')] bg-no-repeat bg-center bg-cover min-h-screen w-screen">
      <div className="w-full h-full grid grid-cols-8 grid-rows-none md:grid-rows-3 p-5 gap-5">
        <Info className="h-full w-full col-span-8 md:col-span-5 md:row-span-1" />
        <HourlyForecast className="h-full w-full col-span-8 md:col-span-3 md:row-span-1" />
        <Menu className="h-full w-full bg-[#C4C3C166] rounded-2xl col-span-8 md:col-span-1 md:row-span-2 " />
        <Activities className="h-full w-full bg-[#C4C3C166] rounded-2xl col-span-8 md:col-span-4 md:row-span-1" />
        <Forecast24Hrs className="h-full w-full bg-[#C4C3C166] rounded-2xl col-span-8 md:col-span-4 md:row-span-1 md:col-start-2" />
        <AirConditions className="h-full w-full bg-[#C4C3C166] rounded-2xl col-span-8 md:col-span-3 row-span-2 md:col-start-6 md:row-start-2" />
      </div>
    </main>
  );
}

export default App;
