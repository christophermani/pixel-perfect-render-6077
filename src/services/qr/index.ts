import type { QRInput, QRType } from "@/types/jcb";

const validators: Record<QRType, RegExp> = {
  vin: /^[A-HJ-NPR-Z0-9]{17}$/i,
  machineId: /^[A-Z0-9-]{5,32}$/i,
  serialNumber: /^\d{7,12}$/,
};

export function readQRParameters(search: string): QRInput | null {
  const params = new URLSearchParams(search);
  for (const type of ["vin", "machineId", "serialNumber"] as const) {
    const value = params.get(type)?.trim();
    if (value) return { type, value };
  }
  return null;
}

export function isValidQR(input: QRInput) { return validators[input.type].test(input.value); }
export function getPublicBaseUrl() {
  if (typeof window === "undefined") return import.meta.env.VITE_PUBLIC_BASE_URL || "https://example.com";
  return import.meta.env.VITE_PUBLIC_BASE_URL || window.location.origin;
}
export function buildQRUrl(type: QRType, value: string) {
  const url = new URL(getPublicBaseUrl());
  url.searchParams.set(type, value);
  return url.toString();
}
