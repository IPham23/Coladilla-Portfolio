import { experience } from "../data/experience";

export default function Experience() {
    return(
        <>
            <div className="space-y-12">
                {experience.map((experience, index) => (
                    <div key={index} className="border-l-4 border-(--primary) pl-6 py-6">
                        <h2 className="text-xl font-semibold">
                            {experience.position}
                        </h2>
                        <h3 className="opacity-80">
                            {experience.company} | {experience.duration}
                        </h3>

                        <ul className="mt-4 ml-8 list-disc list-outside space-y-2">
                            {experience.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}