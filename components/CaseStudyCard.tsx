interface CaseStudyCardProps {
  clientName: string;
  before: string[];
  after: string[];
  outcome: string;
  className?: string;
}

export default function CaseStudyCard({
  clientName,
  before,
  after,
  outcome,
  className = "",
}: CaseStudyCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 ${className}`}
    >
      <h3 className="text-2xl font-heading font-bold text-primary mb-6">
        {clientName}
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-red-600 mb-3 flex items-center">
            <span className="mr-2">Before</span>
          </h4>
          <ul className="space-y-2">
            {before.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-red-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-green-600 mb-3 flex items-center">
            <span className="mr-2">After</span>
          </h4>
          <ul className="space-y-2">
            {after.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-green-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t pt-4">
        <p className="text-gray-700">
          <span className="font-semibold text-primary">Outcome:</span> {outcome}
        </p>
      </div>
    </div>
  );
}

