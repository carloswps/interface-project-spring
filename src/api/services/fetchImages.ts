import ImageClass from "@/types/api/imageTypes";

export async function fetchImages(
  query: string = "",
  extension: string = "",
): Promise<ImageClass[]> {
  // Troca o .env de acordo com a maquina usada
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const delay = (ms: number) => {
    new Promise((resolve) => setTimeout(resolve, ms));
  };

  try {
    await delay(2000);
    const params = new URLSearchParams();
    if (query) {
      params.append("query", query);
    }
    if (extension) {
      params.append("extension", extension);
    }
    // Construindo a URL com os parametros corretamente
    const urlWithParams = `${url}/images${params.toString() ? `?${params.toString()}` : ""}`;
    const response = await fetch(`${urlWithParams}`, {
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
