import React from "react";

const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative"></span>
            </span>{" "}
            Random FAQ
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">What is Textile ?</p>
              <p className="text-gray-700">
                Textile is an umbrella term that includes various fiber-based
                materials, including fibers, yarns, filaments, threads,
                different fabric types, etc.
                <br />
                <br />
                Textiles, especially fabrics the fundamental component of a
                ready made garment, because it is the basic raw material of a
                garment
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What Is Textile Engineering?
              </p>
              <p className="text-gray-700">
                Textile engineering is an area of engineering that uses
                scientific and engineering principles to produce or improve
                textile products, such as apparel, upholstery or materials for
                medical devices.
                <br />
                <br />A textile engineer is a professional who researches and
                studies textile materials, including fibers, yarn and fabrics,
                to design quality products and determine new production
                techniques
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How many departments of textile engineering?
              </p>
              <p className="text-gray-700">
                In English in TE program is divided into four core fields of
                study: yarn manufacturing engineering, fabric manufacturing
                engineering, wet processing engineering and apparel
                manufacturing engineering.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Cope of Textile in Banglades?
              </p>
              <p className="text-gray-700">
              Bangladesh’s  to grab $180bn technical textile market
                <br />
                <br />
                According to the Export Promotion Bureau (EPB) data, in the FY 2020-21, Bangladesh exported $618 million worth of PPEs and masks, which grew by 23% more than the previous year.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
               How many textile industries in Bangladesh?
              </p>
              <p className="text-gray-700">
              Since 1960, their excellence has grown and made our export business and garment trade very strong in the world economy. There are almost 5000 Readymade garments industries in Bangladesh.
                <br />
                <br />
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Comming soon!
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
