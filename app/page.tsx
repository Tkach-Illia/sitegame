import Letters from "./components/Letters";
import MovingComponent from "./components/MovingComponent";

export default function Home() {
  return (
    <div>
      <Letters time={0} />
      <MovingComponent />
    </div>
  )
}
