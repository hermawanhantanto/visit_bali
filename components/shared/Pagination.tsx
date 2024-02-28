"use client";
import { htmlQueryParse } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  page: number;
  totalItem: number;
  countItem: number;
}

const Pagination = ({ page, countItem, totalItem }: Props) => {
  const totalPage = Math.ceil(totalItem / countItem);
  const searchParams = useSearchParams();
  const router = useRouter();

  if (totalPage <= 1) return null;

  const handlePage = (page: number) => {
    const newUrl = htmlQueryParse({
      searchParams: searchParams.toString(),
      key: "page",
      value: page.toString(),
    });
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex items-center gap-4">
      <Button
        className="text-white bg-abu-abu hover:bg-abu-abu/50 text-sm"
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft />
      </Button>
      <p className="text-sm font-bold text-abu-abu">
        {page} of {totalPage}
      </p>
      <Button
        className="text-white bg-abu-abu hover:bg-abu-abu/50 text-sm "
        onClick={() => handlePage(page + 1)}
        disabled={page === totalPage}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
