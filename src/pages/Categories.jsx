import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Categories = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">News Categories</h1>
        <p className="text-lg text-muted-foreground">Explore news by categories</p>
      </header>

      <section className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Repeat this block for each category */}
          <Card>
            <CardHeader>
              <CardTitle>Category Name</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Short description of the category...</p>
              <Button variant="link" className="mt-2">View Articles</Button>
            </CardContent>
          </Card>
          {/* End of category block */}
        </div>
      </section>
    </div>
  );
};

export default Categories;