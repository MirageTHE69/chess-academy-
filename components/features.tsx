import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CastleIcon as ChessKnight, Trophy, Users, Brain } from "lucide-react";

const features = [
  {
    title: "Expert Coaching",
    description:
      "Learn from experienced chess masters and improve your game strategy.",
    icon: ChessKnight,
  },
  {
    title: "Regular Tournaments",
    description:
      "Participate in our weekly tournaments and test your skills against other players.",
    icon: Trophy,
  },
  {
    title: "Group Classes",
    description:
      "Join our group sessions to learn and practice with peers at your level.",
    icon: Users,
  },
  {
    title: "Mental Training",
    description:
      "Develop critical thinking and problem-solving skills that extend beyond chess.",
    icon: Brain,
  },
];

export function Features() {
  return (
    <section className="bg-black py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center px-6">
        <h2 className="font-bold text-4xl text-white leading-tight sm:text-5xl">
          Why Choose Chess Cott Street?
        </h2>
        <p className="max-w-[85%] text-gray-400 sm:text-lg sm:leading-7">
          Discover the benefits of learning chess with us and how it can enhance
          your cognitive abilities.
        </p>
      </div>
      <div className="mx-auto grid gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4 mt-16">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-gray-800 text-white border border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <feature.icon className="h-10 w-10 mb-4 text-gray-300" />
              <CardTitle className="text-xl font-semibold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
