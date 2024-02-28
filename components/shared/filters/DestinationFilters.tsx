"use client";
import { Button } from "@/components/ui/button";
import { filterDestination } from "@/constant";
import { htmlQueryParse } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DestinationFilters = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("filter");
  const [filter, setFilter] = useState(query || "Semua");
  const router = useRouter();

  useEffect(() => {
    if (filter !== query) {
      const newUrl = htmlQueryParse({
        key: "filter",
        value: filter,
        searchParams: searchParams.toString(),
      });
      router.push(newUrl, { scroll: false });
    }
  }, [filter, query, router, searchParams]);

  return (
    <div className="flex flex-wrap gap-4 max-w-[600px]">
      {filterDestination.map((item) => {
        const isActive = filter === item;
        return (
          <Button
            key={item}
            variant="outline"
            className={`${
              isActive ? "bg-abu-abu text-white" : ""
            } hover:bg-abu-abu hover:text-white transition-colors ease-in-out duration-300`}
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default DestinationFilters;
