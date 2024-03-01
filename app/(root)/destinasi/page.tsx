import Pagination from "@/components/shared/Pagination";
import DestinationCard from "@/components/shared/cards/DestinationCard";
import DestinationFilters from "@/components/shared/filters/DestinationFilters";
import { IDestination } from "@/database/destination.model";
import { getAllDestinations } from "@/lib/action/destination.action";

interface Props {
  searchParams: {
    filter: string;
    page: string;
  };
}

const DestinasiPage = async ({ searchParams }: Props) => {
  const results = await getAllDestinations({
    filter: searchParams.filter,
    page: Number(searchParams.page),
  });
  return (
    <section className="max-w-[1440px] mx-auto pt-36 pl-8">
      <h1 className="text-[40px] font-black">Destinasi</h1>
      <p className="text-abu-abu text-[20px] max-w-[700px] leading-8 ">
        Temukan keajaiban alam, warisan budaya, dan petualangan tak terlupakan
        di pulau Dewata. Setiap destinasi memiliki cerita sendiri yang menunggu
        untuk dijelajahi. Jelajahi keindahan Bali dan rasakan pesonanya.
      </p>
      <div className="mt-10">
        <DestinationFilters />
      </div>
      <div className="flex flex-col gap-10 mt-10">
        {results.destinations.length <= 0 ? (
          <h1 className="mt-10 text-abu-abu font-bold text-xl">
            Data tidak ditemukan!
          </h1>
        ) : (
          results.destinations.map((destination: IDestination) => (
            <DestinationCard
              key={destination._id}
              destination={JSON.stringify(destination)}
            />
          ))
        )}
      </div>
      <div className="flex w-full justify-center mt-10">
        <Pagination
          totalItem={results.size}
          countItem={8}
          page={Number(searchParams.page) || 1}
        />
      </div>
    </section>
  );
};

export default DestinasiPage;
