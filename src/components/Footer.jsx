export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center py-8 bg-choco border-t border-catawba/20">
      <div className="flex flex-col items-center gap-3">
        <p className="font-cinzel text-ribbon text-xl tracking-[0.3em]">REBECA</p>
        <div className="section-divider w-24" />
        <p className="text-pearl/40 text-xs">
          Todos os direitos reservados {year} © Rebeca Lima Nunes
        </p>
        <p className="text-lilac/40 text-xs font-caveat text-base">
          Feito com muita 🎵 e muito ☕
        </p>
      </div>
    </footer>
  );
}
