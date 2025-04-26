import {
  Heart,
  Brain,
  Activity,
  Stethoscope,
  Thermometer,
  Bone,
  TreesIcon as Lungs,
} from "lucide-react";

export default function MerilLanding() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      {/* Background network effect */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
          <circle cx="10%" cy="70%" r="2" fill="rgba(255,255,255,0.6)" />
          <circle cx="30%" cy="50%" r="2" fill="rgba(255,255,255,0.6)" />
          <circle cx="50%" cy="80%" r="2" fill="rgba(255,255,255,0.6)" />
          <circle cx="70%" cy="40%" r="2" fill="rgba(255,255,255,0.6)" />
          <circle cx="90%" cy="60%" r="2" fill="rgba(255,255,255,0.6)" />
          <path
            d="M 10 70 Q 30 20, 50 80"
            stroke="rgba(255,255,255,0.4)"
            fill="none"
          />
          <path
            d="M 30 50 Q 60 30, 90 60"
            stroke="rgba(255,255,255,0.4)"
            fill="none"
          />
          <path
            d="M 50 80 Q 75 60, 90 60"
            stroke="rgba(255,255,255,0.4)"
            fill="none"
          />
          <path
            d="M 10 70 Q 40 90, 70 40"
            stroke="rgba(255,255,255,0.4)"
            fill="none"
          />
        </svg>
      </div>

      {/* Medical icons scattered around */}
      <div className="absolute top-[15%] left-[10%] opacity-20">
        <Bone className="h-16 w-16 text-teal-200" />
      </div>
      <div className="absolute top-[30%] right-[15%] opacity-20">
        <Brain className="h-16 w-16 text-teal-200" />
      </div>
      <div className="absolute bottom-[30%] left-[15%] opacity-20">
        <Heart className="h-16 w-16 text-teal-200" />
      </div>
      <div className="absolute top-[50%] left-[20%] opacity-20">
        <Stethoscope className="h-16 w-16 text-teal-200" />
      </div>
      <div className="absolute bottom-[40%] right-[10%] opacity-20">
        <Thermometer className="h-16 w-16 text-teal-200" />
      </div>
      <div className="absolute top-[60%] right-[20%] opacity-20">
        <Lungs className="h-16 w-16 text-teal-200" />
      </div>
      <div className="absolute bottom-[20%] left-[40%] opacity-20">
        <Activity className="h-16 w-16 text-teal-200" />
      </div>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-between">
        {/* Top section with logo */}
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-2 flex h-32 w-64 items-center justify-center rounded-md bg-blue-600/80 shadow-lg">
            <h1 className="text-6xl font-light text-white">Meril</h1>
          </div>
          <p className="mt-2 text-xl font-light tracking-wide text-white">
            More to Life
          </p>
        </div>

        {/* Middle section with main heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-7xl font-bold tracking-wider text-white md:text-8xl">
            M.GUIDE
          </h2>
          <div className="mt-4 h-1 w-64 bg-yellow-500"></div>
          <div className="mt-6 max-w-2xl px-6 text-center">
            <p className="text-2xl font-medium text-yellow-400 md:text-3xl">
              Meril&apos;s Comprehensive Overview
            </p>
            <p className="text-2xl font-medium text-yellow-400 md:text-3xl">
              of Essential Terminologies
            </p>
          </div>
        </div>

        {/* Bottom section with logo and banner */}
        <div className="relative w-full">
          <div className="absolute bottom-0 left-0 flex items-end">
            <div className="flex h-24 w-24 flex-col items-center justify-center bg-transparent pl-6 pb-6">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                <div className="ml-1 h-4 w-4 rounded-full bg-white"></div>
              </div>
              <div className="text-5xl font-bold text-white">ri</div>
            </div>
            <div className="h-12 w-full bg-yellow-400 py-2 pl-24 pr-4">
              <p className="text-2xl font-light text-gray-900">
                Research Empowering Individual
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
