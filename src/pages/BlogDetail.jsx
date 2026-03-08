import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import vectorBg from "../assets/home/vector.png"
import { blogs } from "../data/blogs"

export default function BlogDetail() {
  const { slug } = useParams()
  const blog = blogs.find((item) => item.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F3FBFF]">
        <Header />
        <div className="mx-auto max-w-[920px] px-6 pt-[140px]">
          <h1 className="text-[32px] font-extrabold text-[#0B2230]">
            Blog not found
          </h1>
          <Link
            to="/news"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B2230]"
          >
            <span>‹</span> Go back
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3FBFF]">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${vectorBg}), url(${vectorBg})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top center, top center",
          backgroundSize: "100% 420px, 105% 420px",
        }}
      >
        <Header />

        <div className="mx-auto max-w-[920px] px-6 pt-[110px] pb-20">
          <Link
            to="/news"
            className="mb-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B2230]"
          >
            <span className="text-[12px]">‹</span>
            Go back
          </Link>

          <h1 className="max-w-[760px] text-[34px] font-extrabold leading-[1.1] text-[#0B2230] md:text-[56px]">
            {blog.title}
          </h1>

          <img
            src={blog.image}
            alt={blog.title}
            className="mt-8 h-auto w-full rounded-[6px] object-cover"
          />

          <div className="mt-8 max-w-[760px] space-y-6 text-[12px] leading-[1.9] text-[#2B3C47] md:text-[13px]">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}