import { Link } from "react-router-dom"
import bgLeft from "../assets/about/bg-last.png"
import { blogs } from "../data/blogs"

export default function BlogSection() {
  const featuredBlog = blogs[0]
  const otherBlogs = blogs.slice(1)

  return (
    <section className="relative overflow-hidden bg-[#F3FBFF] py-24">
      <img
        src={bgLeft}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 w-[480px] opacity-40"
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Link to={`/news/${featuredBlog.slug}`}>
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              className="h-[300px] w-full rounded-[10px] object-cover"
            />
          </Link>

          <div className="max-w-[470px]">
            <h2 className="mb-5 text-[26px] font-extrabold leading-[1.15] text-[#0A2230] md:text-[30px]">
              {featuredBlog.title}
            </h2>

            <p className="mb-10 text-[15px] leading-[1.9] text-[#6B7280]">
              {featuredBlog.excerpt}
            </p>

            <Link
              to={`/news/${featuredBlog.slug}`}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2230] transition-all hover:gap-3"
            >
              Read more
              <span className="text-[18px] leading-none">›</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherBlogs.map((blog) => (
            <article key={blog.slug}>
              <Link to={`/news/${blog.slug}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="mb-5 h-[180px] w-full rounded-[10px] object-cover"
                />
              </Link>

              <h3 className="mb-8 max-w-[320px] text-[18px] font-extrabold leading-[1.2] text-[#0A2230]">
                {blog.title}
              </h3>

              <Link
                to={`/news/${blog.slug}`}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2230] transition-all hover:gap-3"
              >
                Read more
                <span className="text-[18px] leading-none">›</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}