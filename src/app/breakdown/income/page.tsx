import { supabase } from "@/app/supabaseClient";
import Link from "next/link";
import Action from "../Action";

export default async function IncomePage() {
  const { data: incomes, error } = await supabase
    .from("income")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error", error);
    return;
  }

  const { data: spendings, error: spendingError } = await supabase
    .from("spending")
    .select("*")
    .order("created_at", { ascending: false });

  if (spendingError) {
    console.log("error", spendingError);
    return;
  }

  const { data: transfers, error: transferError } = await supabase
    .from("transfer")
    .select("*")
    .order("created_at", { ascending: false });

  if (transferError) {
    console.log("error", transferError);
    return;
  }
  return (
    <div className="relative w-full bg-gray-100">
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
                <p>금액</p>
              </Link>
            </li>
            <li>
              <Link href="/breakdown/income">
                <p>수입({incomes.length})</p>
                <p>금액</p>
              </Link>
            </li>
            <li>
              <Link href={"/breakdown/spending"}>
                <p>지출({spendings.length})</p>
                <p>금액</p>
              </Link>
            </li>
            <li>
              <Link href={"/breakdown/transfer"}>
                <p>이체({transfers.length})</p>
                <p>금액</p>
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
            {incomes.map((item) => (
              <ul className="grid grid-cols-7 p-4" key={item.id}>
                <input type="checkbox" />
                <li>{item.date}</li>
                <li>{item.amount}</li>
                <li>{item.classification}</li>
                <li className="text-blue-500">{item.property}원</li>
                <li>{item.content}</li>
                <li>{item.memo}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
