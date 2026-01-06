import { Link } from "@chakra-ui/react";
import { type PropsWithChildren } from "react";
import { LuExternalLink } from "react-icons/lu";

type Props = PropsWithChildren & {
  href: string;
};

export const ExternalLink = ({ children, href }: Props) => {
  return (
    <Link href={href} target="_blank" fontWeight={600} textDecoration={"underline"}>
      {children}
      <LuExternalLink />
    </Link>
  );
};
