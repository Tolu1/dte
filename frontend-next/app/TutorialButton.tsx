import Link from "next/link"

function TutorialButton() {
  return (
    <Link href="#">
    <div className="flex justify-center items-center space-x-1">
      <img className="" alt="play" src="../images/play-circle.svg"/>
      <div className="text-sm text-white whitespace-nowrap">How it Works</div>
    </div>
    </Link>
  )
}

export default TutorialButton