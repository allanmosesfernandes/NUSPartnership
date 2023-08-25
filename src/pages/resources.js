import { graphql } from "gatsby";
import React from "react";

function resources({ data }) {
  const files = data.allWpLodu.nodes;
  return (
    <div className="mt-40 px-4">
      <h2 className="text-oceanBlue text-4xl font-bold my-auto items-center font-body sm:text-5xl">
        Resources
      </h2>
      <div className="flex flex-col mt-8">
        {
          // Loop through posts
            files.map((file, index) => {
              const { title, id } = file;
              const fileURL = file.fileUpload.fileUpload.mediaItemUrl;
              console.log(file);
              const serialNumber = index + 1;
              return (
                <div key={id} className="text-slate-500 font-body text-lg flex items-center">
                  <p>{serialNumber < 10 ? `0${serialNumber}` : { serialNumber }}.</p>
                  <a className="" href={fileURL}>
                    {title}
                  </a>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}

export default resources;
export const query = graphql`
query MyQuery {
  allWpLodu {
    nodes {
      title
      fileUpload {
        fileUpload {
          mediaItemUrl
          fileSize
        }
      }
      id
    }
  }
}
`;
