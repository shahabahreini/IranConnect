import Image from "next/image"
import Link from "next/link"
interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  skills: string[]
  salary: string
  tags?: { text: string; type: "new" | "featured" | "direct" | "referral" }[]
  logo?: string
}

export default function JobCard({
  title,
  company,
  location,
  type,
  skills,
  salary,
  tags = [],
  logo = "/placeholder.svg",
}: JobCardProps) {
  const tagStyles = {
    new: "bg-[#E6F7F5] text-secondary",
    featured: "bg-[#FFF4E6] text-accent",
    direct: "bg-green-100 text-green-800",
    referral: "bg-pink-100 text-pink-800",
  }

  return (
    <div className="bg-[#F1FAEE] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center ml-4">
            <Image src={logo} alt={`${company} logo`} width={48} height={48} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary">{title}</h3>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
        {tags[0] && (
          <span className={`${tagStyles[tags[0].type]} text-xs font-medium px-2.5 py-1 rounded-full`}>
            {tags[0].text}
          </span>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
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
          {type}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-primary font-medium">{salary}</span>
        <Link href="#" className="text-secondary hover:text-opacity-80 font-medium">
          مشاهده جزئیات
        </Link>
      </div>
      {tags.length > 1 && (
        <div className="mt-4">
          {tags.slice(1).map((tag, index) => (
            <span
              key={index}
              className={`${tagStyles[tag.type]} text-xs font-medium px-2.5 py-1 rounded-full mr-2`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

