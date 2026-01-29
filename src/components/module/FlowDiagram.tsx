import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowDown, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

interface FlowNode {
  id: string;
  type: "start" | "action" | "decision" | "end";
  text: string;
  yes?: string;
  no?: string;
}

interface FlowDiagramProps {
  title: string;
  nodes: FlowNode[];
  moduleId: number;
}

export const FlowDiagram = ({ title, nodes, moduleId }: FlowDiagramProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl border border-border bg-card"
    >
      <h4 className="text-sm font-semibold text-foreground mb-6 text-center">{title}</h4>

      <div className="flex flex-col items-center space-y-3">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.3 }}
              className={cn(
                "relative px-6 py-3 text-sm font-medium text-center",
                node.type === "start" && "rounded-full bg-primary text-primary-foreground",
                node.type === "action" && "rounded-lg border-2 border-border bg-muted/50 text-foreground",
                node.type === "decision" && "rounded-lg rotate-0 bg-amber-500/10 border-2 border-amber-500/30 text-amber-200",
                node.type === "end" && "rounded-full border-2 text-foreground"
              )}
              style={{
                borderColor: node.type === "end" ? `hsl(var(--module-${moduleId}))` : undefined,
                backgroundColor: node.type === "end" ? `hsl(var(--module-${moduleId}) / 0.1)` : undefined
              }}
            >
              {node.type === "decision" && (
                <HelpCircle className="absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
              )}
              {node.text}
            </motion.div>

            {/* Arrow or decision branches */}
            {index < nodes.length - 1 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.1 }}
                className="my-2"
              >
                {node.type === "decision" ? (
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-xs text-green-500">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Sì</span>
                      </div>
                      <ArrowDown className="w-4 h-4 text-border" />
                    </div>
                  </div>
                ) : (
                  <ArrowDown className="w-4 h-4 text-border" />
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
