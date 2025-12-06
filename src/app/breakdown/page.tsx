import AddBreakdown from "./AddBreakdown";
import ListBreakdown from "./ListBreakdown";

export default function BreakdownPage() {
  return (
    <section className="relative w-full bg-gray-100">
      <ListBreakdown />
      <AddBreakdown />
    </section>
  );
}
