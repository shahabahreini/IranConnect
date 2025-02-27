import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft } from "lucide-react"
import JobCard from "@/components/JobCard"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-primary text-xl font-bold">ایران‌کانکت</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link href="#" className="text-gray-700 hover:text-primary">فرصت‌های شغلی</Link>
            <Link href="#" className="text-gray-700 hover:text-primary">معرفی‌ها</Link>
            <Link href="#" className="text-gray-700 hover:text-primary">جامعه</Link>
            <Link href="#" className="text-gray-700 hover:text-primary">درباره ما</Link>
          </nav>
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="hidden md:block px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors">ورود</button>
            <button className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-colors">ثبت‌نام</button>
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary to-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">سامانه کاریابی ایرانیان کانادا</h1>
            <p className="text-lg md:text-xl mb-8">فرصت‌های شغلی و معرفی‌ها را در جامعه ما پیدا کنید.</p>

            {/* Quick Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-3 text-gray-400" size={20} />
                  <input type="text" placeholder="عنوان شغلی، مهارت‌ها یا شرکت" className="w-full pr-10 pl-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800 text-right" />
                </div>
                <div className="flex-1 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 absolute right-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input type="text" placeholder="شهر یا استان" className="w-full pr-10 pl-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800 text-right" />
                </div>
                <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">جستجو</button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">جنرال</Link>
              <Link href="#" className="text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">تخصصی</Link>
              <Link href="#" className="text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">پاره وقت</Link>
              <Link href="#" className="text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">تمام وقت</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Job Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">فرصت‌های شغلی ویژه</h2>
            <Link href="/jobs" className="text-secondary hover:text-opacity-80 flex items-center">
              مشاهده همه فرصت‌ها <ArrowLeft size={16} className="mr-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JobCard
              id="1"
              title="مهندس نرم‌افزار ارشد"
              company="تک‌کورپ"
              location="تورنتو، انتاریو (دورکاری)"
              type="تمام وقت"
              skills={["React", "Node.js", "AWS"]}
              salary="$120K - $150K CAD"
              tags={[{ text: "جدید", type: "new" }]}
            />
            <JobCard
              id="2"
              title="مدیر محصول"
              company="نوآوران تک"
              location="ونکوور، بریتیش کلمبیا"
              type="تمام وقت"
              skills={["Agile", "SaaS", "B2B"]}
              salary="قابل مذاکره"
              tags={[{ text: "ویژه", type: "featured" }]}
            />
            <JobCard
              id="3"
              title="مهندس عمران"
              company="مهندسین مشاور سازه‌گستر"
              location="مونترال، کبک"
              type="تمام وقت"
              skills={["AutoCAD", "مدیریت پروژه"]}
              salary="$90K - $110K CAD"
              tags={[{ text: "معرفی", type: "referral" }]}
            />
          </div>
        </div>
      </section>

      {/* Province Flags Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">فرصت‌های شغلی بر اساس استان</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <ProvinceLink href="/jobs/ontario" src="/flags/ontario.svg" alt="Ontario" label="انتاریو" />
            <ProvinceLink href="/jobs/quebec" src="/flags/quebec.svg" alt="Quebec" label="کبک" />
            <ProvinceLink href="/jobs/british-columbia" src="/flags/british-columbia.svg" alt="British Columbia" label="بریتیش کلمبیا" />
            <ProvinceLink href="/jobs/alberta" src="/flags/alberta.svg" alt="Alberta" label="آلبرتا" />
            <ProvinceLink href="/jobs/manitoba" src="/flags/manitoba.svg" alt="Manitoba" label="مانیتوبا" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-l from-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">آماده پیشرفت در مسیر شغلی خود هستید؟</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">به جامعه متخصصان ایرانی-کانادایی ما بپیوندید و فرصت‌هایی را کشف کنید که با مهارت‌ها و اهداف شما مطابقت دارند.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">ثبت‌نام کنید</button>
            <button className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">اطلاعات بیشتر</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FooterSection title="ایران‌کانکت" description="اتصال متخصصان ایرانی-کانادایی به فرصت‌ها و جامعه." />
            <FooterLinks title="لینک‌های سریع" links={["صفحه اصلی", "فرصت‌های شغلی", "معرفی‌ها", "جامعه", "درباره ما"]} />
            <FooterLinks title="منابع" links={["راهنمای رزومه‌نویسی", "آمادگی برای مصاحبه", "توسعه مهارت‌ها", "رویدادهای شبکه‌سازی", "وبلاگ"]} />
            <FooterContact />
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} ایران‌کانکت. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

type ProvinceLinkProps = {
  href: string;
  src: string;
  alt: string;
  label: string;
};

const ProvinceLink = ({ href, src, alt, label }: ProvinceLinkProps) => (
  <Link href={href} className="flex flex-col items-center">
    <Image src={src} alt={alt} width={64} height={64} />
    <span className="mt-2 text-gray-700">{label}</span>
  </Link>
);

type FooterSectionProps = {
  title: string;
  description: string;
};

const FooterSection = ({ title, description }: FooterSectionProps) => (
  <div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex space-x-4 space-x-reverse">
      <SocialLink href="#" icon="facebook" />
      <SocialLink href="#" icon="twitter" />
      <SocialLink href="#" icon="linkedin" />
    </div>
  </div>
);

type FooterLinksProps = {
  title: string;
  links: string[];
};

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link}>
          <Link href="#" className="text-gray-300 hover:text-white">{link}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContact = () => (
  <div>
    <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
    <ul className="space-y-2">
      <ContactItem icon="mail" text="info@iranconnect.ca" />
      <ContactItem icon="phone" text="(647) 555-1234" />
      <ContactItem icon="location" text="تورنتو، انتاریو، کانادا" />
    </ul>
  </div>
);

type SocialLinkProps = {
  href: string;
  icon: string;
};

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <Link href={href} className="text-gray-300 hover:text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      {/* SVG path based on icon type */}
    </svg>
  </Link>
);

type ContactItemProps = {
  icon: string;
  text: string;
};

const ContactItem = ({ icon, text }: ContactItemProps) => (
  <li className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {/* SVG path based on icon type */}
    </svg>
    <span className="text-gray-300">{text}</span>
  </li>
);