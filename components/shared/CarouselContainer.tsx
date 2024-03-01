import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RenderGambar from "./RenderGambar";
import { getCarouselDestination } from "@/lib/action/destination.action";
import Link from "next/link";

const CarouselContainer = async () => {
  const results = await getCarouselDestination();

  return (
    <Carousel className="w-full max-w-[1440px]">
      <CarouselContent className="-ml-1">
        {results?.map((item: any) => (
          <CarouselItem
            key={item._id}
            className="pl-1 md:basis-1/2 lg:basis-1/3 flex"
          >
            <Link className="p-1" href={`/destinasi/${item._id}`}>
              <Card>
                <CardHeader>
                  <RenderGambar
                    url={item.gambar}
                    className="rounded sm:h-[300px] h-[200px]"
                    width={540}
                    height={340}
                    id={String(item._id)}
                    alt={item.judul}
                  />
                </CardHeader>
                <CardContent className="flex flex-col">
                  <CardTitle>{item.judul}</CardTitle>
                  <CardDescription className="mt-4 line-clamp-5 max-w-[350px]">
                    {item.deskripsi}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselContainer;
