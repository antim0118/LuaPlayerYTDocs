import { Text } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export const ManyText = ({ children }: PropsWithChildren) => {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((v) => {
          if (typeof v === "string") {
            const lines = v.split("\n");
            return (
              <>
                {lines.map((line, idx) => (
                  <Text key={idx}>{line}</Text>
                ))}
              </>
            );
          }
          return v;
        })}
      </>
    );
  }

  return children;
};
