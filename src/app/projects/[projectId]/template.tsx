import { ReactNode } from "react";

function ProjectGalleryTemplate({children}: {children : ReactNode}) {
  return (
      <body>
        {children}
      </body>
  );
}

export default ProjectGalleryTemplate;