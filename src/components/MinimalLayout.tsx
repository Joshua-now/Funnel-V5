import Footer from './Footer';

export default function MinimalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
