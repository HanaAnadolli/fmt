import { Link } from "react-router-dom"

export default function ContactSection() {
  return (
    <section className="bg-primary py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-white text-xl font-semibold">
          Get in Touch with Us
        </h2>

        <Link
          to="/contact"
          className="border border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
