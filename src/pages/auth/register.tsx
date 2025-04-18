import RegisterFormComp from "@/src/components/auth/RegisterForm";
import BaseLayout from "@/src/components/layouts/base.layout";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <BaseLayout title="Login">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Get Started
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterFormComp />

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            You have an account?
            <Link
              href="/auth/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              login
            </Link>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
