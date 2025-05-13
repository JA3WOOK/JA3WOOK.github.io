import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone } from "lucide-react"
import Link from "next/link" // Link 컴포넌트 추가

export default function Hero() {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#87CEFA] opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#87CEFA] opacity-5 rounded-full -ml-24 -mb-24"></div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1 bg-[#e8f5e9] text-[#87CEFA] rounded-full text-sm font-medium mb-4">
            백엔드 개발자
          </div>
          <h1 className="text-4xl font-bold mb-4">
            안녕하세요,{" "}
            <span className="text-[#87CEFA] relative">
              2년차 개발자
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#87CEFA] opacity-20"></span>
            </span>{" "}
            배재욱입니다.
          </h1>
          <p className="text-lg text-gray-700 mb-6">현실적인 문제 해결에 강한, 운영 중심의 실용적 백엔드 개발자</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
                href="mailto:jaewook0158@gmail.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#87CEFA] hover:bg-[#02a64d] text-white rounded-md font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>이메일 보내기</span>
            </Link>
            <Link href="https://github.com/JA3WOOK" target="_blank" rel="noopener noreferrer">
              <Button
                  variant="outline"
                  className="border-[#87CEFA] text-[#87CEFA] hover:bg-[#e8f5e9] shadow-md hover:shadow-lg transition-all"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub 방문하기
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-[#87CEFA]">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-[#87CEFA]" />
              <span className="font-medium">jaewook0158@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-[#87CEFA]" />
              <span className="font-medium">+82 10-5302-0158</span>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3 text-[#87CEFA]" />
              <span className="font-medium">https://github.com/JA3WOOK</span>
            </div>
          </div>
        </div>
        <Card className="bg-white shadow-xl border-none relative z-10">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#87CEFA] opacity-10 rounded-full -mr-8 -mt-8"></div>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#87CEFA] flex items-center">
              <span className="inline-block w-2 h-8 bg-[#87CEFA] mr-3"></span>
              자기소개
            </h2>
            <p className="text-gray-800 text-lg whitespace-pre-line leading-relaxed font-medium">
              {`현재 2년 차 백엔드 개발자로, 이전에는 외식업계에서 5년간 고객과 직접 
                소통하며 서비스를 제공한 경험이 있습니다.
                
                이러한 경험 덕분에, 개발자로서도 단순히 기능 구현에 그치지 않고 사용자의 
                입장에서 문제를 정의하고 해결하는 데 익숙합니다.

                사용자뿐만 아니라 운영, 기획, 개발 등 다양한 이해관계자의 관점을 고려해 
                실용적이고 균형 잡힌 솔루션을 만드는 것을 목표로 삼고 있습니다.
                
                코드를 작성할 때는 중복을 줄이고 가독성을 높이는 것을 중요하게 생각합니다.  
                
                누구나 쉽게 이해할 수 있는 간결하고 명확한 코드를 지향하며, 
                협업 시에는 공유 문서화와 커뮤니케이션을 통해 애자일 방식에 적합한 
                개발 문화를 만들기 위해 노력하고 있습니다.

                다양한 기업의 코드베이스를 경험하며 코드 리딩 능력을 키워왔고, 이를 바탕으로 기존 시스템의 구조를 빠르게 파악하고 개선 방향을 제시하는 데 강점이 있습니다.
                
                앞으로도 사용자에게 더 나은 서비스를 제공하기 위해, 기술적 역량뿐만 아니라 
                커뮤니케이션 능력을 함께 갖춘 개발자로 성장해 나가겠습니다.`}
            </p>

          </CardContent>
        </Card>
      </div>
    </section>
  )
}
