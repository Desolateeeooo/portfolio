import { ReactNode } from "react";

function ProjectGalleryTemplate({children}: {children : ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default ProjectGalleryTemplate;