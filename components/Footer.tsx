export default function Footer() {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} LukePan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

