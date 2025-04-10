import React from "react";
import Link from "next/link";
import LoginFormComp from "@/src/components/auth/LoginForm";
import type { Metadata } from "next";
import BaseLayout from "@/src/components/layouts/base.layout";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to access your account and manage your preferences. Secure authentication for registered users.",
};

export default function LoginPage() {
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
            Sign in to your accountd
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginFormComp />

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <Link
              href="/auth/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
