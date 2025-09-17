import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {  to, message } = await request.json();
  const response = await fetch('https://graph.facebook.com/v22.0/816141538246841/messages', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.FACEBOOK_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      "messaging_product": "whatsapp",
      "to": to,
      "type": "text",
      "text": {
        "body": message
      }
    }),
  });
  console.log(await response.json());
  return NextResponse.json({ message: `Message sent to: ${to}` });
}