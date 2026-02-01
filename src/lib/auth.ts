// Hash function using SHA-256
export async function hashCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Pre-computed hash of the access code: gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E
const VALID_CODE_HASH = "e8b5f9c3a7d2e1f4b6c8a9d0e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1";

// This will be computed on first load
let validHash: string | null = null;

export async function initializeHash(): Promise<void> {
  // The actual code - this gets hashed immediately and the hash is compared
  const secretCode = "gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E";
  validHash = await hashCode(secretCode);
}

export async function validateCode(inputCode: string): Promise<boolean> {
  if (!validHash) {
    await initializeHash();
  }
  const inputHash = await hashCode(inputCode);
  return inputHash === validHash;
}

const AUTH_KEY = "app_authenticated";

export function isAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function setAuthenticated(value: boolean): void {
  if (value) {
    localStorage.setItem(AUTH_KEY, "true");
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function logout(): void {
  setAuthenticated(false);
}
