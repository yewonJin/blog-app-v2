import { NextRequest, NextResponse } from "next/server";

import { signAccessToken, verifyAccessToken } from "@/shared/lib";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("jwt")?.value;

    if (!token) {
      return NextResponse.json(
        { msg: "토큰이 없습니다", code: -501 },
        { status: 400 }
      );
    }

    if (!verifyAccessToken(token)) {
      return NextResponse.json("토큰이 유효하지 않습니다.", { status: 400 });
    }

    return NextResponse.json("토큰이 유효합니다", { status: 200 });
  } catch (e) {
    return NextResponse.json(
      JSON.stringify({ message: "토큰이 유효하지 않습니다" }),
      {
        status: 400,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { id, password } = await req.json();

    if (!id || !password) {
      return NextResponse.json(
        JSON.stringify({
          msg: "아이디 혹은 비밀번호를 입력하지 않았습니다.",
          code: 1001,
        }),
        {
          status: 400,
        }
      );
    }

    if (
      id !== process.env.ADMIN_ID ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        JSON.stringify({ error: "아이디 혹은 비밀번호가 일치하지 않습니다." }),
        {
          status: 400,
        }
      );
    }

    const token = await signAccessToken({ id });

    const response = NextResponse.json(
      { message: "로그인 성공" },
      { status: 200 }
    );

    response.cookies.set({
      name: "jwt",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60,
    });

    return response;
  } catch (e) {
    return NextResponse.json({ message: "로그인 실패" }, { status: 400 });
  }
}
