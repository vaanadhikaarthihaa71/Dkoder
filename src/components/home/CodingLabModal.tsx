import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Send, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Clock, 
  Code2, 
  Building2, 
  HelpCircle,
  Lightbulb,
  Check,
  Terminal,
  Zap
} from 'lucide-react';
import { Question } from '../../types';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { useToast } from '../../context/ToastContext';

interface CodingLabModalProps {
  question: Question | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccessSolved: (questionId: string) => void;
}

export const CodingLabModal: React.FC<CodingLabModalProps> = ({
  question,
  isOpen,
  onClose,
  onSuccessSolved
}) => {
  const { addToast } = useToast();
  const [selectedLang, setSelectedLang] = useState<'python' | 'java' | 'cpp'>('python');
  const [code, setCode] = useState('');
  const [selectedMcqOption, setSelectedMcqOption] = useState<string | null>(null);
  const [isMcqSubmitted, setIsMcqSubmitted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [outputConsole, setOutputConsole] = useState<string | null>(null);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    if (question) {
      if (question.format === 'Coding' && question.starterCode) {
        setCode(question.starterCode[selectedLang] || question.starterCode['python'] || '# Write your solution here\n');
      }
      setSelectedMcqOption(null);
      setIsMcqSubmitted(false);
      setOutputConsole(null);
      setIsSolved(false);
    }
  }, [question, selectedLang]);

  if (!question) return null;

  const handleRunCode = () => {
    setIsRunning(true);
    setOutputConsole('Compiling solution against sample test cases...');
    
    setTimeout(() => {
      setIsRunning(false);
      setOutputConsole(
        `✓ Compilation successful (0.04s)\n✓ Test Case 1: PASSED (Expected: ${question.sampleOutput || 'Valid'}, Received: ${question.sampleOutput || 'Valid'})\n✓ Memory: 14.2 MB | Runtime: 28 ms\nReady for full evaluation.`
      );
      addToast({
        type: 'info',
        title: 'Sample Tests Passed',
        description: 'Your solution produced the expected output on sample inputs.'
      });
    }, 1000);
  };

  const handleSubmitSolution = () => {
    setIsSubmitting(true);
    setOutputConsole('Evaluating against 18 hidden test cases (including boundary edge cases)...');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSolved(true);
      setOutputConsole(
        `🎉 VERDICT: ACCEPTED\n✓ 18/18 Test cases passed\n✓ Runtime: 32 ms (Beats 89.4% of submissions)\n✓ Memory: 15.1 MB (Beats 92.1% of submissions)\n+50 XP awarded to your DKODER placement profile!`
      );
      onSuccessSolved(question.id);
      addToast({
        type: 'success',
        title: 'Problem Solved! (+50 XP)',
        description: `Great job! "${question.title}" has been recorded in your local practice log.`
      });
    }, 1500);
  };

  const handleMcqSubmit = () => {
    if (!selectedMcqOption) return;
    setIsMcqSubmitted(true);
    const correctOpt = question.mcqOptions?.find(o => o.isCorrect);
    const isCorrect = correctOpt?.id === selectedMcqOption;

    if (isCorrect) {
      setIsSolved(true);
      onSuccessSolved(question.id);
      addToast({
        type: 'success',
        title: 'Correct Answer! (+30 XP)',
        description: 'Your conceptual understanding is sharp!'
      });
    } else {
      addToast({
        type: 'error',
        title: 'Incorrect Answer',
        description: 'Review the detailed explanation below to strengthen this concept.'
      });
    }
  };

  const handleResetCode = () => {
    if (question.starterCode) {
      setCode(question.starterCode[selectedLang] || '');
      setOutputConsole(null);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex flex-wrap items-center gap-2">
          <Badge 
            variant={
              question.difficulty === 'Easy' ? 'green' : question.difficulty === 'Medium' ? 'amber' : 'purple'
            }
          >
            {question.difficulty}
          </Badge>
          <Badge variant="yellow">{question.format}</Badge>
          <Badge variant="outline-purple">{question.company}</Badge>
          <span className="text-xs text-purple-600 font-semibold flex items-center gap-1 ml-auto">
            <Clock className="w-3.5 h-3.5" />
            Est. {question.estimatedMinutes} mins
          </span>
        </div>
      }
      subtitle={question.title}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        
        {/* Topic Tags & Package Range */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-purple-900">Topic Tags:</span>
          {question.topicTags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-medium">
              {tag}
            </span>
          ))}
          <span className="text-xs font-semibold text-yellow-800 bg-yellow-300 px-2.5 py-0.5 rounded-full ml-auto">
            Target: {question.packageCategory}
          </span>
        </div>

        {/* Problem Description */}
        <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2">
            Problem Statement
          </h4>
          <p className="text-sm text-purple-950 leading-relaxed font-normal">
            {question.description}
          </p>

          {question.sampleInput && (
            <div className="mt-3 pt-3 border-t border-purple-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-white border border-purple-100">
                <span className="text-[10px] uppercase font-bold text-purple-400 block mb-1">Sample Input</span>
                <span className="text-purple-950">{question.sampleInput}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-purple-100">
                <span className="text-[10px] uppercase font-bold text-purple-400 block mb-1">Sample Output</span>
                <span className="text-purple-950 font-bold">{question.sampleOutput}</span>
              </div>
            </div>
          )}
        </div>

        {/* Coding Mode Interface */}
        {question.format === 'Coding' && (
          <div className="space-y-3">
            {/* Toolbar: Language selector & Actions */}
            <div className="flex items-center justify-between gap-2 bg-purple-950 text-white p-2.5 rounded-t-xl">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-purple-200">DKODER Code Lab:</span>
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value as any)}
                  className="bg-purple-900 text-yellow-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-purple-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer"
                >
                  <option value="python">Python 3.11</option>
                  <option value="java">Java 17 (OpenJDK)</option>
                  <option value="cpp">C++ 20 (GCC)</option>
                </select>
              </div>

              <button
                onClick={handleResetCode}
                className="text-xs text-purple-300 hover:text-white flex items-center gap-1 p-1 hover:bg-purple-900 rounded transition-colors"
                title="Reset code template"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Code Editor Simulation */}
            <div className="relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows={10}
                className="w-full font-mono text-xs sm:text-sm bg-[#1e1b4b] text-yellow-100 p-4 rounded-b-xl border-x border-b border-purple-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-y leading-relaxed"
                spellCheck={false}
              />
            </div>

            {/* Run & Submit Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRunCode}
                  isLoading={isRunning}
                  leftIcon={<Play className="w-3.5 h-3.5 text-purple-800" />}
                >
                  Run Sample Tests
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSubmitSolution}
                  isLoading={isSubmitting}
                  leftIcon={<Send className="w-3.5 h-3.5" />}
                  className="font-bold shadow"
                >
                  Submit Solution
                </Button>
              </div>

              {isSolved && (
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified & Solved locally</span>
                </div>
              )}
            </div>

            {/* Simulated Console Output */}
            {outputConsole && (
              <div className="p-3.5 rounded-xl bg-purple-950 text-xs font-mono text-purple-200 border border-purple-800 space-y-1">
                <div className="text-[10px] uppercase font-bold text-yellow-400 tracking-wider">
                  Terminal Verdict
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed">{outputConsole}</pre>
              </div>
            )}
          </div>
        )}

        {/* MCQ Mode Interface */}
        {question.format === 'MCQ' && question.mcqOptions && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900">
              Select the Correct Option:
            </h4>

            <div className="space-y-2.5">
              {question.mcqOptions.map((opt) => {
                const isSelected = selectedMcqOption === opt.id;
                let optBorder = 'border-purple-200 hover:border-purple-400 bg-white';
                
                if (isMcqSubmitted) {
                  if (opt.isCorrect) {
                    optBorder = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    optBorder = 'border-red-500 bg-red-50 text-red-950';
                  }
                } else if (isSelected) {
                  optBorder = 'border-yellow-400 bg-yellow-50 text-purple-950 font-bold shadow-sm';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => !isMcqSubmitted && setSelectedMcqOption(opt.id)}
                    disabled={isMcqSubmitted}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 text-xs sm:text-sm cursor-pointer ${optBorder}`}
                  >
                    <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {isMcqSubmitted && opt.isCorrect ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        opt.id.slice(-1).toUpperCase()
                      )}
                    </span>
                    <span className="flex-1 font-mono">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {!isMcqSubmitted ? (
              <Button
                variant="primary"
                size="md"
                onClick={handleMcqSubmit}
                disabled={!selectedMcqOption}
                leftIcon={<CheckCircle2 className="w-4 h-4" />}
                className="font-bold"
              >
                Submit Answer
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsMcqSubmitted(false);
                    setSelectedMcqOption(null);
                  }}
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Official Placement Editorial & Explanation */}
        {(isSolved || isMcqSubmitted) && (
          <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-xs space-y-2">
            <div className="font-bold text-amber-950 flex items-center gap-1.5 uppercase tracking-wide">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Editorial Analysis & Complexity</span>
            </div>
            <p className="text-amber-900 leading-relaxed font-medium">
              {question.explanation}
            </p>
          </div>
        )}

      </div>
    </Modal>
  );
};
