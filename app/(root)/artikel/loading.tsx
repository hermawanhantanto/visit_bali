import Pagination from "@/components/shared/Pagination";
import ArtikelCard from "@/components/shared/cards/ArtikelCard";
import ArtikelFilters from "@/components/shared/filters/ArtikelFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <section className="lg:max-w-[1440px] lg:mx-auto lg:pt-36 pt-24 lg:p-8 p-5">
      <Skeleton className="w-40 h-10" />
      <Skeleton className="w-[500px] h-40 mt-10" />
      <div className="flex sm:items-center justify-between mt-10 sm:flex-row flex-col-reverse max-sm:gap-8">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-40 h-10" />
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-64" />
      </div>
    </section>
  );
};

export default Loading;
