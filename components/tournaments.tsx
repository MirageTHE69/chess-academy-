import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Tournaments() {
  return (
    <section className="bg-black py-12 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 mb-6">
            <Trophy className="h-12 w-12 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl mb-4">
            Our Tournaments
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl">
            We've organized over{" "}
            <span className="font-bold text-white">100+</span> tournaments,
            providing our students with real competitive experience and
            opportunities to shine.
          </p>

          {/* Button */}
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 border border-gray-600"
          >
            View Upcoming Tournaments
          </Button>
        </div>
      </div>
    </section>
  );
}
