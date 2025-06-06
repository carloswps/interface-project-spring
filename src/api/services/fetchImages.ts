import ImageClass from "@/types/api/imageTypes";

export async function fetchImages(
  query: string = "",
  selectedFormat: string = "",
): Promise<ImageClass[]> {
  // Troca o .env de acordo com a maquina usada
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const delay = (ms: number) => {
    new Promise((resolve) => setTimeout(resolve, ms));
  };

  try {
    delay(2000);
    const response = await fetch(
      `${url}/images?query=${encodeURIComponent(query)}&format=${encodeURIComponent(selectedFormat)}`,
      {
        method: "GET",
      },
    );
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
