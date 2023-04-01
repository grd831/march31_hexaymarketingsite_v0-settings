export default function WithTest() {
    return (
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pt-4 lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-medium leading-7 text-transparent bg-gradient-to-br from-blue-400 to-blue-900 bg-clip-text">Deploy faster</h2>
                <p className="mt-2 text-3xl font-medium text-gray-900 sm:text-4xl">A better workflow</p>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex rounded-md bg-gradient-to-br from-blue-400 to-blue-900 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </div>
                <figure className="pl-8 mt-16 text-gray-900 border-l border-gray-300">
                  <blockquote className="text-base leading-7">
                    <p>
                      “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                      dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                      tristique.”
                    </p>
                  </blockquote>
                  <figcaption className="flex mt-6 text-sm leading-6 gap-x-4">
                    <div>
                      <span className="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    )
  }
  