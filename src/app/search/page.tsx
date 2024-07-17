// src/app/search/page.tsx
import SearchResults from "../shared/Components/SearchResults/SearchResults";

export default function page({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Search Results</h1>
      <SearchResults code={searchParams.code} />
    </div>
  );
}
