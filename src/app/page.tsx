import Head from "next/head";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-6xl font-bold">Coming Soon</h1>

        <p className="mt-3 text-2xl">
          Our website is under construction. Stay tuned for the launch!
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 sm:w-full"
          >
            <h3 className="text-2xl font-bold">Follow Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Stay up-to-date with our latest news and updates.
            </p>
          </a>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl sm:w-full">
            <h3 className="text-2xl font-bold">What We Supply</h3>
            <p className="mt-4 text-xl">
              Tiles, Taps, Mixers, Sinks, Marble, Granite, Toilets, Jacuzzis,
              Cubicles
            </p>
            <p className="mt-2 text-xl">
              Contact us at{" "}
              <a
                href="mailto:info@variery.co.ke"
                className="text-blue-600 hover:text-blue-800"
              >
                info@variery.co.ke
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
