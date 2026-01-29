import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface KeyPointsCardProps {
  points: string[];
  moduleId?: number;
}

export const KeyPointsCard = ({ points, moduleId = 1 }: KeyPointsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-xl border border-border bg-card/50 overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/20 flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
          Punti chiave
        </span>
      </div>

      {/* Points */}
      <div className="p-4 space-y-3">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div 
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ 
                backgroundColor: `hsl(var(--module-${moduleId}) / 0.15)`,
                color: `hsl(var(--module-${moduleId}))`
              }}
            >
              <span className="text-xs font-bold">{index + 1}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
