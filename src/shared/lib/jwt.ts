import * as jose from "jose";

export async function verifyAccessToken(jwt: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jose.jwtVerify(jwt, secret);

  return payload ? true : false;
}

export async function signAccessToken(payload: Record<string, unknown>) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);
}
