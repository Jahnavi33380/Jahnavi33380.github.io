export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-slate-900">
            Jahnavi Gona
          </span>
        </p>

        <p className="mt-2 text-xs text-slate-400 font-mono tracking-wide">
        </p>

      </div>
    </footer>
  )
}