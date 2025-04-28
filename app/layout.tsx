// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Wetland Conservation Project',
  description: 'Exploring community engagement and international wetland policies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
