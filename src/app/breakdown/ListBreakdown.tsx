import { supabase } from "../supabaseClient";

import Action from "@/app/breakdown/Action";

export default async function ListBreakdown() {
  const { data: households, error } = await supabase
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

  return (
    <div className="p-10">
      <p className="text-[24px]">내역</p>
      <p>날짜</p>
      <div className="border bg-white rounded-2xl">
        <ul className="flex justify-around border-b p-4">
          <li>
            <p>전체({households.length + spendings.length})</p>
            <p>금액</p>
          </li>
          <li>
            <p>수입({households.length})</p>
            <p>금액</p>
          </li>
          <li>
            <p>지출({spendings.length})</p>
            <p>금액</p>
          </li>
          <li>
            <p>이체()</p>
            <p>금액</p>
          </li>
        </ul>
        <div>
          <Action households={households} />
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
          {households.map((item) => (
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
          {spendings.map((item) => (
            <ul className="grid grid-cols-7 p-4" key={item.id}>
              <input type="checkbox" />
              <li>{item.date}</li>
              <li>{item.amount}</li>
              <li>{item.classification}</li>
              <li className="text-red-500">{item.property}원</li>
              <li>{item.content}</li>
              <li>{item.memo}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
