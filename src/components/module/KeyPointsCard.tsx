import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle } from "lucide-react";

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
      className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-muted/20 overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/50 bg-muted/20 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-bold text-foreground">
          Punti chiave da ricordare
        </span>
      </div>

      {/* Points */}
      <div className="p-5">
        <div className="grid gap-3">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--module-${moduleId}) / 0.3), hsl(var(--module-${moduleId}) / 0.1))`,
                }}
              >
                <CheckCircle
                  className="w-4 h-4"
                  style={{ color: `hsl(var(--module-${moduleId}))` }}
                />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed pt-0.5">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
