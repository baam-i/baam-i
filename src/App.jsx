import Header from "./components/Header"
import Hero from "./components/Hero"
import gradient from "../public/gradient.png";

export default function App() {
  return (
    <main>
      {/*Gradient image*/}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src={gradient}
        alt="Gradient-img"
      />

      {/*Blur effect*/}
      <div className="absolute -z-10 right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#f55f14] opacity-30 blur-[180px]" />

      <Header/>
      <Hero/>
    </main>
  )
}