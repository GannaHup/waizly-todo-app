import Image from "next/image";

import IllustrationNotFound from "@/assets/svg/ill-not-found.svg";

export default function PageNotFound() {
  return <Image src={IllustrationNotFound} fill alt="Illustration Not Found" />;
}
