import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Clock, Building2, DollarSign, Briefcase } from "lucide-react";

type JobDetailsProps = {
    title: string;
    company: string;
    location: string;
    type: string;
    skills: string[];
    salary: string;
    description: string;
    requirements: string[];
    link: string;
    logo?: string;
    badge?: {
        bg: string;
        text: string;
        label: string;
    };
};

const JobDetails = ({
    title,
    company,
    location,
    type,
    skills,
    salary,
    description,
    requirements,
    link,
    logo = "/placeholder.svg",
    badge
}: JobDetailsProps) => (
    <div className="min-h-screen bg-[#F1FAEE]">
        {/* Header/Navigation - Matching home page header */}
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
                </div>
            </div>
        </header>

        {/* Job Details Hero Section */}
        <section className="bg-gradient-to-l from-primary to-secondary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-6">
                        <Link href="/jobs" className="text-white hover:text-opacity-80 flex items-center">
                            <ArrowLeft size={16} className="ml-2" />
                            بازگشت به فرصت‌های شغلی
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Image src={logo} alt={`${company} logo`} width={48} height={48} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold text-primary mb-2">{title}</h1>
                                        <div className="flex items-center text-gray-600 mb-2">
                                            <Building2 size={18} className="ml-2" />
                                            <span>{company}</span>
                                        </div>
                                    </div>
                                    {badge && (
                                        <span className={`bg-${badge.bg} text-${badge.text} text-sm font-medium px-3 py-1 rounded-full`}>
                                            {badge.label}
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin size={18} className="ml-2" />
                                        <span>{location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Clock size={18} className="ml-2" />
                                        <span>{type}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <DollarSign size={18} className="ml-2" />
                                        <span>{salary}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left Column - Job Details */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-[#F1FAEE] rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-primary mb-4">توضیحات شغل</h2>
                                <div
                                    className="prose max-w-none text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: description }}
                                />
                            </div>

                            <div className="bg-[#F1FAEE] rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-primary mb-4">الزامات</h2>
                                <ul className="space-y-3">
                                    {requirements.map((req, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 mt-2 ml-3 bg-secondary rounded-full"></span>
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Action Card */}
                        <div className="md:col-span-1">
                            <div className="bg-[#F1FAEE] rounded-lg shadow-sm p-6 sticky top-6">
                                <h3 className="text-lg font-semibold text-primary mb-4">مهارت‌های مورد نیاز</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center bg-white rounded-lg px-4 py-2 text-sm text-primary font-medium shadow-sm transition-all hover:shadow-md hover:scale-105 cursor-default"
                                        >
                                            <Briefcase className="w-4 h-4 ml-2 text-secondary" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <Link
                                        href={link}
                                        className="block w-full bg-secondary text-white text-center px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
                                    >
                                        درخواست این موقعیت
                                    </Link>

                                    <button className="block w-full bg-white text-primary border-2 border-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all duration-300 font-medium">
                                        ذخیره موقعیت شغلی
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

        {/* Similar Jobs Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary">موقعیت‌های مشابه</h2>
                        <Link href="/jobs" className="text-secondary hover:text-opacity-80 flex items-center">
                            مشاهده همه فرصت‌ها <ArrowLeft size={16} className="mr-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Add JobCard components here */}
                    </div>
                </div>
            </div>
        </section>

        {/* Footer - Matching home page footer */}
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">ایران‌کانکت</h3>
                        <p className="text-gray-300 mb-4">اتصال متخصصان ایرانی-کانادایی به فرصت‌ها و جامعه.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">لینک‌های سریع</h4>
                        <ul className="space-y-2">
                            {["صفحه اصلی", "فرصت‌های شغلی", "معرفی‌ها", "جامعه", "درباره ما"].map(link => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-300 hover:text-white">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">منابع</h4>
                        <ul className="space-y-2">
                            {["راهنمای رزومه‌نویسی", "آمادگی برای مصاحبه", "توسعه مهارت‌ها", "رویدادهای شبکه‌سازی", "وبلاگ"].map(link => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-300 hover:text-white">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-300">info@iranconnect.ca</li>
                            <li className="text-gray-300">(647) 555-1234</li>
                            <li className="text-gray-300">تورنتو، انتاریو، کانادا</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} ایران‌کانکت. تمامی حقوق محفوظ است.</p>
                </div>
            </div>
        </footer>
    </div>
);

export default JobDetails;
