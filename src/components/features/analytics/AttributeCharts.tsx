import React from 'react';
import type { AnalyticsResult } from '../../../types/graph';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

interface AttributeChartsProps {
    analytics: AnalyticsResult;
}

export const AttributeCharts: React.FC<AttributeChartsProps> = ({ analytics }) => {
    // Top 5 attributes
    const attrData = analytics.attributeFrequency.slice(0, 5);
    
    // Communities breakdown
    const commData = analytics.communities.map(c => ({
        name: c.name,
        size: c.members.length,
        color: c.color
    }));

    // Species distribution
    const speciesData = analytics.speciesDistribution;
    const speciesColors: Record<string, string> = {
        'Humano': '#94a3b8', 
        'Deva': '#fbbf24', 
        'Asura': '#f87171', 
        'Rakshasa': '#c084fc', 
        'Naga': '#34d399', 
        'Rishi': '#38bdf8'
    };

    // Lineage breakdown
    const lineageData = analytics.lineageDistribution.slice(0, 5);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-80 flex flex-col">
                <h4 className="font-serif text-lg text-slate-800 mb-4 items-center">Atributos Mais Frequentes</h4>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={attrData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="attribute" width={100} axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                            <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                            <Bar dataKey="count" fill="#38bdf8" radius={[0, 4, 4, 0]}>
                                {attrData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={['#38bdf8', '#818cf8', '#a78bfa', '#fb923c', '#34d399'][index % 5]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-80 flex flex-col">
                <h4 className="font-serif text-lg text-slate-800 mb-4 items-center">Distribuição Ontológica (Espécies)</h4>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={speciesData}
                                dataKey="count"
                                nameKey="species"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                labelLine={false}
                            >
                                {speciesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={speciesColors[entry.species] || '#cbd5e1'} />
                                ))}
                            </Pie>
                            <RechartsTooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-80 flex flex-col">
                <h4 className="font-serif text-lg text-slate-800 mb-4 items-center">Tamanho das Facções</h4>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={commData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                            <YAxis hide />
                            <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                            <Bar dataKey="size" radius={[4, 4, 0, 0]}>
                                {commData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={_entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-80 flex flex-col">
                <h4 className="font-serif text-lg text-slate-800 mb-4 items-center">Top Linhagens/Clãs</h4>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={lineageData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="lineage" width={100} axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                            <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                            <Bar dataKey="count" fill="#10b981" radius={[0, 4, 4, 0]}>
                                {lineageData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'][index % 5]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};
