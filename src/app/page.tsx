import GalleryPage from "@/app/gallery/page";
import { Suspense } from "react";
import Loading from "@/components/utils/loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <GalleryPage />
    </Suspense>
  );
}
