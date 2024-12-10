import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const topStudents = [
  {
    rank: 1,
    name: "Alice Johnson",
    rating: 2100,
    achievements: "National Master",
  },
  { rank: 2, name: "Bob Smith", rating: 2050, achievements: "FIDE Master" },
  {
    rank: 3,
    name: "Charlie Brown",
    rating: 1980,
    achievements: "State Champion",
  },
  { rank: 4, name: "Diana Lee", rating: 1950, achievements: "Junior Champion" },
  {
    rank: 5,
    name: "Ethan Davis",
    rating: 1920,
    achievements: "Rapid Tournament Winner",
  },
];

export function TopStudents() {
  return (
    <section className="bg-gray-900 py-12 md:py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Top Students
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md bg-gray-800">
          <Table>
            <TableCaption className="text-gray-400">
              Top 5 students at Chess Cott Street Academy
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-700">
                <TableHead className="w-[100px] text-gray-300">Rank</TableHead>
                <TableHead className="text-gray-300">Name</TableHead>
                <TableHead className="text-gray-300">Rating</TableHead>
                <TableHead className="text-gray-300 text-right">
                  Achievements
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topStudents.map((student) => (
                <TableRow
                  key={student.rank}
                  className="hover:bg-gray-700 transition-colors duration-150"
                >
                  <TableCell className="font-medium text-white">
                    {student.rank}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {student.name}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {student.rating}
                  </TableCell>
                  <TableCell className="text-gray-300 text-right">
                    {student.achievements}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
