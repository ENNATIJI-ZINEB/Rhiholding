interface Feature {
  name: string;
  launch: boolean | string;
  momentum: boolean | string;
  dominance: boolean | string;
  personalized?: boolean | string;
}

interface PackageComparisonTableProps {
  features: Feature[];
  className?: string;
}

export default function PackageComparisonTable({
  features,
  className = "",
}: PackageComparisonTableProps) {
  const packages = [
    { name: "Launch", key: "launch" as const },
    { name: "Momentum", key: "momentum" as const },
    { name: "Dominance", key: "dominance" as const },
    { name: "Personalized", key: "personalized" as const },
  ].filter((pkg) =>
    features.some((f) => f[pkg.key] !== undefined)
  );

  const renderCell = (value: boolean | string | undefined) => {
    if (value === undefined) return <td className="p-4"></td>;
    if (typeof value === "boolean") {
      return (
        <td className="p-4 text-center">
          {value ? (
            <svg
              className="w-6 h-6 text-green-500 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <span className="text-gray-400">—</span>
          )}
        </td>
      );
    }
    return <td className="p-4 text-center text-sm">{value}</td>;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead className="bg-primary text-white">
          <tr>
            <th className="p-4 text-left font-heading font-semibold">
              Features
            </th>
            {packages.map((pkg) => (
              <th
                key={pkg.key}
                className="p-4 text-center font-heading font-semibold"
              >
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-background-light" : "bg-white"}
            >
              <td className="p-4 font-medium text-primary">{feature.name}</td>
              {packages.map((pkg) => renderCell(feature[pkg.key]))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

