export type LanguageCode = "en_US" | "en_GB" | "es_ES" | "pt_PT" | "de_DE";
export type QRType = "vin" | "machineId" | "serialNumber";
export interface QRInput { type: QRType; value: string }
export interface Machine { name: string; model: string; vin: string; serialNumber: string; machineId: string; status: "identified" }
