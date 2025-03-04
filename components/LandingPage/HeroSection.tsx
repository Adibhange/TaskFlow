import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="flex flex-col pb-6 text-6xl font-extrabold sm:text-7xl lg:text-8xl">
        Turn Chaos into Clarity <br />
        <p>
          with Task<span className="text-sky-500">Flow</span>
        </p>
      </h1>

      <p className="text-muted-foreground mx-auto mb-10 max-w-3xl text-xl">
        Effortlessly manage tasks, collaborate with your team, and hit your
        goals faster. TaskFlow makes productivity simple and stress-free.
      </p>

      <div className="space-x-4">
        <Link href="/onboarding">
          <Button>
            Get Started <ChevronRightIcon size={18} />
          </Button>
        </Link>

        <Link href="#features">
          <Button variant="outline">Learn More</Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
