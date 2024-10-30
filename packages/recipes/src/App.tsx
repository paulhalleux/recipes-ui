import { Sidebar } from "@recipes/ui";
import { BookIcon, CroissantIcon } from "lucide-react";

export function App() {
  return (
    <div className="h-screen">
      <Sidebar>
        <Sidebar.Group title="Recipes">
          <Sidebar.Item className="flex gap-2 items-center">
            <BookIcon size="14" />
            Recipes
          </Sidebar.Item>
          <Sidebar.Item className="flex gap-2 items-center">
            <CroissantIcon size="16" />
            Ingredients
          </Sidebar.Item>
        </Sidebar.Group>
      </Sidebar>
    </div>
  );
}
