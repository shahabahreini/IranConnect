import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { vazirmatn } from "./fonts"

export const metadata: Metadata = {
  title: "ایران‌کانکت - پلتفرم کاریابی و معرفی ایرانیان کانادا",
  description: "اتصال متخصصان ایرانی-کانادایی به فرصت‌های شغلی و معرفی‌ها",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'