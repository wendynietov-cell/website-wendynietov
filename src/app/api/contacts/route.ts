import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensaje muy corto"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // TODO: conectar con Supabase o servicio de email
    console.log("Nuevo contacto:", { name, email, message, createdAt: new Date() });

    return NextResponse.json(
      { success: true, message: "Mensaje recibido. Te contactaremos pronto." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
