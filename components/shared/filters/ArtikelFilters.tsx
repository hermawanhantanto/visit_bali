"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { htmlQueryParse, removeQueryParams } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ArtikelFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("fiter");

  const [filter, setFilter] = useState(query || "");

  useEffect(() => {
    if (filter && filter !== "semua") {
      const newUrl = htmlQueryParse({
        key: "filter",
        value: filter,
        searchParams: searchParams.toString(),
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = removeQueryParams({
        key: ["filter"],
        searchParams: searchParams.toString(),
      });
      router.push(newUrl, { scroll: false });
    }
  }, [query, filter, router, searchParams]);

  return (
    <Select onValueChange={(value) => setFilter(value)} defaultValue={filter}>
      <SelectTrigger className="w-[180px] min-h-[46px]">
        <SelectValue placeholder="Diurutkan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="semua">Semua</SelectItem>
        <SelectItem value="terbaru">Terbaru</SelectItem>
        <SelectItem value="terfavorit">Terfavorit</SelectItem>
        <SelectItem value="terpopuler">Terpopuler</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ArtikelFilters;
