import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">About Durbar Bagerhat</h1>
        <p className="text-lg text-muted-foreground">Learn more about us</p>
      </header>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Durbar Bagerhat is dedicated to providing the latest news and updates from Bagerhat and beyond. Our mission is to keep our readers informed and engaged with high-quality journalism.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Repeat this block for each team member */}
          <Card>
            <CardContent>
              <img src="/path/to/team-member.jpg" alt="Team Member" className="w-full h-auto" />
              <h3 className="text-xl font-semibold">Team Member Name</h3>
              <p className="text-muted-foreground">Short bio of the team member...</p>
            </CardContent>
          </Card>
          {/* End of team member block */}
        </div>
      </section>
    </div>
  );
};

export default About;