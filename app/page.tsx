import Card from "@/src/components/card";

const ProjectsData = [
  {
    title: "Lunan",
    description: "Online Consultation",
    url: "#",
  },
  {
    title: "Tracker",
    description: "Resturant Tracker",
    url: "#",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col max-w-xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-xl shadow-xs">
          <figure className="mb-3">
            <h1 className="text-2xl font-semibold tracking-tight text-heading leading-8">
              Mark Philip Parayno
            </h1>
            <figcaption>Full Stack Developer</figcaption>
          </figure>
          <p className="text-body mb-6">
            Software Engineer that resides in Metro Manila, Philippines. That
            has already 2 years experience
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Read more
            <svg
              className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
        <div className="mt-5 flex flex-row gap-4">
          {ProjectsData.map((data, key) => (
            <Card
              key={key}
              title={data.title}
              url={data.url}
              description={data.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
