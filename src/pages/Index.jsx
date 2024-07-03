import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Durbar Bagerhat</h1>
        <p className="text-lg text-muted-foreground">Your source for the latest news</p>
      </header>

      <section className="space-y-4">
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </section>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Featured News</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <img src="/path/to/featured-image.jpg" alt="Featured News" className="w-full h-auto" />
              <h2 className="text-2xl font-semibold">Headline of the Featured News</h2>
              <p className="text-muted-foreground">Short description of the featured news...</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest News</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Repeat this block for each news item */}
          <Card>
            <CardContent>
              <img src="/path/to/news-thumbnail.jpg" alt="News Thumbnail" className="w-full h-auto" />
              <h3 className="text-xl font-semibold">News Title</h3>
              <p className="text-muted-foreground">Short description of the news...</p>
            </CardContent>
          </Card>
          {/* End of news item block */}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {/* Repeat this block for each category */}
          <Button variant="outline">Category 1</Button>
          <Button variant="outline">Category 2</Button>
          <Button variant="outline">Category 3</Button>
          {/* End of category block */}
        </div>
      </section>
    </div>
  );
};

export default Index;