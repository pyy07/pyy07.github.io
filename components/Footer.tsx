export default function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-slate-200 text-slate-700 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} LukePan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
