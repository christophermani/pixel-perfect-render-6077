import type { Machine, QRInput } from "@/types/jcb";

const mockMachine: Machine = {
  name: "JCB G125RS", model: "G125RS Generator", vin: "HXNEDJ3N123456789",
  serialNumber: "1234567", machineId: "JCB-G125RS-001", status: "identified",
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getMachineByVIN(vin: string) { await delay(700); return { ...mockMachine, vin }; }
export async function getMachineById(machineId: string) { await delay(700); return { ...mockMachine, machineId }; }
export async function getMachineBySerial(serialNumber: string) { await delay(700); return { ...mockMachine, serialNumber }; }
export async function getMachineByQR(input: QRInput) {
  if (input.type === "vin") return getMachineByVIN(input.value);
  if (input.type === "machineId") return getMachineById(input.value);
  return getMachineBySerial(input.value);
}
