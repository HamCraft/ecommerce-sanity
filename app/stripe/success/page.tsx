

import Timer from "@/app/components/Timer";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function stripeSuccess() {
  return (
    <div className="min-h-screen">
      <Image src="/tracking.png" alt={"Tracking"}    height={500} width={500} className="mx-auto" />
      <h1 className="mx-auto text-center mt-10 font-bold text-4xl">Product Live Tracking </h1>
      <Timer/>
      <div className="mt-12 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>
          <Button asChild className="mt-5 mb-8">
            <Link href="/">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
      
    
    
  );
}