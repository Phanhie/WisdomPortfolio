import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const ProjectSection = ({ title, projects, isEven }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className={`w-full py-16 ${isEven ? 'bg-[#172121]' : 'bg-[#151821]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} 💼
        </h2>
        
        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className={`${isEven ? 'bg-[#151821]' : 'bg-[#1a1f2e]'} text-thistle p-8 rounded-lg shadow-xl h-full`}>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${isEven ? 'bg-[#252a3a]' : 'bg-[#2a303c]'} text-gray-300 px-3 py-1 text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.links.preview}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Eye size={16} />
                      <span>Preview</span>
                    </a>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectCategories = {
    technicalArticles: {
      title: "Technical Articles",
      projects: [
        {
          title: "What happens when you type https://www.google.com in your browser and press Enter?",
          description: "An informative article about the browser and how it works to render results to users",
          tags: ["Google", "Browser ", "Technical Writing"],
          links: { preview: "https://medium.com/@Phanhie/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-d82abb17f7fe" },
        },
        {
          title: "Position Relative and Absolute",
          description: "A beginner's guide to working with Relative and Absoluet position property",
          tags: ["HTML", "CSS", "Position Property"],
          links: { preview: "https://medium.com/@Phanhie/position-relative-and-absolute-3b248726a1e0" },
        },
        {
          title: "How to Maximize Remote Team Collaboration with SaaS Software",
          description: "A step-by-step guide on deploying React applications to Kubernetes using Docker and Minikube.",
          tags: ["SAAS", "Collaboartion", "Remote Team"],
          links: { preview: "https://medium.com/@Phanhie/how-to-maximize-remote-team-collaboration-with-saas-software-9b4d4e53623d" },
        },
       
      ],
    },
    userGuides: {
      title: "User Guides",
      projects: [
        {
          title: "How to center a div in CSS",
          description: "Comprehensive tutorial on centering a DIV in CSS",
          tags: ["CSS", "HTML"],
          links: { preview: "https://medium.com/@Phanhie/how-to-center-a-div-in-css-4dff426256fa" },
        },
        {
          title: "APIs — A BEGINNERS GUIDE",
          description: "Step-by-step guide for getting started with APIs.",
          tags: ["Beginner", "API", "SOftware Dev"],
          links: { preview: "https://medium.com/@Phanhie/apis-a-beginners-guide-cd02853f105e" },
        }
      ],
    },
    // apiDocumentation: {
    //   title: "API Documentation",
    //   projects: [
    //     {
    //       title: "C-One API Reference",
    //       description: "Comprehensive API documentation for C-One platform, including authentication and endpoint details.",
    //       tags: ["API", "Technical Writing", "ReadMe"],
    //       links: { preview: "https://c-one.readme.io/reference/getting-started-with-your-api" },
    //     },
    //     {
    //       title: "Nylas API Reference",
    //       description: "Comprehensive API documentation for Nylas platform, including authentication, endpoints, and integration guides.",
    //       tags: ["API", "SDK", "Email"],
    //       links: { preview: "https://developer.nylas.com/docs/api/" },
    //     },
    //     {
    //       title: "Custom API Documentation",
    //       description: "Detailed Postman collection documentation for custom API endpoints and integration scenarios.",
    //       tags: ["API", "Postman", "Integration"],
    //       links: { preview: "https://documenter.getpostman.com/view/1835497/UzBnrSFB#intro" },
    //     },
    //     {
    //       title: "Orchestro AI API",
    //       description: "Developer documentation for Orchestro AI platform APIs and integration patterns.",
    //       tags: ["AI", "API", "ML"],
    //       links: { preview: "https://developer.orchestro.ai/introduction" },
    //     },
    //     {
    //       title: "DummyAPI Documentation",
    //       description: "Swagger documentation for DummyAPI showcasing RESTful endpoints and usage examples.",
    //       tags: ["API", "Swagger", "OpenAPI"],
    //       links: { preview: "https://app.swaggerhub.com/apis-docs/wise4rmgod/DummyAPI/0.1" },
    //     }
    //   ],
    // },
    // documentationSites: {
    //   title: "Developer Documentation",
    //   projects: [
    //     {
    //       title: "NeuBird AI API Guide",
    //       description: "Quick start guide and API documentation for NeuBird AI platform integration.",
    //       tags: ["AI", "API", "Documentation"],
    //       links: { preview: "https://help.neubird.ai/introduction/quick_start/" },
    //     },
    //     {
    //       title: "Technical Writing Masterclass",
    //       description: "Educational platform for technical writing best practices and guidelines.",
    //       tags: ["Technical Writing", "Education"],
    //       links: { preview: "https://technicalwritingmp.com/" },
    //     },
    //     {
    //       title: "Interswitch Developer Docs",
    //       description: "Developer documentation for Interswitch payment integration and services.",
    //       tags: ["Payments", "Integration", "API"],
    //       links: { preview: "https://docs.interswitchgroup.com/v1.1/docs/home" },
    //     },
    //     {
    //       title: "Accumulate Network Docs",
    //       description: "Technical documentation for the Accumulate blockchain network protocols and APIs.",
    //       tags: ["Blockchain", "Documentation"],
    //       links: { preview: "https://docs.accumulatenetwork.io" },
    //     },
    //     {
    //       title: "Nylas Developer Portal",
    //       description: "Complete developer documentation for Nylas email, calendar, and contacts APIs.",
    //       tags: ["API", "Integration", "Email"],
    //       links: { preview: "https://developer.nylas.com" },
    //     },
    //     {
    //       title: "Jetpack Compose Tutorial",
    //       description: "Comprehensive tutorial for Android development with Jetpack Compose.",
    //       tags: ["Android", "Kotlin", "Mobile"],
    //       links: { preview: "https://wise4rmgod.github.io/Jetpack-Compose-Tutorial/" },
    //     },
    //     {
    //       title: "AI Assessment Tool",
    //       description: "Documentation portal for AI assessment reporting tool with comprehensive guides and examples.",
    //       tags: ["AI", "Documentation", "Assessment"],
    //       links: { preview: "https://www.aiat.report/report/about" },
    //     },
    //     {
    //       title: "Blockchain Beginner Guide",
    //       description: "Educational resource for blockchain development fundamentals.",
    //       tags: ["Blockchain", "Tutorial", "Web3"],
    //       links: { preview: "https://beginnerblockchain.netlify.app" },
    //     },
    //     {
    //       title: "Rootstock Developer Portal",
    //       description: "Developer documentation for building on the Rootstock blockchain platform.",
    //       tags: ["Blockchain", "Smart Contracts", "Web3"],
    //       links: { preview: "https://dev.rootstock.io" },
    //     }
    //   ],
    // },
    // blockchainArticles: {
    //   title: "Blockchain Office Hours",
    //   projects: [
    //     {
    //       title: "The Graph Indexer Office Hours #160",
    //       description: "Summary and insights from The Graph's indexer office hours session, covering recent updates and community discussions.",
    //       tags: ["Blockchain", "The Graph", "Web3"],
    //       links: { preview: "https://blog.pinax.network/events/the-graph-indexer-office-hours-160/" },
    //     },
    //     {
    //       title: "The Graph Indexer Office Hours #159",
    //       description: "Detailed coverage of The Graph's indexer office hours, including technical discussions and network updates.",
    //       tags: ["Blockchain", "The Graph", "Web3"],
    //       links: { preview: "https://blog.pinax.network/events/the-graph-indexer-office-hours-159/" },
    //     }
    //   ],
    // },
    // openSourceContributions: {
    //   title: "Open Source Contributions",
    //   projects: [
    //     {
    //       title: "Go Ethereum (Geth) Documentation",
    //       description: "Contributed to the official documentation for Go Ethereum (Geth), the most popular Ethereum implementation.",
    //       tags: ["Ethereum", "Blockchain", "Go"],
    //       links: { preview: "https://geth.ethereum.org/docs/getting-started" },
    //     },
    //     {
    //       title: "Flow Blockchain Documentation",
    //       description: "Documentation contributions for Flow blockchain platform, covering developer guides and protocol specifications.",
    //       tags: ["Flow", "Blockchain", "Web3"],
    //       links: { preview: "https://developers.flow.com/" },
    //     }
    //   ],
    // },
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <ProjectSection 
          key={key} 
          title={category.title} 
          projects={category.projects}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;