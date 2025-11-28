import { ReactNode } from "react";

interface SchemaSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
}

export const SchemaSection = ({ title, description, children, id }: SchemaSectionProps) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-lg">{description}</p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
};
