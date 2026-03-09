import { Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              About Propll.com LLC
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Propll.com LLC is a leading technology services company dedicated
              to helping enterprises navigate the complexities of digital
              transformation. With deep expertise across software engineering,
              AI, cloud, and cybersecurity, we deliver solutions that drive
              measurable business outcomes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of seasoned technologists combines industry knowledge
              with cutting-edge innovation to create solutions that are not just
              functional, but transformative. We believe in building long-term
              partnerships that evolve with your business needs.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "200+", label: "Team Members" },
                { value: "50+", label: "Industries Served" },
                { value: "98%", label: "Client Retention" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card border border-border"
                >
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                description:
                  "Committed to delivering technology solutions that create real business value and competitive advantage.",
              },
              {
                icon: Users,
                title: "Client-Centric",
                description:
                  "Every solution is tailored to your unique challenges, goals, and operational requirements.",
              },
              {
                icon: Award,
                title: "Excellence First",
                description:
                  "We hold ourselves to the highest standards of quality, security, and professional integrity.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Leaders",
                description:
                  "Continuously exploring emerging technologies to keep our clients ahead of the curve.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric to-teal flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
