import { features } from "@/data/features";
import { Card, CardContent } from "../ui/card";

const Features = () => {
  return (
    <section id="features" className="px-5 py-20">
      <div className="container mx-auto">
        <h3 className="mb-12 text-center text-4xl font-bold">Key Features</h3>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="">
              <CardContent>
                <feature.icon className="mb-4 size-10" />
                <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
