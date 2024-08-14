"use client";
import Link from "next/link";
import FormSection from "../_components/FormSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useContext, useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { chatSession } from "@/utils/AiModal";
import dynamic from "next/dynamic";
import axios from "axios";
import UpdateCreditUsageContext from "@/app/(context)/UpdateCreditUsageContext";
import TotalUsageContext from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

// Dynamically import OutputSection with no SSR
const OutputSection = dynamic(() => import("../_components/OutputSection"), {
  ssr: false,
});

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  /**
   * Used to generate content from AI
   * @param formData
   * @returns
   */
  const GenerateAIContent = async (formData: any, retryCount = 0) => {
    if (totalUsage >= 50) {
      console.log("Please Upgrade");
      push("/dashboard/billing");
      return;
    }

    setLoading(true);
    setTotalUsage(totalUsage + 1);

    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAIPrompt);
      setAiOutput(await result.response.text());
      await SaveInDb(
        JSON.stringify(formData),
        selectedTemplate?.slug,
        await result.response.text()
      );
    } catch (error) {
      if (retryCount < 3) {
        setTimeout(
          () => GenerateAIContent(formData, retryCount + 1),
          2 ** retryCount * 1000
        ); // Exponential backoff
      } else {
        console.error("Error fetching AI content:", error);
        setAiOutput(
          "The AI model is currently overloaded. Please try again later."
        );
      }
    } finally {
      setLoading(false);
    }

    // setUpdateCreditUsage(Date.now());
  };

  // save history in db
  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    try {
      const response = await axios.post("/api/history", {
        formData,
        templateSlug: slug,
        aiResponse: aiResp,
      });

      // console.log(response.data);
    } catch (error) {
      console.error("Error saving to database:", error);
    }
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
