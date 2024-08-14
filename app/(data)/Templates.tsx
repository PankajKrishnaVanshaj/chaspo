export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",
    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "Blog",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "Blog",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "Instagram",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "AI Model to Correct your english grammar by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "English",
    slug: "english-grammar-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammar and give output in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in rich text editor format in code block",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in rich text editor format in code block",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Code Bug Detector",
    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in rich text editor format in code block",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",
    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output in rich text editor format",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketing",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commerce business give output in rich text editor format",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "SEO Keywords",
    desc: "Generate optimized SEO keywords for your content.",
    icon: "https://cdn-icons-png.flaticon.com/128/1617/1617543.png",
    category: "SEO",
    slug: "seo-keywords",
    aiPrompt:
      "Generate 10 SEO optimized keywords based on the provided content in rich text editor format",
    form: [
      {
        label: "Enter content for SEO keywords",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Post",
    desc: "Create engaging social media posts with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/3011/3011270.png",
    category: "Social Media",
    slug: "social-media-post",
    aiPrompt:
      "Generate 3 engaging social media posts based on the provided topic and keywords in rich text editor format",
    form: [
      {
        label: "Enter topic for social media posts",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter keywords for social media posts",
        field: "input",
        name: "keywords",
      },
    ],
  },
  {
    name: "Email Newsletter",
    desc: "Generate captivating email newsletters with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/561/561127.png",
    category: "Email Marketing",
    slug: "email-newsletter",
    aiPrompt:
      "Generate an engaging email newsletter based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the newsletter",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the newsletter",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Video Script",
    desc: "Create video scripts with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/2173/2173071.png",
    category: "Video",
    slug: "video-script",
    aiPrompt:
      "Generate a video script based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the video script",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the video script",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Ad Copy",
    desc: "Generate compelling ad copy with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/3081/3081877.png",
    category: "Advertising",
    slug: "ad-copy",
    aiPrompt:
      "Generate compelling ad copy based on the provided product and outline in rich text editor format",
    form: [
      {
        label: "Enter product name for the ad",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter outline for the ad",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Press Release",
    desc: "Generate professional press releases with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/3079/3079223.png",
    category: "PR",
    slug: "press-release",
    aiPrompt:
      "Generate a professional press release based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the press release",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the press release",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Resume",
    desc: "Create a professional resume with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942741.png",
    category: "Career",
    slug: "resume",
    aiPrompt:
      "Generate a professional resume based on the provided details in rich text editor format",
    form: [
      {
        label: "Enter your details for the resume",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Cover Letter",
    desc: "Create a professional cover letter with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942747.png",
    category: "Career",
    slug: "cover-letter",
    aiPrompt:
      "Generate a professional cover letter based on the provided details in rich text editor format",
    form: [
      {
        label: "Enter your details for the cover letter",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Interview Questions",
    desc: "Generate interview questions with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942743.png",
    category: "Career",
    slug: "interview-questions",
    aiPrompt:
      "Generate a list of interview questions based on the provided job description in rich text editor format",
    form: [
      {
        label: "Enter job description for interview questions",
        field: "textarea",
        name: "jobDescription",
        required: true,
      },
    ],
  },
  {
    name: "FAQ",
    desc: "Create a list of frequently asked questions with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/2942/2942745.png",
    category: "Customer Support",
    slug: "faq",
    aiPrompt:
      "Generate a list of frequently asked questions based on the provided topic in rich text editor format",
    form: [
      {
        label: "Enter topic for the FAQ",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Testimonial",
    desc: "Generate testimonials with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942742.png",
    category: "Customer Support",
    slug: "testimonial",
    aiPrompt:
      "Generate a testimonial based on the provided product and user feedback in rich text editor format",
    form: [
      {
        label: "Enter product name for the testimonial",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter user feedback for the testimonial",
        field: "textarea",
        name: "feedback",
        required: true,
      },
    ],
  },
  {
    name: "Case Study",
    desc: "Generate case studies with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942744.png",
    category: "Research",
    slug: "case-study",
    aiPrompt:
      "Generate a case study based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the case study",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the case study",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "White Paper",
    desc: "Generate white papers with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942745.png",
    category: "Research",
    slug: "white-paper",
    aiPrompt:
      "Generate a white paper based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the white paper",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the white paper",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Ebook",
    desc: "Generate ebooks with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942746.png",
    category: "Publishing",
    slug: "ebook",
    aiPrompt:
      "Generate an ebook based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the ebook",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the ebook",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Job Description",
    desc: "Generate job descriptions with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
    category: "Career",
    slug: "job-description",
    aiPrompt:
      "Generate a job description based on the provided job title and responsibilities in rich text editor format",
    form: [
      {
        label: "Enter job title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "Enter job responsibilities",
        field: "textarea",
        name: "responsibilities",
      },
    ],
  },
  {
    name: "Meeting Agenda",
    desc: "Generate meeting agendas with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942749.png",
    category: "Business",
    slug: "meeting-agenda",
    aiPrompt:
      "Generate a meeting agenda based on the provided topics and outline in rich text editor format",
    form: [
      {
        label: "Enter topics for the meeting agenda",
        field: "textarea",
        name: "topics",
        required: true,
      },
    ],
  },
  {
    name: "Project Proposal",
    desc: "Generate project proposals with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942750.png",
    category: "Business",
    slug: "project-proposal",
    aiPrompt:
      "Generate a project proposal based on the provided project details and outline in rich text editor format",
    form: [
      {
        label: "Enter project details",
        field: "textarea",
        name: "details",
        required: true,
      },
      {
        label: "Enter outline for the project proposal",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Business Plan",
    desc: "Generate business plans with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942751.png",
    category: "Business",
    slug: "business-plan",
    aiPrompt:
      "Generate a business plan based on the provided business details and outline in rich text editor format",
    form: [
      {
        label: "Enter business details",
        field: "textarea",
        name: "details",
        required: true,
      },
      {
        label: "Enter outline for the business plan",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Website Copy",
    desc: "Generate website copy with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942752.png",
    category: "Web Development",
    slug: "website-copy",
    aiPrompt:
      "Generate website copy based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the website copy",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the website copy",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Landing Page",
    desc: "Generate landing pages with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942753.png",
    category: "Web Development",
    slug: "landing-page",
    aiPrompt:
      "Generate a landing page based on the provided topic and outline in rich text editor format",
    form: [
      {
        label: "Enter topic for the landing page",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter outline for the landing page",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Product Review",
    desc: "Generate product reviews with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942754.png",
    category: "Marketing",
    slug: "product-review",
    aiPrompt:
      "Generate a product review based on the provided product name and user feedback in rich text editor format",
    form: [
      {
        label: "Enter product name for the review",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter user feedback for the review",
        field: "textarea",
        name: "feedback",
        required: true,
      },
    ],
  },
  {
    name: "Slogan",
    desc: "Generate catchy slogans with AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942755.png",
    category: "Marketing",
    slug: "slogan",
    aiPrompt:
      "Generate 5-10 catchy slogans based on the provided product and outline in rich text editor format",
    form: [
      {
        label: "Enter product name for the slogan",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter outline for the slogan",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
