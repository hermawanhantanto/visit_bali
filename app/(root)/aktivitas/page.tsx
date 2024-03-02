import GridOption from "@/components/shared/GridOption";

const AktivitasPage = () => {
  return (
    <section className="pt-36 pl-8 max-w-[1440px] mx-auto ">
      <h2 className="text-[40px] font-black">Aktivitas</h2>
      <p className="text-abu-abu max-w-[700px] text-[20px] leading-8">
        Mari temukan beragam aktivitas yang bisa menjadi hiasan momen-momen tak
        terlupakan Anda di Pulau Dewata. Dari petualangan alam hingga pesta seni
        budaya, temukan keindahan dan kegembiraan yang menanti untuk dijelajahi
      </p>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-2 sm:gap-6 mt-10 md:grid-cols-4">
        <GridOption
          title="Petualangan Alam"
          image="visit_bali/c7xxmyxxsapynci0libx"
          className="h-full md:h-32  bg-green-200"
        />
        <GridOption
          title="Kuliner Bali"
          image="visit_bali/ktiai5mf9qztq75vdv3c"
          className="row-span-2 col-span-2 bg-orange-200"
        />
        <GridOption
          title="Event Kesenian dan Budaya"
          image="visit_bali/j0nyfd9iwy5jztp2mjwx"
          className="row-span-2  bg-yellow-200 "
        />
        <GridOption
          title="Petualangan Pantai"
          image="visit_bali/ejddpoeydajciibzwcmb"
          className=" h-64 bg-blue-200 col-span-2"
        />
        <GridOption
          title="Relaksasi dan Kesehatan"
          image="visit_bali/ex3a2c9scjq1pvojxxeq"
          className="row-span-2 bg-zinc-200 col-span-2"
        />
        <GridOption
          title="Ritual dan Upacara Keagamaan"
          image="visit_bali/spjqke3suskkimgkxtgs"
          className="h-64 bg-neutral-200 col-span-2"
        />
        <GridOption
          title="Event Pantai dan Hiburan "
          image="visit_bali/q7ltddirw2ctjyqkfxtv"
          className="h-64 bg-indigo-200 col-span-2"
        />
        <GridOption
          title="Kunjungan Desa Tradisional"
          image="visit_bali/bzroks4vaq5spkibganq"
          className="h-64 bg-lime-200 col-span-2"
        />
        <GridOption
          title="Festival Film dan Acara Seni"
          image="visit_bali/usdrha0wmv4hwz9s6ozk"
          className=" h-64 bg-stone-200 col-span-2"
        />
        <GridOption
          title="Aktivitas Keluarga"
          image="visit_bali/phcp91rxkurfrwtxrgxg"
          className="h-64 bg-sky-200 col-span-2"
        />
      </div>
    </section>
  );
};

export default AktivitasPage;
