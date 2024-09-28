import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stuff = [
  {
    title: "Basic Git Commands",
    description: "Getting Started with Git: Key Commands",
    image: "basic-git-commands",
    link: {
      label: "Slides",
      href: "https://docs.google.com/presentation/d/1RTvh2S90l8zKlEsTEumrwm4Wwx7iLMOGHRuMRvkhLHw/edit?usp=sharing",
    },
  },
];

export const metadata = {
  title: "Stuff",
};

export default function Page() {
  return (
    <div className="space-y-4">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Stuff
      </h2>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
        {stuff.map((s, idx) => (
          <Card key={idx} className="h-fit rounded-[20px]">
            <CardContent className="p-0 flex flex-col gap-y-2">
              <Image
                src={`/images/${s.image}.png`}
                className="w-full rounded-t-[20px]"
                alt={s.title}
                width="3200"
                height="1718"
              />
              <div className="p-2 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </div>
              </div>
              <div className="px-2 pb-2">
                <Link
                  href={s.link.href}
                  className={buttonVariants({ className: "w-full" })}
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> {s.link.label}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
