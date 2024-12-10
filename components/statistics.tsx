import { Users, GraduationCap } from "lucide-react";

const stats = [
  {
    title: "Active Students",
    value: "500+",
    icon: Users,
  },
  {
    title: "Expert Coaches",
    value: "20+",
    icon: GraduationCap,
  },
];

export function Statistics() {
  return (
    <section className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl font-extrabold text-white tracking-tight sm:text-5xl mb-10">
          Our Achievements
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-md border border-gray-700 bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="mt-1 text-sm text-gray-400">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
