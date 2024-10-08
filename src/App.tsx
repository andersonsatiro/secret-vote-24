import { GlobalFooter } from "./components/GlobalFooter"
import { GlobalHeader } from "./components/GlobalHeader"
import { MainHomeTitles } from "./components/MainHomeTitles"

export function App() {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen bg-white100">
      <GlobalHeader navIsActive={true} />

      <main className="flex-grow flex flex-col items-center justify-start pt-24">
        <MainHomeTitles />
      </main>
      
      <GlobalFooter />
    </div>
  )
}