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
    <div
      className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-lg p-4 h-full overflow-auto border border-2"
      style={{ width: "300px" }}
    >
      <nav className="bg-gradient-to-br from-slate-50 to-slate-100 z-10 pb-4">
        <h2 className="text-lg font-semibold  text-black">Build Steps</h2>
      </nav>
      <div className="space-y-2 text-sm">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`p-1 rounded-lg cursor-pointer transition-colors ${
              currentStep === step.id
                ? "bg-gray-300 border border-gray-700"
                : "hover:bg-gray-300" // Light gray on hover
            }`}
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex items-center gap-2">
              {step.status === "completed" ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : step.status === "in-progress" ? (
                <Clock className="w-5 h-5 text-blue-400" />
              ) : (
                <Circle className="w-5 h-5 text-gray-600" />
              )}
              <h3 className="font-medium text-black">{step.title}</h3>
            </div>
            <p className="text-sm text-black mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
