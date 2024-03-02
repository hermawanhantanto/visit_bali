import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { isiArtikel } = await request.json();

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Kamu adalah seorang user yang mengerti tentang isi artikel mengenai bali dan kamu akan merespon artikel tersebut. Kamu bisa memberikan saran atau fakta mengenai artikel tersebut. Berikan respon seperti manusia yang akan merespon artikel tersebut di kolom komentar media sosial. Jika artikel menggunakan bahasa spesifik seperti bahasa Indonesia, kamu bisa menggunakan bahasa Indonesia.",
          },
          {
            role: "user",
            content: `coba respon isi artikel ini: ${isiArtikel}. Berikan respon yang menarik dan informatif.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  
    const data = await response.data;
    const reply = data.choices[0].message.content;

    return NextResponse.json(reply, { status: 200 });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
