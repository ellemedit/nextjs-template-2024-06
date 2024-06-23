import { registerOTel } from "@vercel/otel"

export function register() {
  registerOTel({
    serviceName: process.env.NEXT_PUBLIC_SERVICE_NAME,
    instrumentationConfig: {},
    instrumentations: [],
  })
}
