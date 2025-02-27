import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function AllJobsPage() {
  // This is a placeholder for job data. In a real application, you would fetch this data from an API or database.
  const jobs = [
    {
      id: 1,
      title: "مهندس نرم‌افزار ارشد",
      company: "تک‌کورپ",
      location: "تورنتو، انتاریو (دورکاری)",
      type: "تمام وقت",
      salary: "$120K - $150K CAD",
      tags: ["React", "Node.js", "AWS"],
      isNew: true,
    },
    {
      id: 2,
      title: "مدیر محصول",
      company: "نوآوران تک",
      location: "ونکوور، بریتیش کلمبیا",
      type: "تمام وقت",
      salary: "قابل مذاکره",
      tags: ["Agile", "SaaS", "B2B"],
      isFeatured: true,
    },
    // Add more job listings here...
  ]

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">همه فرصت‌های شغلی</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="text-secondary hover:text-opacity-80 flex items-center mb-6">
          <ArrowLeft size={16} className="ml-2" /> بازگشت به صفحه اصلی
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center ml-4">
                    <Image src="/placeholder.svg?height=48&width=48" alt="لوگوی شرکت" width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                {job.isNew && (
                  <span className="bg-[#E6F7F5] text-secondary text-xs font-medium px-2.5 py-1 rounded-full">جدید</span>
                )}
                {job.isFeatured && (
                  <span className="bg-[#FFF4E6] text-accent text-xs font-medium px-2.5 py-1 rounded-full">ویژه</span>
                )}
              </div>
              <div className="mb-4">
                <div className="flex items-center text-gray-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {job.type}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{job.salary}</span>
                <Link href={`/jobs/${job.id}`} className="text-secondary hover:text-opacity-80 font-medium">
                  مشاهده جزئیات
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

