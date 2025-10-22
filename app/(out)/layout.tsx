export const metadata = {
  title: 'Aircool',
  description: 'Sitio oficial de Aircool Refrigeración',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className="max-w-[100vw]">{children}</body>
    </html>
  )
}
