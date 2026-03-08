import Header from "../components/Header"
import vectorBg from "../assets/home/vector.png"
import phoneIcon from "../assets/contact/phone.png"
import mailIcon from "../assets/contact/mail.png"

export default function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3FBFF]">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${vectorBg}), url(${vectorBg})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top center, top center",
          backgroundSize: "100% 200px, 105% 180px",
        }}
      >
        <Header />

        <div className="mx-auto max-w-[1200px] px-6 pt-[120px] pb-24">
          <h1 className="text-[56px] font-extrabold leading-[1] text-[#031B2A]">
            Contact Us
          </h1>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-[320px]">
              <p className="text-[16px] leading-[1.7] text-[#66737D]">
                Whether you're interested in a demo, have a question about our
                products, or want to discuss a potential partnership — fill in
                the form and we'll be in touch.
              </p>

              <div className="mt-14 flex gap-10">
                <div>
                  <div className="flex h-30 w-30 items-center justify-center">
                    <img
                      src={phoneIcon}
                      alt="Phone"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-[14px] text-[#2E3A43]">+41 41 399 18 80</p>
                </div>

                <div>
                  <div className="flex h-30 w-30 items-center justify-center">
                    <img
                      src={mailIcon}
                      alt="Email"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-[14px] text-[#2E3A43]">info@kstf.ch</p>
                </div>
              </div>
            </div>

            <form className="w-full max-w-[650px]">
              <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-semibold text-[#24343F]">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="h-[42px] w-full border border-[#D7D7D7] bg-white px-4 text-[13px] text-[#24343F] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold text-[#24343F]">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="h-[42px] w-full border border-[#D7D7D7] bg-white px-4 text-[13px] text-[#24343F] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold text-[#24343F]">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    className="h-[42px] w-full border border-[#D7D7D7] bg-white px-4 text-[13px] text-[#24343F] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold text-[#24343F]">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your job title"
                    className="h-[42px] w-full border border-[#D7D7D7] bg-white px-4 text-[13px] text-[#24343F] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[12px] font-semibold text-[#24343F]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="h-[42px] w-full border border-[#D7D7D7] bg-white px-4 text-[13px] text-[#24343F] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[12px] font-semibold text-[#24343F]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter your message"
                    className="w-full resize-none border border-[#D7D7D7] bg-white px-4 py-3 text-[13px] text-[#24343F] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>
              </div>

              <p className="mt-4 max-w-[620px] text-[11px] leading-[1.6] text-[#8A949C]">
                By submitting, you agree to our Privacy Policy and consent to
                being contacted about FMT products and services.
              </p>

              <button
                type="submit"
                className="mt-5 h-[42px] w-full rounded-[2px] bg-[#39A3E2] text-[13px] font-semibold text-white transition hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}