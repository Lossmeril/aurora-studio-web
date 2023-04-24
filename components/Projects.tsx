import { useEffect, useState } from "react";
import { Text } from "@nextui-org/react";

const ProjectCard = ({ colspan, rowspan, children, img }: any) => {
  return (
    <div
      className={
        "item" + (colspan ? " colspan" : "") + (rowspan ? " rowspan" : "")
      }
      style={{
        background: "linear-gradient(45deg, #5bc5f2, #aa7dea, #ed4fa2)",
      }}
    >
      <div className="project-content">
        <ProjectTitle>{children}</ProjectTitle>
      </div>

      <div
        className="project-image"
        style={{
          background: "url(/img/projects/" + img + ")",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const ProjectTitle = ({ children }: any) => {
  return (
    <Text size={65} weight="bold" css={{ lineHeight: "1em" }}>
      {children}
    </Text>
  );
};

const Projects = () => {
  const [gridPos, setGridPos] = useState({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      const percentage = (event.clientX / window.innerWidth) * 10 - 5;
      setGridPos({ x: percentage });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="projects-grid" style={{ left: -50 - gridPos.x + "%" }}>
      <ProjectCard rowspan img="fort.jpg">
        FORT frames
      </ProjectCard>
      <ProjectCard img="fort.jpg">FORT frames</ProjectCard>
      <ProjectCard colspan img="fort.jpg">
        FORT frames
      </ProjectCard>
      <ProjectCard img="fort.jpg">FORT frames</ProjectCard>
      <ProjectCard colspan img="fort.jpg">
        FORT frames
      </ProjectCard>
      <ProjectCard img="fort.jpg">FORT frames</ProjectCard>
      <ProjectCard img="fort.jpg">FORT frames</ProjectCard>
    </div>
  );
};

export default Projects;
