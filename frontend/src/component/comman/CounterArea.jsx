function CounterArea() {
  const data = [
    { title: "Transactions every 24 hours", value: "44 million" },
    { title: "Assets under holding", value: "$119 trillion" },
    { title: "New users annually", value: "46,000" },
    { title: "Active users worldwide", value: "1.2 million" },
  ];

  return (
    <section className="bg-color py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <dl className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-2 sm:gap-y-3 p-3 sm:p-4 rounded-md hover:shadow-md transition"
            >
              <dd className="text-xl sm:text-3xl lg:text-5xl font-semibold text-gray-900">
                {item.value}
              </dd>
              <dt className="text-xs sm:text-base text-gray-600">
                {item.title}
              </dt>
            </div>
          ))}

        </dl>
      </div>
    </section>
  );
}

export default CounterArea;