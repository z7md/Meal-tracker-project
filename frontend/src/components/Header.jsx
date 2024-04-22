// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

export default function Header(sub) {
  console.log(sub.sub);
  return (
    <div className="w-full">
      <div className="flex  w-full items-center justify-center ">
        <div className="flex justify-center items-center gap-8">
          <Link
            to={`/subs/edit/${sub.sub}`}
            className="flex-1 hover:opacity-70 hover:bg-gray-200"
          >
            <div className="flex flex-col gap-y-2 border-2 rounded-xl items-center justify-center w-[200px] bg-white mt-2">
              <span className="text-2xl text-black">اضافة استلام وجبة</span>

              <AiOutlineEdit className="text-2xl text-yellow-600 size-[100px]" />
            </div>
          </Link>
          <Link
            to={`/subs/delete/${sub.sub}`}
            className="flex-1 hover:opacity-70 hover:bg-gray-200 "
          >
            <div className="flex flex-col gap-y-2 border-2 rounded-xl items-center justify-center w-[200px] bg-white mt-2">
              <span className="text-2xl text-black">حذف المستخدم</span>

              <MdOutlineDelete className="text-2xl text-red-600 size-[100px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
