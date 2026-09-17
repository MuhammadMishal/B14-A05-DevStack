const footerColumns = [
  { title: "PRODUCT", links: ["Home", "Technologies", "Projects"] },
  { title: "COMPANY", links: ["About", "Contact", "Careers"] },
  { title: "LEGAL", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-16 text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-bold text-[#10182b]"
            >
              <span className="flex size-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#a855f7] via-[#c026d3] to-[#ec4899] text-xs font-black text-white shadow-sm">
                DS
              </span>
              <span className="font-extrabold text-[#0f172a] tracking-tight">
                Dev<span className="text-[#db2777]">Stack</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-6 flex gap-5 font-medium text-slate-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold tracking-wide text-[#10182b]">
                {column.title}
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <a key={link} href="#" className="hover:text-pink-600">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row">
          <span>2026 Dev Stack. All rights reserved.</span>
          <span>Privacy Terms</span>
        </div>
      </div>
    </footer>
  );
}
