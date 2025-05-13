import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "LG_VS_ONE",
    company: "베이직인터내셔널",
    period: "2024.08 - 2024.09",
    description:
        "EC2 서버에 Jenkins를 배포하여 CI/CD 환경을 구축하고, 자동화된 배포 프로세스 설정했습니다.",
    tasks: [
      "Amazon EC2 인스턴스에 Docker 설치 및 Jenkins 컨테이너 배포",
      "Jenkins 이미지 업로드 및 컨테이너 실행 및 프로젝트별 CI/CD 파이프라인을 구성하여 자동화된 빌드 및 배포 프로세스 구현",
    ],
    tech: ["Linux", "Docker", "Jenkins"],
  },
  {
    title: "필립모리스 - PMK",
    company: "베이직인터내셔널",
    period: "2024.01 - 2024.10",
    description:
      "소매점주들이 담배 및 전자담배를 주문할 수 있는 발주 어플리케이션 & 배송사원 배송조회 및 구매내역 확인 사이트의 유지보수 및 기능 개선했습니다.",
    tasks: [
      "제품 재고 유무에 따라 카테고리 노출 여부를 동적으로 제어할 수 있도록 API 로직 리팩토링 및 쿼리 최적화 수행. 이를 통해 클라이언트 렌더링 속도 향상 및 UX 개선",
      "Salesforce에 등록된 제품을 특정 점포에서만 표시하도록 API를 추가하여 노출 관리 기능 개선",
      "Order API 및 Receipt API 간 데이터 일관성 문제 분석 및 해결. 주문/구매 이력 조회 로직 정비 및 DB 정규화 작업을 통해 데이터 신뢰도 향상",
      "Heroku Stack을 최신 버전으로 업그레이드하여 성능 최적화 및 시스템 안정성 향상",
    ],
    tech: ["Java", "Spring Boot", "Gradle", "Mysql", "Vue2.0", "Salesforce", "Heroku"],
  },
  {
    title: "필립모리스 - IRIS",
    company: "베이직인터내셔널",
    period: "2024.01 - 2024.03",
    description:
      "판매 영업사원들의 판매 현황, 출퇴근 기록, 각 지점의 매출 현황 등을 조회할 수 있는 판매 관리 시스템 어플리케이션 기능 개선했습니다.",
    tasks: [
      "소매점 검색 기능 개선 : 기존 소매점 코드 기반 검색 방식에서 소매점 이름으로도 검색 가능하도록 API 개선 및 UI 적용",
      "목표 관리 게시판 개발 : \n" +
      "1. ERD 설계 및 데이터 베이스 구축\n" +
      "2. 프로시저를 활용하여 그리드 형태의 목표 관리 게시판을 설계 및 구현\n" +
      "3. Recharts 그래프를 활용한 월별 달성률 팝업 시각화\n" +
      "4. 대량 입력 처리 기능을 위한 Batch Insert API 및 프론트엔드 CSV 업로드 모듈 개발. 유효성 검증 및 에러 핸들링 로직을 포함한 일괄 등록 기능을 통해 운영 효율성 극대화",
    ],
    tech: ["PHP", "Laravel", "Mysql", "Git", "React", "Recharts", "Salesforce"],
  },
  {
    title: "오뚜기 - 파워세일즈",
    company: "베이직인터내셔널",
    period: "2023.10 - 2024.01",
    description:
      "오뚜기 여사원 관리 시스템의 유지보수 업무를 전담하며, 고객과의 소통을 통해 문제 발생 시 대응 및 기능 개선 업무 수행했습니다.",
    tasks: [
      "애플 iOS 자동 로그인 문제 해결 : 아이폰 사용자의 로그인 token값과 uuid 정보를 확인하여, API 성능개선과 SQL 쿼리 수정하여 문제 해결",
      "출근 등록 기능 개선 : Salesforce 및 Heroku를 통해 여사원의 출근 정보를 조회하고, 취약점을 수정하며 관련 API 성능개선과 SQL 쿼리 개발",
      "JHeroku 환경 유지보수 및 최적화 : Heroku CLI를 활용한 PostgreSQL 버전 업그레이드, Heroku Connection을 통한 DB 확인 및 최적화",
    ],
    tech: ["Java", "Spring Boot", "JSP", "Ajax", "Maven", "Salesforce", "Heroku"],
  },
  {
    title: "SK 이천포럼",
    company: "베이직인터내셔널",
    period: "2023.08 - 2023.10",
    description:
      "이천포럼 관리자 페이지의 강연자 등록 시스템 개선 및 공통코드 API 개발했습니다.",
    tasks: [
      "세션 등록 및 강연자 관리 기능 개발 : API를 활용하여 강연자 정보를 조회하고 등록하는 기능을 구현",
      "쿼리 통계 메뉴 개발 : 데이터 조회 및 통계 기능을 구축하여 관리자가 데이터를 쉽게 분석할 수 있도록 지원",
      "동적 쿼리 적용 기능 개발 : 게시판 내에서 직접 쿼리를 작성하면 즉시 페이지에 적용될 수 있도록 기능 구현",
      "공통코드 API 개발 : 시스템 내 일관된 코드 관리를 위해 공통코드 API를 개발 및 적용",
    ],
    tech: ["Java", "Spring Boot", "jQuery", "Maven", "JSP", "Ajax", "Git"],
  },
  {
    title: "SK Magic+",
    company: "베이직인터내셔널",
    period: "2023.06 - 2023.08",
    description:
      "SK Magic+ 관리자 페이지 내 고객들의 1:1 문의내역 게시판 개발했습니다.",
    tasks: [
      "ERD 설계 및 데이터 베이스 구축",
      "문의 내역 데이터 최적화 : 고객 문의사항을 코드화된 질문에 기반하여 key : value 형식의 JSON으로 변환 및 저장, 조회 시 JSON 데이터를 변환하는 API를 개발하여 데이터 관리 및 처리 성능향상",
      "어드민 페이지 개발 : 고객 문의 정보 및 실시간 조회 기능을 구현하고, 통계 데이터를 제공하는 어드민 페이지를 개발하여 데이터 분석 및 관리 효율성 개선",
      "데이터 조회 및 변환 API 개발 : Spring Boot와 MyBatis를 활용하여 JSON 데이터를 변환 및 저장하는 API를 개발하고, 효율적인 데이터 활용을 위한 기능을 구현",
    ],
    tech: ["Java", "Spring Boot", "Mybatis", "Gradle", "Vue3.0", "Quasar2.0", "Git"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-1 w-10 bg-[#87CEFA] mr-4"></div>
        <h2 className="text-3xl font-bold text-[#87CEFA]">프로젝트</h2>
        <div className="h-1 flex-grow bg-gray-100 ml-4"></div>
      </div>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <p className="text-sm text-gray-500">
                    {project.company} | {project.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-700">{project.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-[#87CEFA]">주요 업무</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-gray-700">
                        {task.split('\n').map((line, lineIndex) => (
                            <span key={lineIndex}>
          {line}
                              {lineIndex < task.split('\n').length - 1 && <br />}
        </span>
                        ))}
                      </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => {
                    // 기술 스택별 색상 지정
                    let bgColor = ""
                    if (tech.includes("Java") || tech.includes("Spring") || tech.includes("PHP") || tech.includes("Laravel") || tech.includes("Linux") || tech.includes("MyBatis")) {
                      bgColor = "bg-[#5382a1] hover:bg-[#4a7591]" // Java/Spring 계열 - 파란색
                    } else if (tech.includes("Query") || tech.includes("JPA") || tech.includes("Batch")) {
                      bgColor = "bg-[#ea4c89] hover:bg-[#d43c79]" // 쿼리/DB 관련 - 분홍색
                    } else if (tech.includes("Gradle") || tech.includes("Jenkins") || tech.includes("Maven")) {
                      bgColor = "bg-[#f7b93e] hover:bg-[#e7a92e]" // 빌드 도구 - 노란색
                    } else if (
                      tech.includes("Mysql") ||
                      tech.includes("Maria") ||
                      tech.includes("Mongo") ||
                      tech.includes("Redis")
                    ) {
                      bgColor = "bg-[#4479a1] hover:bg-[#346991]" // 데이터베이스 - 남색
                    } else if (tech.includes("AWS") || tech.includes("Heroku") || tech.includes("Docker") || tech.includes("Salesforce")) {
                      bgColor = "bg-[#ff9900] hover:bg-[#ef8900]" // 클라우드/인프라 - 주황색
                    } else if (tech.includes("Git") || tech.includes("GitHub")) {
                      bgColor = "bg-[#f05032] hover:bg-[#e04022]" // Git 관련 - 빨간색
                    } else if (tech.includes("JSP") || tech.includes("JS") || tech.includes("Vue") || tech.includes("React") || tech.includes("Ajax") || tech.includes("Quasar2.0")
                        || tech.includes("Recharts")) {
                      bgColor = "bg-[#68a063] hover:bg-[#589053]" // 프론트엔드 - 초록색
                    } else {
                      bgColor = "bg-[#6e6e6e] hover:bg-[#5e5e5e]" // 기타 - 회색
                    }

                    return (
                      <Badge
                        key={techIndex}
                        className={`${bgColor} text-white font-medium px-3 py-1 rounded-full transition-all`}
                      >
                        {tech}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
