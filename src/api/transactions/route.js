import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/api-auth";
import { rateLimit } from "@/lib/rate-limit";
import { InputValidator } from "@/utils/validation";

export async function POST(request) {
  try {
    const { user, supabase } = await requireAuth();

    rateLimit(`api:${user.id}`, 50);

    const body = await request.json();

    if (!InputValidator.validateTransactionData(body)) {
      return NextResponse.json(
        { error: "Invalid transaction data" },
        { status: 400 }
      );
    }

    const sanitizedData = {
      ...body,
      description: InputValidator.sanitizeInput(body.description),
      user_id: user.id,
    };

    const { data, error } = await supabase
      .from("transactions")
      .insert([sanitizedData])
      .select();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error("API Error: ", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: error.message === "Unauthorized" ? 401 : 500 }
    );
  }
}
