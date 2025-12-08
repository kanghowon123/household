"use client";

import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaPlus } from "react-icons/fa";
import SideForm from "@/components/SideForm";

export default function AddBreakdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("income");
  const router = useRouter();

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [classification, setClassification] = useState("");
  const [property, setProperty] = useState("");
  const [content, setContent] = useState("");
  const [memo, setMemo] = useState("");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const tableName =
    type === "income"
      ? "income"
      : type === "spending"
      ? "spending"
      : "transfer";

  const buttonClass =
    type === "income"
      ? "bg-blue-500 text-white"
      : type === "spending"
      ? "bg-red-500 text-white"
      : "bg-gray-700 text-white";

  const handleAddBtn = async () => {
    const { error } = await supabase
      .from(tableName)
      .insert({ date, amount, classification, property, content, memo });

    if (error) {
      console.log(error);
      alert("내역 추가에 실패했습니다.");
      return;
    }

    setDate("");
    setAmount("");
    setClassification("");
    setProperty("");
    setContent("");
    setMemo("");
    alert("내역이 추가되었습니다.");
    setIsOpen(false);
    router.push("/breakdown");
  };

  return (
    <div className="w-full">
      <div className="flex justify-end p-4">
        <button
          className="fixed bottom-10 right-10 w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full cursor-pointer"
          onClick={handleToggle}
        >
          <FaPlus className="text-white size-8" />
        </button>

        {isOpen && (
          <SideForm
            title="입력"
            onClick={handleToggle}
            date={date}
            amount={amount}
            classification={classification}
            property={property}
            content={content}
            memo={memo}
            setDate={setDate}
            setAmount={setAmount}
            setClassification={setClassification}
            setProperty={setProperty}
            setContent={setContent}
            setMemo={setMemo}
            handleAddBtn={handleAddBtn}
            classed={buttonClass}
            type={type}
            setType={setType}
          />
        )}
      </div>
    </div>
  );
}
