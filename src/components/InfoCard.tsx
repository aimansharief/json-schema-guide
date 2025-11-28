import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Info, CheckCircle2, AlertCircle, Shield } from "lucide-react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "security";
}

export const InfoCard = ({ title, children, variant = "info" }: InfoCardProps) => {
  const icons = {
    info: <Info className="w-5 h-5 text-info" />,
    success: <CheckCircle2 className="w-5 h-5 text-success" />,
    warning: <AlertCircle className="w-5 h-5 text-warning" />,
    security: <Shield className="w-5 h-5 text-accent" />,
  };

  const borders = {
    info: "border-l-4 border-info",
    success: "border-l-4 border-success",
    warning: "border-l-4 border-warning",
    security: "border-l-4 border-accent",
  };

  return (
    <Card className={`p-4 ${borders[variant]}`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{icons[variant]}</div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </Card>
  );
};
