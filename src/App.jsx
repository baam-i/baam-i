import Header from "./components/Header"
import Hero from "./components/Hero"
import gradient from "./assets/gradient.png";

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
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#155b63] -rotate-[30deg] -z-10"></div>

      <Header/>
      <Hero/>
    </main>
  )
}