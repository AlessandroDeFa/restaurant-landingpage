import React from "react";
import { Header, Footer } from "./index";

const Menu = () => {
  return (
    <>
      <div className="bg-[#140e11]">
        <Header />
      </div>
      <div className="min-h-screen bg-[hsl(350,15%,10%)]">
        <div className="max-w-[95%] my-0 mx-auto w-screen flex flex-col items-center pt-8 pb-20">
          <div className="mb-16 mt-8 before:w-[75%] relative before:bg-[#f8b984] before:absolute before:h-[2px] before:left-[50%] before:bottom-[-0.5rem] before:translate-x-[-50%]">
            <h1 className="text-[#f8b984] text-5xl">MENU</h1>
          </div>
          <div className="w-full flex flex-col items-center lg:items-stretch mt-20 gap-32">
            <div className="border-b-[1px] border-[#f8b984] before:w-full relative before:bg-[#f8b984] before:absolute before:h-[1px] before:bottom-[-0.5rem] before:left-0 pb-12 max-w-[1070px] w-full">
              <div className="text-white text-2xl text-center before:w-full relative before:bg-[#f8b984] before:absolute before:h-[1px] before:bottom-[-0.5rem] before:left-0">
                <h2>Appetizers</h2>
              </div>
              <div className="flex pt-16 lg:flex-col">
                <div className="w-1/2 lg:w-full">
                  <div className="text-white">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Bruschetta</h2>
                      <span className="text-[#f8b984]">€ 8,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Grilled bread topped with fresh tomatoes, basil, and olive
                      oil
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Calamari</h2>
                      <span className="text-[#f8b984]">€ 10,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Fried squid served with marinara sauce
                    </p>
                  </div>
                </div>
                <div className="ml-12 lg:ml-0 lg:pt-8 w-1/2 lg:w-full">
                  <div className="text-white">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Crab Cakes</h2>
                      <span className="text-[#f8b984]">€ 12,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Pan-seared crab cakes served with a lemon aioli
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Stuffed Mushrooms</h2>
                      <span className="text-[#f8b984]">€ 10,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Grilled mushrooms stuffed with a mixture of breadcrumbs,
                      herbs, and cheese
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*----*/}
            <div className="border-b-[1px] border-[#f8b984] before:w-full relative before:bg-[#f8b984] before:absolute before:h-[1px] before:bottom-[-0.5rem] before:left-0 pb-12 max-w-[1070px] w-full">
              <div className="text-white text-2xl text-center before:w-full relative before:bg-[#f8b984] before:absolute before:h-[1px] before:bottom-[-0.5rem] before:left-0">
                <h2>Main Course</h2>
              </div>
              <div className="flex pt-16 lg:flex-col justify-between">
                <div className="w-1/2 lg:w-full">
                  <div className="text-white">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Beef Tenderloin</h2>
                      <span className="text-[#f8b984]">€ 28,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Grilled beef tenderloin served with a red wine reduction
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Chicken Parmesan</h2>
                      <span className="text-[#f8b984]">€ 22,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Breaded chicken topped with marinara sauce and mozzarella
                      cheese
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Salmon </h2>
                      <span className="text-[#f8b984]">€ 24,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Pan-seared salmon served with a lemon butter sauce
                    </p>
                  </div>
                </div>
                <div className="ml-12 lg:ml-0 lg:pt-8 w-1/2 lg:w-full">
                  <div className="text-white">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Vegetable Lasagna</h2>
                      <span className="text-[#f8b984]">€ 20,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Layered pasta with a variety of vegetables and ricotta
                      cheese
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Pork Chop</h2>
                      <span className="text-[#f8b984]">€ 22,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Grilled pork chop served with apple cider glaze
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Paella</h2>
                      <span className="text-[#f8b984]">€ 26,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Traditional Spanish rice dish with seafood, chicken, and
                      chorizo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*----*/}
            <div className="border-b-[1px] border-[#f8b984] before:w-full relative before:bg-[#f8b984] before:absolute before:h-[1px] before:bottom-[-0.5rem] before:left-0 pb-12 max-w-[1070px] w-full">
              <div className="text-white text-2xl text-center before:w-full relative before:bg-[#f8b984] before:absolute before:h-[1px] before:bottom-[-0.5rem] before:left-0">
                <h2>Drinks</h2>
              </div>
              <div className="flex pt-16 lg:flex-col justify-between">
                <div className="w-1/2 lg:w-full">
                  <div className="text-white">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Margarita </h2>
                      <span className="text-[#f8b984]">€ 10,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Classic cocktail made with tequila, lime juice, and triple
                      sec
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Martini </h2>
                      <span className="text-[#f8b984]">€ 12,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Classic cocktail made with gin or vodka and vermouth
                    </p>
                  </div>
                </div>
                <div className="ml-12 lg:ml-0 lg:pt-8 w-1/2 lg:w-full">
                  <div className="text-white">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Old Fashioned</h2>
                      <span className="text-[#f8b984]">€ 14,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      Whiskey-based cocktail with sugar, bitters, and a splash
                      of soda
                    </p>
                  </div>
                  <div className="text-white pt-12">
                    <div className="flex justify-between">
                      <h2 className="text-xl">Long Island Iced Tea</h2>
                      <span className="text-[#f8b984]">€ 13,00</span>
                    </div>
                    <p className="pt-4 lg:text-sm">
                      A mix of vodka, gin, tequila, rum, and triple sec
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
