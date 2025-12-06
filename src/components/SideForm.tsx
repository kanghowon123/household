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
}: any) {
  return (
    <div className="absolute top-0 right-0 h-screen max-w-[350px] bg-white p-4 shadow-lg rounded">
      <div className="flex justify-between items-center">
        <button className="pt-2 pb-4 cursor-pointer" onClick={onClick}>
          <IoMdClose className="text-[25px]" />
        </button>
        <p>{title}</p>
        <p></p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Button className="bg-white text-black border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
          수입
        </Button>
        <Button className="bg-white text-black border border-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
          지출
        </Button>
        <Button className="bg-white text-black border border-black hover:bg-gray-500 hover:text-white cursor-pointer">
          이체
        </Button>
      </div>
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

      <label htmlFor="classification">분류</label>
      <Input
        id="classification"
        type="text"
        value={classification}
        placeholder="식비 교통 문화 화살표"
        onChange={(e) => setClassification(e.target.value)}
      />

      <label htmlFor="amount">자산</label>
      <Input
        id="amount"
        type="text"
        value={amount}
        placeholder="현금,은행,카드 화살표"
        onChange={(e) => setAmount(e.target.value)}
      />

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

      <Button onClick={() => handleAddBtn()}>저장</Button>
    </div>
  );
}
