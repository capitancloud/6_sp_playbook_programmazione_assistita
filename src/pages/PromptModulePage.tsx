import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getPromptModuleBySlug } from "@/data/prompt-engineering-modules";
import { BookOpen, Wand2 } from "lucide-react";

const PromptModulePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const module = slug ? getPromptModuleBySlug(slug) : undefined;

  if (!module) {
    return <Navigate to="/" replace />;
  }

  const Icon = module.icon;

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="relative py-12 px-8 border-b border-border overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="prompt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-accent"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#prompt-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Wand2 className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Prompt Engineering</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Modulo P{module.id}</span>
          </div>

          {/* Title section */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {module.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                {module.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content area */}
      <div className="p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-card to-accent/5 border border-accent/20 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Contenuti in preparazione
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I contenuti dettagliati di questo modulo sono in fase di sviluppo. 
              Torna presto per trovare tecniche pratiche di prompt engineering, 
              esempi e guide interattive.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PromptModulePage;
