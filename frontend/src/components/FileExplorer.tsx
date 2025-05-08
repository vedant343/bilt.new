import React, { useState } from "react";
import {
  FolderTree,
  File,
  ChevronRight,
  ChevronDown,
  FileIcon,
} from "lucide-react";
import { FileItem } from "../types";

interface FileExplorerProps {
  files: FileItem[];
  onFileSelect: (file: FileItem) => void;
}

interface FileNodeProps {
  item: FileItem;
  depth: number;
  onFileClick: (file: FileItem) => void;
}

function FileNode({ item, depth, onFileClick }: FileNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (item.type === "folder") {
      setIsExpanded(!isExpanded);
    } else {
      onFileClick(item);
    }
  };

  return (
    <div className="select-none">
      <div
        className="flex text-sm font-semibold items-center gap-2 p-2 hover:bg-gray-600 hover:text-white rounded-md cursor-pointer transition-colors"
        onClick={handleClick}
      >
        {item.type === "folder" && (
          <span className="text-gray-500">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        )}
        {item.type === "folder" ? (
          <></>
        ) : (
          <FileIcon className="w-4 h-4 text-blue-600" />
        )}
        <span className="text-slate-200">{item.name}</span>
      </div>
      {item.type === "folder" && isExpanded && item.children && (
        <div className="pl-4">
          {item.children.map((child, index) => (
            <FileNode
              key={`${child.path}-${index}`}
              item={child}
              depth={depth + 1}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileExplorer({ files, onFileSelect }: FileExplorerProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-4 h-full overflow-auto border border-gray-700">
      <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-slate-200">
        File Explorer
      </h2>
      <hr className="border-gray-600 mb-2" />
      <div className="space-y-1 max-h-[75vh] overflow-auto">
        {files.map((file, index) => (
          <FileNode
            key={`${file.path}-${index}`}
            item={file}
            depth={0}
            onFileClick={onFileSelect}
          />
        ))}
      </div>
    </div>
  );
}
