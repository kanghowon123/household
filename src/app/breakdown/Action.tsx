"use client";

import { supabase } from "@/app/supabaseClient";

import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Action({ households }: { households: any }) {
  const handleDelete = async () => {
    const { error } = await supabase
      .from("income")
      .delete()
      .eq("id", households.id);

    if (error) {
      console.log(error);
      alert("내역 삭제에 실패했습니다.");
      return;
    }
  };
  return (
    <div className="flex justify-around p-4 items-center">
      <div className="flex gap-4">
        <input type="checkbox" />
        <p>()건이 선택되었습니다.</p>
      </div>
      <div className="flex items-center gap-4">
        <p>(체크된 합산금액)원</p>
        <FaRegTrashCan
          className="size-6 text-gray-500"
          onClick={handleDelete}
        />
        <HiOutlineDotsVertical className="size-6 text-gray-500" />
        <IoMdClose className="size-6 text-gray-500" />
      </div>
    </div>
  );
}
