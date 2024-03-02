"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { artikelSchema } from "@/app/validation";
import { z } from "zod";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useToast } from "@/components/ui/use-toast";
import { createArtikel } from "@/lib/action/artikel.action";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

interface CloudinaryResult {
  public_id: string;
}

interface Props {
  artikel?: string;
  mongoUser: string;
}

const ArtikelForm = ({ artikel, mongoUser }: Props) => {
  const editorRef = useRef(null);
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof artikelSchema>>({
    resolver: zodResolver(artikelSchema),
    defaultValues: {
      judul: "",
      deskripsi: "",
      gambar: "",
    },
  });

  async function onSubmit(values: z.infer<typeof artikelSchema>) {
    try {
      setIsLoading(true);
      const { judul, deskripsi, gambar } = values;
      await createArtikel({
        judul,
        deskripsi,
        gambar,
        penulis: JSON.parse(mongoUser),
      });
      toast({
        title: "Artikel berhasil dibuat!",
      });
      router.push("/artikel");
    } catch (error) {
      console.log(error);
      toast({
        title: "Terjadi Kesalahan!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="judul"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Judul <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Judul Artikel"
                  {...field}
                  className="mih-h-[46px]"
                />
              </FormControl>
              <FormDescription>
                Tulis judul artikel dengan minimal 5 karakter
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deskripsi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Deskripsi <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  onEditorChange={(content) => {
                    field.onChange(content);
                  }}
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) =>
                    //@ts-ignore
                    (editorRef.current = editor)
                  }
                  initialValue=""
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </FormControl>
              <FormDescription>
                Tulis deskripsi artikel dengan minimal 10 karakter
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gambar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Gambar<span className="text-red-500"> *</span>
              </FormLabel>
              <FormControl>
                <div className="flex flex-col gap-4">
                  {field.value && (
                    <CldImage
                      src={field.value}
                      width={270}
                      height={180}
                      alt="content-image"
                      className="rounded object-contain"
                    />
                  )}
                  <CldUploadWidget
                    uploadPreset="visit_bali"
                    onUpload={(result, widget) => {
                      const info = result.info as CloudinaryResult;
                      field.onChange(info.public_id);
                    }}
                  >
                    {({ open }) => (
                      <Button
                        className="rounded bg-black text-white font-semibold w-fit"
                        onClick={(e) => {
                          e.preventDefault();
                          open();
                        }}
                      >
                        Upload Gambar
                      </Button>
                    )}
                  </CldUploadWidget>
                </div>
              </FormControl>
              <FormDescription>
                Upload an image for your content
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Buat Artikel"}
        </Button>
      </form>
    </Form>
  );
};

export default ArtikelForm;
