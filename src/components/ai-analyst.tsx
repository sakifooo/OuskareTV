"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideBrainCircuit, LucideSparkles, LucideLoader2, LucideTarget } from "lucide-react";
import { aiTacticalAnalystTool, AITacticalAnalystToolOutput } from "@/ai/flows/ai-tactical-analyst-tool";

export function AITacticalAnalyst() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AITacticalAnalystToolOutput | null>(null);
  const [formData, setFormData] = useState({
    teamA: "الوداد الرياضي",
    teamB: "أولمبيك آسفي",
    matchDate: "الليلة",
    additionalContext: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await aiTacticalAnalystTool(formData);
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-4">
      <Card className="bg-white border-gray-300 shadow-sm rounded-lg overflow-hidden border-t-4 border-[#a11d1d]">
        <CardHeader className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#a11d1d] text-white shadow">
              <LucideBrainCircuit className="w-5 h-5" />
            </div>
            <CardTitle className="text-base font-bold font-headline text-gray-800">التحليل التكتيكي الذكي</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6 space-y-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <Label className="text-[11px] font-bold text-gray-500 px-1">الفريق الأول</Label>
              <Input 
                value={formData.teamA} 
                onChange={(e) => setFormData({...formData, teamA: e.target.value})}
                className="bg-gray-50 border-gray-300 h-10 text-xs focus:ring-[#a11d1d] rounded"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[11px] font-bold text-gray-500 px-1">الفريق الثاني</Label>
              <Input 
                value={formData.teamB} 
                onChange={(e) => setFormData({...formData, teamB: e.target.value})}
                className="bg-gray-50 border-gray-300 h-10 text-xs focus:ring-[#a11d1d] rounded"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[11px] font-bold text-gray-500 px-1">التوقيت</Label>
              <Input 
                value={formData.matchDate} 
                onChange={(e) => setFormData({...formData, matchDate: e.target.value})}
                className="bg-gray-50 border-gray-300 h-10 text-xs focus:ring-[#a11d1d] rounded"
              />
            </div>
            <div className="flex items-end">
              <Button type="submit" disabled={loading} className="w-full h-10 text-xs font-bold font-headline bg-[#a11d1d] hover:bg-[#801616] text-white shadow transition-all rounded">
                {loading ? (
                  <LucideLoader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <LucideSparkles className="w-4 h-4 ml-2" />
                    تحليل المباراة
                  </>
                )}
              </Button>
            </div>
          </form>

          {result && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg space-y-2 border-r-4 border-r-[#a11d1d]">
                <div className="flex items-center gap-2 text-[#a11d1d]">
                  <LucideTarget className="w-4 h-4" />
                  <h4 className="font-bold text-xs font-headline">التوقع</h4>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-700 font-bold">{result.prediction}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg space-y-2 border-r-4 border-r-gray-400">
                <div className="flex items-center gap-2 text-gray-600">
                  <LucideBrainCircuit className="w-4 h-4" />
                  <h4 className="font-bold text-xs font-headline">التحليل الفني</h4>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-600 whitespace-pre-line font-medium">{result.tacticalSummary}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
