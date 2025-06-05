import ImageClass from "@/types/api/imageTypes";

export async function fetchImages(): Promise<ImageClass[]> {
  const url = process.env.NEXT_PUBLIC_BASE_URL2;
  const delay = (ms: number) => {
    new Promise((resolve) => setTimeout(resolve, ms));
  };

  try {
    delay(2000);
    const response = await fetch(`${url}/images`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
