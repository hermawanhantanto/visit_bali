"use client";
import { komentarSchema } from "@/app/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import Spinner from "../Spinner";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { createKomentar } from "@/lib/action/komentar.action";
import axios from "axios";

interface Props {
  artikelId: string;
  userId: string;
  isiArtikel: string;
}

const KomentarForm = ({ artikelId, userId, isiArtikel }: Props) => {
  const editorRef = useRef(null);
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      komentar: "",
    },
    resolver: zodResolver(komentarSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isGenerate, setIsGenerate] = useState(false);

  async function onSubmit(values: z.infer<typeof komentarSchema>) {
    try {
      setIsLoading(true);
      const { komentar } = values;
      await createKomentar({
        komentar,
        artikelId: JSON.parse(artikelId),
        userId: JSON.parse(userId),
        path: `/artikel/${artikelId}`,
      });
      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent("");
      }
      form.reset();
      toast({
        title: "Komentar berhasil ditambahkan!",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Gagal menambahkan komentar",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const generateAI = async () => {
    try {
      setIsGenerate(true);
      const response = await axios.post(process.env.NEXT_PUBLIC_API_CHATGPT!, {
        isiArtikel,
      });
      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent(response.data.replace(/\n/g, "<br/>"));
      }
      toast({
        title: "Berhasil generate komentar",
      });
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsGenerate(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end mb-4">
        <Button
          className="text-white bg-abu-abu font-semibold hover:bg-abu-abu/50"
          disabled={isGenerate}
          onClick={generateAI}
        >
          {isGenerate ? <Spinner /> : "Generate Komentar AI"}
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="komentar"
            render={({ field }) => (
              <FormItem>
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
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="bg-abu-abu hover:bg-abu-abu/50"
          >
            {isLoading ? <Spinner /> : "Kirim Komentar"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default KomentarForm;
