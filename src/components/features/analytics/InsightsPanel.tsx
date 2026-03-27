import React from 'react';
import type { AnalyticsResult } from '../../../types/graph';
import { Lightbulb, Users, ShieldAlert, Zap } from 'lucide-react';

interface InsightsPanelProps {
    analytics: AnalyticsResult;
}

export const InsightsPanel: React.FC<InsightsPanelProps> = ({ analytics }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-serif text-slate-800 mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                Insights Mitológicos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-800">{analytics.totalNodes}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Personagens</div>
                    </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-rose-100 text-rose-600 rounded-full">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-800">{analytics.totalLinks}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Conexões Mapeadas</div>
                    </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                        <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-800">{analytics.avgDegree}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Grau Médio de Relação</div>
                    </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg flex flex-col justify-center">
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Mais Conectado</div>
                    <div className="text-lg font-bold text-slate-800 truncate">
                        {analytics.mostConnected[0]?.name || '-'}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-semibold text-slate-700 uppercase text-sm tracking-wider">Descobertas Algorítmicas</h4>
                {analytics.insights.map((insight, idx) => (
                    <div key={idx} className="p-4 border-l-4 border-amber-400 bg-amber-50/50 rounded-r-lg">
                        <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: insight.replace(/(\*\*.+?\*\*)/g, '<strong>$1</strong>') }} />
                    </div>
                ))}
            </div>
        </div>
    );
};
