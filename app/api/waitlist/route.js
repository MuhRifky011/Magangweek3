import { supabaseServer } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json(
      { error: "Data harus berformat JSON" },
      { status: 400 },
    );
  }

  const nama = String(body.nama ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const organization = String(body.organization ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (nama.length < 2 || nama.length > 100) {
    return Response.json(
      { error: "Nama harus terdiri dari 2 sampai 100 karakter" },
      { status: 400 },
    );
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json(
      { error: "Alamat email tidak valid" },
      { status: 400 },
    );
  }

  if (organization.length > 150) {
    return Response.json(
      { error: "Nama organisasi maksimal 150 karakter" },
      { status: 400 },
    );
  }

  if (message.length < 5 || message.length > 2000) {
    return Response.json(
      { error: "Pesan harus terdiri dari 5 sampai 2000 karakter" },
      { status: 400 },
    );
  }

  const supabase = supabaseServer();
  const { error } = await supabase.from("waitlist").insert({
    nama,
    email,
    organization: organization || null,
    message,
  });

  if (error?.code === "23505") {
    return Response.json(
      { error: "Email ini sudah terdaftar di waitlist." },
      { status: 409 },
    );
  }

  if (error) {
    console.error("Supabase waitlist error:", error);

    return Response.json(
      { error: "Server sedang bermasalah. Coba lagi nanti." },
      { status: 500 },
    );
  }

  return Response.json(
    {
      pesan: "Berhasil bergabung ke waitlist HydroPulse.",
    },
    { status: 201 },
  );
}
