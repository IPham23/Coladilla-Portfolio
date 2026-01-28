import { education } from "../data/education";

export default function Education() {
    return(
        <>
            <div className="space-y-12">
                {education.map((education, index) => (
                    <div key={index} className="border-l-4 border-(--primary) pl-6 py-6">
                        <h2 className="text-xl font-semibold">
                            {education.degree}
                        </h2>
                        <h3 className="text-md opacity-80">
                            {education.school} | {education.schoolDuration}
                        </h3>
                        <h4 className="pt-4 font-medium pb-1">{education.projectTitle}</h4>
                        <p className="inline-block border-2 text-sm py-1 px-3">{education.projectRole}</p>
                        <ul className="mt-4 ml-4 list-disc list-inside space-y-2">
                            {education.projectDescription.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 italic">
                            <span className="not-italic font-medium text-">Technologies Used:</span>{" "}
                            <span className="text-sm">{education.techUsed.join(", ")}</span>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}