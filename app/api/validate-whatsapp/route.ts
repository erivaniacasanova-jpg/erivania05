import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json()
    const numbers = phone.replace(/\D/g, "")
    if (numbers.length !== 11) {
      return NextResponse.json({ existe: false }, { status: 200 })
    }

    const waNumber = `55${numbers}`
    const response = await fetch(
      "https://webhook.fiqon.app/webhook/019b97c2-6aed-7162-8a3a-1fd63694ecd6/5fb591d0-1499-4928-9b9f-198abec46afe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat: { phone: waNumber } }),
      }
    )

    const data = await response.json()

    // A API retorna: { result: { BODY: { existe: true, nome_wa: "..." }, CODE: 200, ... } }
    const existe =
      data?.result?.BODY?.existe ??
      data?.BODY?.existe ??
      data?.existe ??
      false

    return NextResponse.json({ existe: Boolean(existe) }, { status: 200 })
  } catch (error) {
    console.error("Erro ao validar WhatsApp:", error)
    return NextResponse.json({ existe: null }, { status: 200 })
  }
}
