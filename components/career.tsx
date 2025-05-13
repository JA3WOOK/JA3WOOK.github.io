import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Briefcase} from "lucide-react"

const careers = [
    {
        company: "베이직인터내셔널",
        position: "운영유지보수팀/사원",
        period: "2023.06 - 2024.10",
        description:
            "SI 프로젝트 개발, 시스템 운영&유지보수 및 고객 기술 지원 수행",
        // responsibilities: [],
    },
    {
        company: "씨앤비플러스",
        position: "사원",
        period: "2022.05 - 2023.06",
        description:
            "OZ e-Form을 통한 전자문서 디자인 및 Javascript 개발을 담당했습니다.",
        // responsibilities: [],
    },
    {
        company: "클라우다이크",
        position: "사원",
        period: "2021.12 - 2022.04",
        description:
            "자사 클라우드 서비스 솔루션을 제공하는 회사로 운영&유지보수를 담당했습니다.",
        // responsibilities:[]
    },
]

export default function Career() {
    return (
        <section id="career" className="py-16">
            <div className="flex items-center mb-10">
                <div className="h-1 w-10 bg-[#87CEFA] mr-4"></div>
                <h2 className="text-3xl font-bold text-[#87CEFA]">경력</h2>
                <div className="h-1 flex-grow bg-gray-100 ml-4"></div>
            </div>
            <div className="grid gap-8">
                {careers.map((career, index) => (
                    <Card
                        key={index}
                        className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div
                            className="absolute top-0 left-0 w-32 h-32 bg-[#87CEFA] opacity-5 rounded-full -ml-16 -mt-16"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b">
                            <div className="p-3 rounded-full bg-[#e8f5e9]">
                                <Briefcase className="h-8 w-8 text-[#87CEFA]"/>
                            </div>
                            <div>
                                <CardTitle className="text-xl">{career.company}</CardTitle>
                                <p className="text-sm text-gray-500">{career.position}</p>
                            </div>
                            <div
                                className="ml-auto px-3 py-1 bg-[#e8f5e9] text-[#87CEFA] rounded-full text-sm font-medium">
                                {career.period}
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-gray-700 mb-6 border-l-4 border-[#87CEFA] pl-4 py-2 bg-gray-50 italic">
                                {career.description}
                            </p>
                            {/*<div>*/}
                            {/*    <h4 className="font-semibold mb-3 text-[#87CEFA] flex items-center">*/}
                            {/*        <span className="inline-block w-2 h-2 rounded-full bg-[#87CEFA] mr-2"></span>*/}
                            {/*        주요 업무*/}
                            {/*    </h4>*/}
                            {/*    <ul className="list-none pl-5 space-y-2">*/}
                            {/*        {career.responsibilities.map((responsibility, respIndex) => (*/}
                            {/*            <li key={respIndex} className="flex items-start">*/}
                            {/*                <span*/}
                            {/*                    className="inline-block w-1.5 h-1.5 rounded-full bg-[#87CEFA] mr-2 mt-2"></span>*/}
                            {/*                <span>{responsibility}</span>*/}
                            {/*            </li>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
