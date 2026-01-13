
import { GoogleGenAI, Type } from "@google/genai";
import { NewsItem, Category } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const fetchNewsForCategory = async (category: Category): Promise<NewsItem[]> => {
  const modelName = 'gemini-3-flash-preview';
  const prompt = `Generate 6 high-impact breaking news headlines and summaries for the ${category} category in a professional, financial news style like MetaMedia News. 
  Include current market trends. Return a JSON array of objects with fields: id, category, headline, summary, timestamp, imageUrl. 
  Use placeholder image URLs like 'https://picsum.photos/seed/[random]/800/450'.`;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              category: { type: Type.STRING },
              headline: { type: Type.STRING },
              summary: { type: Type.STRING },
              timestamp: { type: Type.STRING },
              imageUrl: { type: Type.STRING },
            },
            required: ["id", "category", "headline", "summary", "timestamp", "imageUrl"],
          },
        },
      },
    });

    const text = response.text || "[]";
    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching news from Gemini:", error);
    return [];
  }
};
