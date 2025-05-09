import React from "react";
import { CheckCircle, Circle, Clock } from "lucide-react";
import { Step } from "../types";

interface StepsListProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export function StepsList({ steps, currentStep, onStepClick }: StepsListProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 h-full overflow-auto border border-gray-700">
      <nav className="pb-2">
        <h2 className="text-lg font-semibold text-white">Build Steps</h2>
      </nav>
      <hr className="border-gray-600 mb-2" />
      <div className="space-y-1 text-sm overflow-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`p-2 rounded-lg cursor-pointer transition-colors ${
              currentStep === step.id
                ? "bg-gray-600 border border-gray-400"
                : "hover:bg-gray-500" // Darker gray on hover
            }`}
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex items-center gap-2 mb-2">
              {step.status === "completed" ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : step.status === "in-progress" ? (
                <Clock className="w-5 h-5 text-yellow-400" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300" />
              )}
              <h3 className="font-medium text-white">{step.title}</h3>
            </div>
            <p className="text-sm text-gray-200 mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
