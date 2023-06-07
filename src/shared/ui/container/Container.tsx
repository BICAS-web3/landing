import cn from "classnames";
import { FC } from "react";

import type { PropsOf } from "@/shared/types";

import s from "./Container.module.scss";

export interface ContainerProps extends PropsOf<"div"> {}

export const Container: FC<ContainerProps> = (props) => {
  const { className, ...rest } = props;

  return <div className={cn(s._, className)} {...rest} />;
};
