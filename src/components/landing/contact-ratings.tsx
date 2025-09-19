

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const awards = [
    { title: "Best Software 2025", text: "Top 100", subtext: "Highest Satisfaction Products", color: "black" },
    { title: "Spring 2025", text: "Best Usability", subtext: "", color: "yellow" },
    { title: "Spring 2025", text: "Easiest Admin", subtext: "", color: "yellow" },
    { title: "Best Software 2025", text: "Top 50", subtext: "Collaboration & Productivity Products", color: "black" },
    { title: "Spring 2025", text: "Most Implementable", subtext: "", color: "blue" },
    { title: "Spring 2025", text: "Highest User Adoption", subtext: "", color: "blue" },
];

const logos = [
    { name: 'Wealthsimple', svg: <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="14" fill="currentColor">Wealthsimple</text></svg> },
    { name: 'Geico', svg: <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">GEICO</text></svg> },
    { name: 'Mercury', svg: <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">MERCURY</text></svg> },
    { name: 'Compass', svg: <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">COMPASS</text></svg> },
];

const Badge = ({ title, text, subtext, color }: { title: string, text: string, subtext: string, color: string }) => {
    const colorClasses = {
        black: { bg: "bg-black", border: "border-black" },
        yellow: { bg: "bg-yellow-400", border: "border-yellow-400" },
        blue: { bg: "bg-blue-500", border: "border-blue-500" },
    };

    return (
        <div className="relative bg-card border border-gray-300 w-40 h-48 flex flex-col items-center justify-between pb-4">
            <div className="border-b border-gray-300 w-full text-center py-1">
                <span className="text-xs font-semibold">{title}</span>
                 <span className="text-red-500 font-bold ml-2">G</span>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center text-center px-2">
                <p className="font-bold text-lg">{text}</p>
                {subtext && <p className="text-xs mt-1 text-muted-foreground">{subtext}</p>}
            </div>
             <div className="absolute bottom-0 w-full h-4">
                <div className={`absolute bottom-0 left-0 w-full h-2 ${colorClasses[color as keyof typeof colorClasses]?.bg || 'bg-gray-400'}`}></div>
                <div className={`absolute bottom-2 left-0 w-full h-2 ${colorClasses[color as keyof typeof colorClasses]?.bg || 'bg-gray-400'} opacity-70`}></div>
                <div className={`absolute bottom-4 left-0 w-full h-2 ${colorClasses[color as keyof typeof colorClasses]?.bg || 'bg-gray-400'} opacity-40`}></div>
            </div>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[20px] ${colorClasses[color as keyof typeof colorClasses]?.border || 'border-gray-400'}`}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[78px] border-l-transparent border-r-[78px] border-r-transparent border-b-[18px] border-card"></div>
        </div>
    );
};

export function ContactRatings() {
    return (
        <div className="container mx-auto mt-16">
            <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                         <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold">Rated the best business phone</h2>
                        <p className="text-muted-foreground">
                            With an average 4.7 stars and over 2,900 reviews, Connectify is the #1 business phone in customer satisfaction on G2.
                        </p>
                        <div className="space-y-2">
                            <p className="text-sm font-semibold">Trusted by 60,000+ businesses</p>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center text-muted-foreground">
                                {logos.map(logo => (
                                    <div key={logo.name} className="flex-shrink-0 flex items-center justify-center h-8">
                                      {logo.svg}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                       {awards.map(award => <Badge key={award.text} {...award} />)}
                    </div>
                </div>
            </Card>
        </div>
    )
}
