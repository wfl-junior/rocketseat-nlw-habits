import { generateDatesFromYearBeginning } from "~/utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const summaryDates = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 7; // 18 weeks

const amountOfDaysToFill = Array.from(
  { length: minimumSummaryDatesSize - summaryDates.length },
  (_, index) => index + 1,
);

interface SummaryTableProps {}

export const SummaryTable: React.FC<SummaryTableProps> = () => (
  <div className="w-full flex gap-3">
    <div className="grid grid-rows-7 grid-flow-row gap-3">
      {weekDays.map(weekDay => (
        <div
          key={weekDay}
          className="text-zinc-400 text-xl w-10 aspect-square flex items-center justify-center font-bold"
        >
          {weekDay}
        </div>
      ))}
    </div>

    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {summaryDates.map(date => (
        <HabitDay
          key={date.toISOString()}
          amount={5}
          completed={Math.round(Math.random() * 5)}
        />
      ))}

      {amountOfDaysToFill.map(number => (
        <div
          key={number}
          className="aspect-square w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg cursor-not-allowed opacity-40"
        />
      ))}
    </div>
  </div>
);
