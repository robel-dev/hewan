"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const router = useRouter();
  const [basicData, setBasicData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    setBasicData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem("contactBasicData", JSON.stringify(basicData));
    router.push("/messages-detail");
  };

  return (
    <main className="min-h-screen bg-[#faf9f8] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
          Contact Us
        </h1>
        <form onSubmit={handleNext} className="space-y-6">
          <div>
            <Label>Name</Label>
            <Input name="name" value={basicData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" value={basicData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label>Event Type</Label>
            <Input name="eventType" value={basicData.eventType} onChange={handleChange} required />
          </div>
          <div>
            <Label>Message</Label>
            <Input name="message" value={basicData.message} onChange={handleChange} required />
          </div>
          <Button type="submit">Next</Button>
        </form>
      </div>
    </main>
  );
} 