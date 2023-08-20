import React, {useState} from "react";


const Item = ({ title, text }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <article className="border-gray-400 border-b hover:bg-gray-300">
      <div>
        <header
          onClick={() => setOpen(!isOpen)}
          className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
        >
          <h3 className="font-semibold text-xl text-red-900">{title}</h3>
          <div className="rounded-full border w-7 h-7 flex items-center justify-center hover:bg-gray-200">
            {!isOpen && (
              <div className="rounded-full text-gray-500 w-7 h-7 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {isOpen && (
              <div className="rounded-full text-gray-500 w-7 h-7 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </header>
        {isOpen && (
          <div className="pl-8 pr-8 py-5 bg-gray-100 text-red-900">
            <p>{text}</p>
          </div>
        )}
      </div>
    </article>
  )
}

const HowWorks = () => (
  <div className="bg-gray-100 flex items-start lg:items-center justify-center pb-10">
    <div className="container mx-auto px-4 h-full">
      <h2 className="text-yellow-600 font-semibold tracking-tight leading-loose text-center text-3xl lg:text-4xl lg:text-5xl my-2 lg:my-4">
        DOAÇÕES: PIX IBF: 63.290.530/0001-31
      </h2>
    </div>
  </div>
)

export default HowWorks