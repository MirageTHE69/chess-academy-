import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-15">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[700px] px-6 lg:px-12">
        {/* Content Section */}
        <div className="max-w-2xl space-y-6 text-center lg:text-left z-10">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-[600px] mx-auto lg:mx-0">
            {siteConfig.hero.description}
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <Button
              size="lg"
              variant="default"
              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
            >
              Start Learning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              View Programs
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 lg:mt-0 lg:ml-10 w-full max-w-2xl z-10">
          <Image
            src={siteConfig.hero.image}
            alt="Chess scene"
            width={1200}
            height={600}
            className="rounded-lg shadow-2xl object-cover"
            priority
          />
          {/* Decorative Blur */}
          <div className="absolute -inset-4 blur-lg bg-gradient-to-br from-gray-800 to-black opacity-50 rounded-lg"></div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-gray-900 to-black"></div>

      {/* Decorative Dots */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gray-700 blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gray-800 blur-3xl opacity-20"></div>
    </div>
  );
}
