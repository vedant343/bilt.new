import React from "react";
import "./App.css";
import "./index.css";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

type TextAreaProps = {
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

// Header Component
const Header: React.FC = () => (
  <header className="text-center mb-8">
    <h1 className="text-3xl md:text-4xl font-bold text-white">Bilt</h1>
  </header>
);

// TextArea Component
const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  rows = 4,
  value,
  onChange,
}) => (
  <textarea
    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
    rows={rows}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

// Button Component
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => (
  <button
    type={type}
    className={`mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// InputArea Component
const InputArea: React.FC = () => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
      <TextArea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};
// Main App Component
const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <Header />
      <InputArea />
    </div>
  );
};

export default App;
