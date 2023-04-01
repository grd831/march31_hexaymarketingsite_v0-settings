import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function DesktopHero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[100rem] w-[100rem] flex-none stroke-gray-200" aria-hidden="true">
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-neutral-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
            </svg>
          </div>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="px-3 py-1 font-medium leading-6 text-orange-500 rounded-full text-md bg-orange-500/10 ring-1 ring-inset ring-orange-500/10">
                What's new
              </span>
            </a>
          </div>
          <h1 className="mt-8 text-5xl font-medium tracking-tight bg-gradient-to-br from-slate-500 to-slate-900 bg-clip-text text-transparent sm:text-6xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-lg flex items-center bg-gradient-to-br from-slate-500 to-slate-900 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-br from-slate-500 to-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-medium leading-6 text-slate-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
