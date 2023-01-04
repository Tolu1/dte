import Button from "../components/Button"
import TutorialButton from "./TutorialButton"

function Hero() {
  return (
    <section id="hero" className="bg-green-rich flex flex-row">
      <div className="container flex flex-col reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold leading-snug text-white text-center md:text-5xl md:leading-snug md:text-left">
            Lets Dress Mother Earth in Green☘️
          </h1>
          <p className="max-w-md text-sm text-center text-disabled md:text-left">Dress The Earth, A donation dApp platform for charities concerned with climate change and environmental sustainability</p>
          <div className="flex flex-col items-center justify-start space-y-7 md:flex-row md:space-x-7 md:space-y-0">
            <Button label="Donate Today" href="/donate"/>
            <TutorialButton />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero