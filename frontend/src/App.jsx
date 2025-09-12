import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

function App() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleAnalyze() {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Test analysis" }),
      });

      const data = await res.json();
      setResult(data.message);
    } catch (error) {
      console.error(error);
      setResult("Error while analyzing. Please check if the backend is running.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex justify-center items-center p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="flex flex-col items-center space-y-6 p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-800 mb-2">🌿 AgriRakshak</h1>
            <p className="text-gray-600">AI-powered Crop Disease Detection</p>
          </div>
          
          <Button 
            onClick={handleAnalyze} 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Run Analysis"}
          </Button>
          
          {result && (
            <div className="w-full p-4 bg-gray-50 rounded-lg">
              <p className="text-center text-gray-700">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

