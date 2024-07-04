import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { ChevronRightIcon } from "lucide-react";
import {
  NodejsOriginalWordmark,
  AmazonwebservicesOriginalWordmark,
  FlutterOriginal,
  Html5Original,
  ReactOriginal,
  AndroidstudioOriginal,
  Css3Original,
  GitlabOriginal,
} from "devicons-react";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-screen w-full  items-center justify-center overflow-hidden rounded-lg bg-background ">
      <div className="flex flex-col gap-8 items-center p-5 sm:p-0">
        <h2 className="text-3xl lg:text-6xl text-center sm:text-start font-bold">
          We've really speed up our workflow
        </h2>
        <p className="text-sm opacity-80 sm:text-md text-center">
          <strong>We’ve just released a new update!</strong> Check out the all
          new dashboard view. Pages and now load faster <br />
          You can try us for free for 30 days.
          <br />
          <br />
          Join 4,000+ companies already growing
        </p>

        <div className="flex flex-col-reverse sm:flex-row items-stretch gap-4">
          <button className="p-2 px-6 border border-[#D0D5DD] text-center bg-background rounded-md font-bold flex items-center gap-2">
            <ChevronRightIcon />
            Start Learning Today
          </button>
          <button className="p-2 px-6 border border-[#BDB4FE]  bg-[#7F6EFC] text-white rounded-md font-bold flex items-center justify-center">
            Join Now
          </button>
        </div>
      </div>

      {/* Inner Circles */}

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      ></OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={300}
        duration={40}
        reverse
      >
        <GitlabOriginal size={38} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={300}
        duration={40}
        delay={10}
        reverse
      >
        <Css3Original size={38} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={400}
        duration={40}
        delay={30}
        reverse
      >
        <ReactOriginal size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={400}
        duration={40}
        reverse
      >
        <AmazonwebservicesOriginalWordmark size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={500}
        duration={40}
      >
        <NodejsOriginalWordmark size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={500}
        duration={40}
        delay={30}
      >
        <AndroidstudioOriginal size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={500}
        duration={40}
        delay={10}
      >
        <FlutterOriginal size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={600}
        duration={40}
      >
        <Html5Original size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={900}
        duration={40}
      ></OrbitingCircles>
    </div>
  );
}
