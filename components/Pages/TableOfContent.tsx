import {
  Heart,
  Activity,
  Stethoscope,
  Bone,
  Microscope,
  Ear,
  Syringe,
} from "lucide-react";

export default function TableOfContents() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between p-10">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-medium">
            Welcome to{" "}
            <span className="font-bold">
              Meril's Comprehensive Overview of Essential Terminologies
              (M.Guide)
            </span>{" "}
            - your essential reference for medical vocabulary. Designed
            especially for Merilians, this guide offers concise, one-line
            descriptions to enhance product knowledge. M.Guide simplifies
            complex concepts, connecting advanced innovations to better serve
            the healthcare community.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="flex-grow">
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">Vascular Intervention</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">2-12</span>
          </div>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">Cardiac Surgery</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">13-19</span>
          </div>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Bone className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">Orthopedics</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">20-30</span>
          </div>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">Endo-Surgery</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">31-42</span>
          </div>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Microscope className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">Diagnostics</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">43-51</span>
          </div>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Ear className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">ENT</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">52-62</span>
          </div>

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Syringe className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-medium">Trauma</span>
            <div className="mx-4 flex-grow border-b border-dotted border-gray-400"></div>
            <span className="text-2xl font-medium">63-65</span>
          </div>
        </div>

        {/* Footer */}
        <div className="relative mt-8 w-full">
          <div className="absolute bottom-0 left-0 flex items-end">
            <div className="flex h-24 w-24 flex-col items-center justify-center bg-blue-600 pl-6 pb-6">
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
