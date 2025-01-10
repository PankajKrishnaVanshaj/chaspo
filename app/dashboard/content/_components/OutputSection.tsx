import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleCopy } from "@/components/Actions";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      try {
        editorInstance.setMarkdown(aiOutput);
      } catch (err) {
        setError("Failed to set AI output. Please try again.");
      }
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={() => handleCopy(aiOutput)}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        // onChange={() =>
        //   console.log(editorRef.current?.getInstance().getMarkdown())
        // }
      />
    </div>
  );
}

export default OutputSection;
