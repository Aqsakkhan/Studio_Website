import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="container-studio min-h-[70vh] flex flex-col items-start justify-center gap-6 py-32">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-4xl sm:text-5xl">This page doesn't exist.</h1>
      <p className="text-charcoal/70 max-w-md">
        The page you're looking for may have moved. Head back home or explore our work.
      </p>
      <div className="flex gap-4 pt-2">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
        <Button to="/work" variant="outline">
          View Our Work
        </Button>
      </div>
    </section>
  )
}
