"use client";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../ui/custom-button";
import ArrowIcon from "../icons/ArrowIcon";
export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div
              className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              aria-hidden="true"
            >
              <h1 className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8  font-serif ">
                404
              </h1>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl text-black sm:text-3xl font-medium mb-4">
                Кажется, вы заблудились
              </h3>
              <p className="mb-10 text-black sm:mb-10">
                Страницу, которую вы ищете, не существует!
              </p>

              <CustomButton
                variant="base1"
                size="default"
                onClick={() => navigate("/")}
              >
                Вернуться на главную
                <ArrowIcon/>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
