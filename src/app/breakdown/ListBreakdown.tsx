import { supabase } from "../supabaseClient";
import Link from "next/link";

import Action from "@/app/breakdown/Action";

export default async function ListBreakdown() {
  const { data: incomes, error } = await supabase
    .from("income")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error", error);
    return;
  }
  const totalIncome = incomes.reduce(
    (acc, item) => acc + Number(item.property), // 문자열 → 숫자
    0
  );

  const { data: spendings, error: spendingError } = await supabase
    .from("spending")
    .select("*")
    .order("created_at", { ascending: false });

  if (spendingError) {
    console.log("error", spendingError);
    return;
  }
  const totalSpending = spendings.reduce(
    (acc, item) => acc + Number(item.property), // 문자열 → 숫자
    0
  );

  const { data: transfers, error: transferError } = await supabase
    .from("transfer")
    .select("*")
    .order("created_at", { ascending: false });

  if (transferError) {
    console.log("error", transferError);
    return;
  }

  const totalTransfer = transfers.reduce(
    (acc, item) => acc + Number(item.property), // 문자열 → 숫자
    0
  );

  const allEntries = [
    ...incomes.map((item) => ({ ...item, type: "income" })),
    ...spendings.map((item) => ({ ...item, type: "spending" })),
    ...transfers.map((item) => ({ ...item, type: "transfer" })),
  ];

  allEntries.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <div className="p-10">
      <p className="text-[24px]">내역</p>
      <p>날짜</p>
      <div className="border bg-white rounded-2xl">
        <ul className="flex justify-around border-b p-4">
          <li>
            <Link href={"/breakdown"}>
              <p>
                전체({incomes.length + spendings.length + transfers.length})
              </p>
              <p>{(totalIncome - totalSpending).toLocaleString()}원</p>
            </Link>
          </li>
          <li>
            <Link href="/breakdown/income">
              <p>수입({incomes.length})</p>
              <p className="text-blue-500">{totalIncome.toLocaleString()}원</p>
            </Link>
          </li>
          <li>
            <Link href={"/breakdown/spending"}>
              <p>지출({spendings.length})</p>
              <p className="text-red-500">{totalSpending.toLocaleString()}원</p>
            </Link>
          </li>
          <li>
            <Link href={"/breakdown/transfer"}>
              <p>이체({transfers.length})</p>
              <p className="text-black">{totalTransfer.toLocaleString()}원</p>
            </Link>
          </li>
        </ul>
        <div>
          <Action households={incomes} />
        </div>
        <div>
          <ul className="grid grid-cols-7 p-4 border-b">
            <input type="checkbox" />

            <li>날짜</li>
            <li>자산</li>
            <li>분류</li>
            <li>금액</li>
            <li>내용</li>
            <li>메모</li>
          </ul>
        </div>
        <div>
          {allEntries.map((item) => (
            <ul
              className="grid grid-cols-7 p-4"
              key={`${item.type}-${item.id}`}
            >
              <input type="checkbox" />
              <li>{item.date}</li>
              <li>{item.amount}</li>
              <li>{item.classification}</li>
              <li
                className={
                  item.type === "income"
                    ? "text-blue-500"
                    : item.type === "spending"
                    ? "text-red-500"
                    : "text-black"
                }
              >
                {Number(item.property).toLocaleString()}원
              </li>
              <li>{item.content}</li>
              <li>{item.memo}</li>
            </ul>
          ))}
          {/* {spendings.map((item) => (
            <ul className="grid grid-cols-7 p-4" key={item.id}>
              <input type="checkbox" />
              <li>{item.date}</li>
              <li>{item.amount}</li>
              <li>{item.classification}</li>
              <li className="text-red-500">
                {Number(item.property).toLocaleString()}원
              </li>
              <li>{item.content}</li>
              <li>{item.memo}</li>
            </ul>
          ))}
          {transfers.map((item) => (
            <ul className="grid grid-cols-7 p-4" key={item.id}>
              <input type="checkbox" />
              <li>{item.date}</li>
              <li>{item.amount}</li>
              <li>{item.classification}</li>
              <li className="text-black">
                {Number(item.property).toLocaleString()}원
              </li>
              <li>{item.content}</li>
              <li>{item.memo}</li>
            </ul>
          ))} */}
        </div>
      </div>
    </div>
  );
}
