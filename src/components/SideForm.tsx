import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdClose } from "react-icons/io";

export default function SideForm({
  title,
  onClick,
  date,
  amount,
  classification,
  property,
  content,
  memo,
  setDate,
  setAmount,
  setClassification,
  setProperty,
  setContent,
  setMemo,
  handleAddBtn,
  classed,
  type,
  setType,
}: any) {
  return (
    <div className="absolute top-0 right-0 h-screen w-[350px] bg-white p-4 shadow-lg rounded">
      <div className="flex justify-between items-center">
        <button className="pt-2 pb-4 cursor-pointer" onClick={onClick}>
          <IoMdClose className="text-[25px]" />
        </button>
        <p>{title}</p>
        <p></p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Button
          onClick={() => setType("income")}
          className={
            type === "income"
              ? "bg-blue-500 text-white"
              : "bg-white text-black border border-blue-500 hover:bg-blue-500 hover:text-white"
          }
        >
          수입
        </Button>
        <Button
          onClick={() => setType("spending")}
          className={
            type === "spending"
              ? "bg-red-500 text-white"
              : "bg-white text-black border border-red-500 hover:bg-red-500 hover:text-white"
          }
        >
          지출
        </Button>
        <Button
          onClick={() => setType("transfer")}
          className={
            type === "transfer"
              ? "bg-gray-700 text-white"
              : "bg-white text-black border border-black hover:bg-gray-500 hover:text-white"
          }
        >
          이체
        </Button>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="date">날짜</label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="property">금액</label>
        <Input
          id="property"
          type="text"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
        />

        <div className="flex flex-col">
          <label htmlFor="classification">분류</label>
          <select
            id="classification"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
            className="border p-2 rounded mb-2"
          >
            <option value=""></option>
            <option value="식비">식비</option>
            <option value="교통/차량">교통/차량</option>
            <option value="문화생활">문화생활</option>
            <option value="마트/편의점">마트/편의점</option>
            <option value="패션/미용">패션/미용</option>
            <option value="생활용품">생활용품</option>
            <option value="주거/통신">주거/통신</option>
            <option value="건강">건강</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount">자산</label>
          <select
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded"
          >
            <option value=""></option>
            <option value="현금">현금</option>
            <option value="은행">은행</option>
            <option value="카드">카드</option>
          </select>
        </div>

        <label htmlFor="content">내용</label>
        <Input
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="memo">메모</label>
        <Input
          id="memo"
          type="text"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />

        <Button className={`${classed} w-full`} onClick={() => handleAddBtn()}>
          저장
        </Button>
      </div>
    </div>
  );
}
