import { GoogleGenAI, Type } from "@google/genai";
import { AIQuoteEstimation } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini Client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for this frontend-only demo, we use the env var directly as per instructions.
const ai = new GoogleGenAI({ apiKey });

export const generateSmartQuote = async (issueDescription: string): Promise<AIQuoteEstimation> => {
  if (!apiKey) {
    // Fallback if no API key is present for demo purposes
    console.warn("No API Key provided. Returning mock data.");
    return {
      likelyIssue: "Preliminary assessment requires on-site inspection.",
      severity: "Medium",
      estimatedCostRange: "$80 - $200",
      professionalAdvice: "Please contact our support team directly for an accurate quote.",
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The customer has reported the following home maintenance issue: "${issueDescription}". 
      Analyze this issue acting as a professional senior tradesman (Plumber/Electrician/HVAC tech).
      Provide a preliminary assessment.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            likelyIssue: { type: Type.STRING, description: "A brief technical name for the potential problem." },
            severity: { type: Type.STRING, enum: ["Low", "Medium", "High", "Critical"] },
            estimatedCostRange: { type: Type.STRING, description: "A realistic price range for repairs (e.g., '$150 - $300')." },
            professionalAdvice: { type: Type.STRING, description: "Actionable advice for the homeowner." }
          },
          required: ["likelyIssue", "severity", "estimatedCostRange", "professionalAdvice"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIQuoteEstimation;
  } catch (error) {
    console.error("Gemini Quote Error:", error);
    // Graceful fallback
    return {
      likelyIssue: "Analysis unavailable currently.",
      severity: "Medium",
      estimatedCostRange: "Contact for pricing",
      professionalAdvice: "We couldn't process your request automatically. Please call our hotline.",
    };
  }
};