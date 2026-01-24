export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-neutral-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-neutral-light/70 mb-6">
          <p className="text-lg font-heading font-semibold text-white mb-2">
            Marc Abraham
          </p>
          <p className="text-sm">
            Technical Product Leader specializing in AI and Data Analytics solutions. 
            Passionate about building innovative products that make a difference.
          </p>
        </div>
        <div className="border-t border-neutral-dark/50 pt-6 text-center text-neutral-light/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Marc Abraham. All rights reserved.</p>
          <p className="mt-2">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}

