import { LucideIcon } from "lucide-react";

interface RiskCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const RiskCard = ({ icon: Icon, title, description }: RiskCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
