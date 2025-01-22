"use client";

import Stack from "@/components/ui/stack";
import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <Stack className="w-full py-12 lg:py-32 bg-secondary min-h-14 justify-center">
      <div className="max-w-sm grid grid-cols-2 gap-4">
        <Stack
          variant="vertical"
          className="justify-center items-center cursor-default"
        >
          <h1 className="hover:animate-bounce">
            <CountUp duration={2.5} end={280} useEasing delay={0.5} />
          </h1>
          <p className="italic">Partner Schools</p>
        </Stack>
        <Stack
          variant="vertical"
          className="justify-center items-center cursor-default"
        >
          <h1 className="hover:animate-bounce">
            <CountUp duration={2.5} end={4326} useEasing />
          </h1>
          <p className="italic">Successful Applicants</p>
        </Stack>
      </div>
    </Stack>
  );
}

export default Stats;
