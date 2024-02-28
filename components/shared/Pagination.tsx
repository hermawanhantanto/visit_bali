import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

interface Props {
  page: number;
  totalItem: number;
  countItem: number;
}

const Pagination = ({ page, countItem, totalItem }: Props) => {
  const totalPage = Math.ceil(totalItem / countItem);
  console.log(totalPage);
  if (totalPage <= 1) return null;

  return (
    <div className="flex items-center gap-4">
      <Button className="text-white text-lg ">
        <ChevronLeft />
      </Button>
    </div>
  );
};

export default Pagination;
