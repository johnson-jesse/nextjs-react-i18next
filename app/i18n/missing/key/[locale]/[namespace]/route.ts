interface Params {
  locale: string;
  namespace: string;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { locale, namespace } = await params;
  const body = await request.json();

  console.log("Locale:", locale);
  console.log("Namespace:", namespace);
  console.log("Body:", body);
  // TODO sent this to some reporting service rather than console logging

  return new Response(null, { status: 200 });
}
