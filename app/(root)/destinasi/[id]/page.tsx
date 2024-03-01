import RenderGambar from "@/components/shared/RenderGambar";
import { Badge } from "@/components/ui/badge";
import { getDestinationById } from "@/lib/action/destination.action";
import { CldImage } from "next-cloudinary";
import result from "postcss/lib/result";

interface Props {
  params: {
    id: string;
  };
}

const DestinasiPageId = async ({ params }: Props) => {
  const result = await getDestinationById({ id: params.id });
  
  return (
    <section className="pt-40 max-w-[1440px] mx-auto pl-8">
      <h2 className="font-bold text-[48px]">{result.destination.judul}</h2>
      <p className="mt-4 max-w-[800px] text-abu-abu leading-8 text-lg ">
        {result.destination.deskripsi}
      </p>
      <RenderGambar
        url={result.destination.gambar}
        className="mt-10 max-w-[720px] rounded object-contain"
      />
      <div className="flex flex-wrap gap-6 mt-10">
        {result.destination.tags.map((tag: string) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-sm hover:bg-abu-abu hover:text-white transition-colors ease-in-out duration-300"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default DestinasiPageId;
