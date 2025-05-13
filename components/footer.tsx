import Link from "next/link"
import { Github, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#87CEFA] mb-2">배재욱 포트폴리오</h3>
            <p className="text-gray-400 mt-1 max-w-md">현실적인 문제 해결에 강한, 운영 중심의 실용적 백엔드 개발자</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <Link
              href="mailto:jaewook0158@gmail.com"
              className="flex items-center text-gray-300 hover:text-[#87CEFA] transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              <span>jaewook0158@gmail.com</span>
            </Link>
            <Link
              href="tel:+821053020158"
              className="flex items-center text-gray-300 hover:text-[#87CEFA] transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>+82 10-5302-0158</span>
            </Link>
            <Link
              href="https://github.com/JA3WOOK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-[#87CEFA] transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} 배재욱. All rights reserved.</p>
          <p className="mt-2">백엔드 개발자 | Java | Spring Boot | JPA | RESTful API</p>
        </div>
      </div>
    </footer>
  )
}
