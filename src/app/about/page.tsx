import React from "react";
import { BsBuildings, BsTools } from "react-icons/bs";

const Page: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Companys Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Variety Flooring Works was established in 1983 to fill the needs of
            Granolithic and Terrazzo works in the local market. In 1997 the
            company entered in the then niche market of granite and marble. As a
            natural extension of a successful custom-building business, Variety
            quickly gained and has maintained a reputation for importing and
            distributing only the highest quality marble and granite. Over the
            years, we have developed and nurtured strong relationships with
            suppliers around the world, which enables us to hand-select and
            purchase only the best natural stones from the world&apos;s foremost
            quarries and companies. As the need for change in customer demand we
            entered in the market of Tiles and Sanitary ware in 2007. Most
            recently in the year 2019 we entered the market of engineered stone
            and sintered stone. It is our commitment to quality, service and
            innovation that sets us apart from other competitors. We have two
            major stores in Kenya located in Nairobi and Mombasa. We also
            distribute our products and offer services in most cities in Kenya.
            Some of the products we have are:
            <strong>
              Tiles, Sanitary Ware, Granite, Marble, Quartz, Sintered Stone,
              White Cement
            </strong>
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul>
                  <li className="mb-2">
                    <h3>QUALITY PRODUCTS AND SERVICES</h3>
                    <p>
                      Whether your order is small or big, we guarantee the same
                      customer service and offer quality products.
                    </p>
                  </li>
                  <li className="mb-2">
                    <h3>WIDE RANGE OF PRODUCTS</h3>
                    <p>No job is small or big.</p>
                    <p>We stock wide range of products to choose from.</p>
                  </li>
                  <li className="mb-2">PRICE COMPETITIVE</li>
                  <li className="mb-2">DELIVERY AT A COST</li>
                  <li className="mb-2">
                    <h3>SERVICE</h3>
                    <p>
                      Experienced and Helpful Staff to guide you in making the
                      right selection.
                    </p>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Values
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We value integrity, innovation, and customer satisfaction above
                all else.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Terms & Policies
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Policies and Terms
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Review our policies and terms to understand how we operate.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Privacy Policy
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Variety Flooring Works places high value on the privacy of our
                  customers and all other persons and entities who have business
                  dealings and/or relationships with us.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Purpose
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  As a part of our sales and service we collect personal
                  information to the reasonable level necessary to conduct
                  normal business.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Consent
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  All provision by you of personal information to ; enact
                  transactions, contact us about a product, make an enquiry,
                  place an order, arrange for a delivery or return a purchase,
                  we imply that you consent to our collecting it and using it
                  for that specific reason only.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Use and Disclosure of Personal Information
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We will only use or disclose personal information in our
                  possession or under our control.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Protection and Security of Personal Information
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  By using this site, you represent that your minimum age is of
                  majority in your state or area of use, Variety takes no
                  responsibility for privacy policies of sites you have accessed
                  by using any links on the Variety website.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Use and Disclosure of Personal Information
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We will only use or disclose personal information in our
                  possession or under our control.
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Our Services
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  What We Offer
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  We provide a wide range of services to meet all your flooring
                  and construction needs.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <BsTools className="h-6 w-6" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Installation Services
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Our experienced team of professionals can install all
                      types of flooring, including tiles, hardwood, laminate,
                      and more.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <BsBuildings className="h-6 w-6" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Construction Services
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      We offer a range of construction services, including
                      renovation, remodeling, and new construction projects.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Questions and Contract Information
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  If you need to: access, correct, amend or delete any personal
                  information we have about you, register a complaint, or simply
                  want more information contact us.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
