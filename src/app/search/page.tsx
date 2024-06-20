import { Suspense } from "react";
import SearchResults from "../shared/Components/SearchResults/SearchResults";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
};

export default page;
